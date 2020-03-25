var request = require('request')
var cheerio = require('cheerio')
var iconv = require('iconv-lite')

var url = 'http://p42u.com/cn/'
var movies = []

function getPage(url, callBack) {
  var options = {
    url: url,
    encoding: null,
    //代理服务器
    //proxy: 'http://xxx.xxx.xxx.xxx:8888',
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36' }
  }
  request(options, callBack)
}

function getAv(url) {
  getPage(url, function (err, res, body) {
    if(!err && res.statusCode == 200) {
      var $ = cheerio.load(body, { decodeEntities: false })
      $('#content .video').each((i, item) => {
        movies.push({
          url: url + $(item).find('.post-headline').attr('href').substring(2),
          code: $(item).find('.id').html(),
          title: $(item).find('.post_title').html()
        })
      })
    }
  })

}

getAv(url)

setTimeout(() => {
  movies.forEach(item => {
    getPage(item.url, function (err, res, body) {
      if (!err && res.statusCode === 200) {
        var $ = cheerio.load(body, { decodeEntities: false })
        item.date = $('#video_date .text').html()
        item.timeLength = $('#video_length .text').html() + '分钟'
        item.video_review = $('#video_review .score').html()
        let tagStr = ''
        $('#video_genres .genre a').each(function (i, item) {
          let itemStr = $(item).html()
          tagStr = tagStr ? tagStr + ' ' + itemStr : itemStr
        })
        item.tag = tagStr

        console.log(item)
      }
    })
  })
}, 2000)

