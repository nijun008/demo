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
  startPage: 700,
  //终止页(含)
  endPage: 710,
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
  queueSum: 1,
  //请求间隔ms
  timeOut: 20,
  //重试url
  retry: [],
  //重试失败url
  retryErr: [],
  //请求头
  header: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36' }
}

let reqData = {
  client_secret: 'SAC1L82c9c9KlKKQ',
  client_id: 'M0MUd7tM7eLlkPezCPLFlGhdHjKx6JUR',
  grant_type: 'client_credentials',
  scope: 'data:read'
}

request({
  url: 'https://developer.api.autodesk.com/authentication/v1/authenticate',
  method: "POST",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  form: reqData
}, function (err, res, body) {
  console.log(err)
  console.log(res.statusCode)
  console.log(body)
})
