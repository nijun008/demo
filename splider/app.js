var request = require('request')
var cheerio = require('cheerio')
var iconv = require('iconv-lite')
var mongoose = require('mongoose')

//爬取初始设置
var startPage = 1
var endPage = 3
var host = 'http://www.dytt8.net'
var url = 'http://www.dytt8.net/html/gndy/dyzz/list_23_' + startPage + '.html'

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

//获取电影信息
function getMovie(url) {
  getHtml(url, function (err, res, body) {
    var html = iconv.decode(body, 'gb2312')
    var $ = cheerio.load(html, { decodeEntities: false })
    var name = $('.co_area2 .title_all font').text()
    var poster = $('#Zoom img').eq(0).attr('src')
    var downloadUrl = $('#Zoom table').eq(0).find('a').attr('href')
    var rateHTML = $('#Zoom span').text()
    var rateIndex = rateHTML.indexOf('豆瓣评分')
    var rate
    if (rateIndex > -1) {
      rate = rateHTML.slice(rateIndex + 5, rateIndex + 8)
    } else {
      rate = 0
    }
    //保存到数据库
    var movie = new Movie({
      name: name,
      poster: poster,
      rate: rate,
      downloadUrl: downloadUrl
    })
    movie.save().then(newMovie => {
      console.log('保存成功')
    }).catch (err => {
      console.log('保存出错')
    }) 
  })
}

mongoose.connect('mongodb://localhost:27017/splider', function (err) {
  if(err) {
    console.log('数据库连接失败')
  } else {
    console.log('数据库已连接')
    //开始爬取
    getHtml(url, function (err, res, body) {
      var html = iconv.decode(body, 'gb2312')
      var $ = cheerio.load(html, { decodeEntities: false })
      $('.co_content8 .ulink').each((i, item) => {
        var movieUrl = host + $(item).attr('href')
        //爬取电影详情页
        getMovie(movieUrl)
      })
    })

  }
})