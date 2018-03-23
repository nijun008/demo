var http = require('http')
var url = require('url')
var fs = require('fs')

var server = http.createServer()

var pageDir = __dirname + '/html'

server.on('request', function (req, res) {
  var urlStr = url.parse(req.url)
  sendData(urlStr.pathname, req, res)
})

function sendData(file, req, res) {
  fs.readFile(pageDir + file, function (err, data) {
    console.log(pageDir + file)
    if(err) {
      fs.readFile('/html/404.html', function (err, data) {
        res.writeHead(404, {
          'content-type': 'text/html;charset=utf-8'
        })
        res.end(data)
      })
    } else {
      res.writeHead(200, {
        'content-type': 'text/html;charset=utf-8'
      })
      res.end(data)
    }
  })
}

server.listen(8080, 'localhost')