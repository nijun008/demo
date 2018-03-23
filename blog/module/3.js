var http = require('http')
var url = require('url')

var server = http.createServer()

server.on('request', function (req, res) {

  var urlStr = url.parse(req.url)
  switch (urlStr.pathname) {
    case '/':
      res.writeHead(200, {
        'content-type': 'text/html;charset=utf-8'
      })
      res.write('<h1>首页</h1>')
      res.end()
      break;
    case '/user':
      res.writeHead(200, {
        'content-type': 'text/html;charset=utf-8'
      })
      res.write('<h1>个人中心</h1>')
      res.end()
      break;
    default:
      res.writeHead(404, {
        'content-type': 'text/html;charset=utf-8'
      })
      res.write('<h1>页面不存在 404</h1>')
      res.end()
      break;
  }

})

server.listen(8080, 'localhost')