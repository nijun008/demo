var a = 'a'
// console.log(a)
// console.log(this.a)
// console.log(global.a)
// console.log(__filename)  //本文件绝对路径
// var module2 = require('./2.js') //require的返回值是加载模块的exports
// console.log(module2)

// console.log(__filename)
// console.log(__dirname)

// setInterval(function () {
//   var d  = new Date()
//   console.log(d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日 ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds())
// }, 1000);

// console.log(process.arch) //进程对象

var fs = require('fs')

var bf1 = new Buffer(20)

// fs.open('./123.txt', 'r+', function (err, fd) {
//   if(err) {
//     console.log('文件打开失败')
//   } else {
//     console.log('文件打开成功')
//     // fs.read(fd, bf1, 0, 10, null, function (err, length, newBf) {
//     //   console.log(bf1)
//     //   console.log(bf1.toString('utf-8'))
//     // })
//     // var bf2 = new Buffer('12243')
//     // fs.write(fd, 0, 0, 0, function () {

//     // })
//     fs.write(fd, '哈哈', 5, 'utf-8', function () {
//       fs.close(fd, function () {
//         console.log('文件关闭')
//       })
//     })
//   }
// })

// console.log('ok')

// var fd = fs.openSync('./123.txt', 'r')

// console.log(fd)

// fs.writeFile('./5.txt', '嘿嘿', function () {
//   console.log(arguments)
// });

// fs.appendFile('./5.txt', ' 追加', function () {
//   console.log(arguments)
// })

// fs.exists( './5.txt', function (flag) {
//   console.log(flag)
//   if(!flag) {
//     fs.writeFile('./5.txt', '新建的文件', function (err) {
//       if(err) {
//         console.log('新建文件失败')
//       } else{
//         console.log('新建文件成功')
//       }
//     });
//   } else {
//     fs.appendFile('./5.txt', ' 追加的内容', function (err) {
//       if(err) {
//         console.log('追加内容失败')
//       } else {
//         console.log('追加内容成功')
//       }
//     });
//   }
// } )

// fs.readFile('./5.txt', function (err, data) {
//   if(err) {
//     console.log('读取失败')
//   } else {
//     console.log(data.toString('utf-8'))
//   }
// });

// fs.unlink('./123.txt', function (err) {
//   console.log('删除成功')
// });

// fs.rename('./5.txt', './new.txt', function (err) {
//   if(err) {
//     console.log('重命名失败')
//   } else {
//     console.log('重命名成功')
//   }
// });

// fs.stat('./new.txt', function () {
//   console.log(arguments)
// })
var http = require('http')

var server = http.createServer();

server.on('error', function (err) {
  console.log(err)
})

server.on('listening', function () {
  console.log('服务启动...')
})

server.on('request', function (req, res) {
  console.log('收到客户端请求')
  console.log(req.url)

  res.setHeader('nijun', 'test')
  res.writeHeader(200, 'success',{
    'content-type' : 'text/html;charset=utf-8'
  })
  res.write('<h1>hello</h1>')
  res.end()
})


server.listen(8080, 'localhost');
