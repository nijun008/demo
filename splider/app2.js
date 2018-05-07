var request = require('request')
var cheerio = require('cheerio')
var iconv = require('iconv-lite')
var mongoose = require('mongoose')
var async = require("async")

//爬取初始设置
var startPage = 1
var endPage = 174
var host = 'http://www.dytt8.net'
var urls = []
var movieUrls = []
var successMovie = []
var errorMovie = []
var requestErr = []

for(let i = startPage;i<=endPage;i++) {
  urls.push('http://www.dytt8.net/html/gndy/dyzz/list_23_' + i + '.html')
}

//数据库Schema
var movieSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  poster: {
    type: String,
    default: ''
  },
  rate: {
    type: Number,
    default: 0
  },
  imdbRate: {
    type: Number,
    default: 0
  },
  downloadUrl: {
    type: String,
    default: ''
  }
})
//数据库模型
var Movie = mongoose.model('movie', movieSchema)

//请求设置
function getHtml (url, callback) {
  var options = {
    url: url,
    encoding: null,
    //代理服务器
    //proxy: 'http://xxx.xxx.xxx.xxx:8888',
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36' }
  }
  request(options, callback)
}

//获取电影url
function getMovieUrls(url, callback) {
  getHtml(url, function (err, res, body) {
    if(!err && res.statusCode == 200) {
      var html = iconv.decode(body, 'gb2312')
      var $ = cheerio.load(html, { decodeEntities: false })
      $('.co_content8 .ulink').each((i, item) => {
        movieUrls.push(host + $(item).attr('href'))
      })
    } else {
      requestErr.push(url)
      console.log('请求出错：' + url)
    }
    console.log('找到' + movieUrls.length + '条记录')
    setTimeout(function() {
      callback(null, '抓取完成:' + url)
    }, 100)
  })
}

//获取电影信息
function getMovie(movieUrl, callback) {
  getHtml(movieUrl, function (err, res, body) {
    if(!err && res.statusCode == 200) {
      var html = iconv.decode(body, 'gb2312')
      var $ = cheerio.load(html, { decodeEntities: false })
      var name = $('.co_area2 .title_all font').text()
      var poster = $('#Zoom img').eq(0).attr('src')
      var downloadUrl = $('#Zoom table').eq(0).find('a').attr('href')
      var rateHTML = $('#Zoom span').text()
      var rateIndex = rateHTML.indexOf('豆瓣评分')
      var rate
      var rateStr
      if (rateIndex > -1) {
        rateStr = rateHTML.slice(rateIndex + 4, rateIndex + 9)
        rate = rateStr.replace(/[^0-9\.]/g,'').slice(0, 3)
        if (rate >= 10 || rate < 0) {
          rate = 0
        }
      } else {
        rate = 0
      }

      var imdbRate
      var imdbRateStr
      var imdbRateIndex = Math.max(rateHTML.indexOf('IMDb评分'), rateHTML.indexOf('IMDB评分'))
      if (imdbRateIndex > -1) {
        imdbRateStr = rateHTML.slice(imdbRateIndex + 6, imdbRateIndex + 11)
        imdbRate = imdbRateStr.replace(/[^0-9\.]/g,'').slice(0, 3)
        if (imdbRate >= 10 || imdbRate <= 0) {
          imdbRate = 0
        }
      } else {
        imdbRate = 0
      }

      //保存到数据库
      var movie = new Movie({
        name: name,
        poster: poster,
        rate: rate,
        imdbRate: imdbRate,
        downloadUrl: downloadUrl
      })
      movie.save().then(newMovie => {
        successMovie.push(name)
      }).catch (err => {
        errorMovie.push(name)
      })
    } else {
      requestErr.push(movieUrl)
      console.log('请求出错：' + movieUrl)
    }
    console.log('第' + successMovie.length + '部电影完成')
    setTimeout(function() {
      callback(null, '抓取完成:' + movieUrl)
    }, 100)
  })
}

mongoose.connect('mongodb://localhost:27017/splider', function (err) {
  if(err) {
    console.log('数据库连接失败')
  } else {
    console.log('数据库已连接')

    //开始爬取
    async.mapLimit(urls, 5, function (url, callback) {
      getMovieUrls(url, callback)
    }, function (err, result) {
      if(err) {
          console.log(err)
        }
      console.log('电影条目数：' + movieUrls.length)

      async.mapLimit(movieUrls, 5, function (url, callback) {
        getMovie(url, callback)
      }, function (err, result) {
        if(err) {
          console.log(err)
        }
        console.log('请求失败数:' + requestErr.length)
        console.log('请求失败的链接:' + requestErr)
        console.log('成功条目数:' + successMovie.length)
        console.log('失败条目数:' + errorMovie.length)
        console.log('失败的电影:', errorMovie)
      })
    })

  }
})