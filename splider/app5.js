//妹纸网图片爬虫
var request = require('request')
var cheerio = require('cheerio')
var iconv = require('iconv-lite')
var mongoose = require('mongoose')
var async = require("async")
var path = require('path')
var fs = require("fs")

//初始配置
const config = {
  //起始页(含)
  startPage: 201,
  //终止页(含)
  endPage: 300,
  //页面编码格式
  ecode: 'gb2312',
  //host
  host: '',
  //请求列表页
  urls: [],
  //存储路径
  dir: './images/',
  //请求详情页
  detailsUrls: [],
  //请求并发数
  queueSum: 2,
  //请求间隔ms
  timeOut: 20,
  //重试url
  retry: [],
  //重试失败url
  retryErr: [],
  //请求头
  header: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36' }
}

//创建目录
fs.mkdir(config.dir,function(err){  
  if (err) {
    console.log('目录已存在')
  } else {
    console.log('创建目录成功')
  }
})

//所有列表页
if (config.startPage && config.endPage) {
  for(let i = config.startPage;i <= config.endPage;i ++) {
    config.urls.push('http://www.meizitu.com/a/' + i + '.html')
  }
}

console.log('起始页:' + config.startPage)
console.log('终止页:' + config.endPage)

//开始爬取
mainQueue()

//主队列
function mainQueue() {
  async.mapLimit(config.urls, config.queueSum, function (url, callback) {
    getDetailsUrls(url, callback)
  }, function (err, result) {
    if(err) {
      console.log(err)
    }
    console.log('主队列完成')
    console.log(config.detailsUrls.length + '条等待操作')
    subQueue()

  })
}

//副队列
function subQueue() {
  async.mapLimit(config.detailsUrls, config.queueSum, function (url, callback) {
    getDetails(url, callback)
  }, function (err, result) {
    if(err) {
      console.log(err)
    }
    console.log('副队列完成')
    if(config.retry.length > 0) {
      console.log(config.retry.length + '条需要重试')
      oneQueue()
    }
  })
}

//队列一
function oneQueue() {
  async.mapLimit(config.retry, config.queueSum, function (url, callback) {
    getDetails(url, callback, true)
  }, function (err, result) {
    if(err) {
      console.log(err)
    }
    console.log('队列一完成')
    console.log(config.retryErr.length + '条重试出错')
  })
}

//全局请求配置
function getPage (url, callback) {
  var options = {
    url: url,
    encoding: null,
    //代理服务器
    //proxy: 'http://xxx.xxx.xxx.xxx:8888',
    headers: config.header
  }
  request(options, callback)
}

//获取url列表
function getDetailsUrls(url, callback) {
  getPage(url, function (err, res, body) {
    if(!err && res.statusCode == 200) {
      var html = iconv.decode(body, config.ecode)
      var $ = cheerio.load(body, { decodeEntities: false })
      $('#maincontent img').each((i, item) => {
        config.detailsUrls.push($(item).attr('src'))
      })
    } else {
      console.log('url列表获取出错：' + url)
    }
    setTimeout(function() {
      callback(null)
    }, config.timeOut)
  })
}

//获取详情
//@retry 是否为重试请求
function getDetails(url, callback, retry) {
  request({
    url: url,
    timeout: 10000,
    headers: config.header
  }).on('error', function () {
    if(retry) {
      config.retryErr.push(url)
    } else {
      config.retry.push(url)
    }
    setTimeout(function() {
      callback(null)
    }, config.timeOut)
  }).pipe(fs.createWriteStream(config.dir + FileName(url)).on('finish', function () {
    setTimeout(function() {
      callback(null)
    }, config.timeOut)
  }))
}

//格式化图片名称
function FileName(url) {
  return new Date().getTime() + '' + parseInt(Math.random() * 10000) + path.basename(url)
}