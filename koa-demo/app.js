const Koa = require('koa')
const fs = require('fs')

const app = new Koa()

const index = (ctx) => {
  let resData =  fs.readFileSync('./view/index.html','utf-8')
  ctx.response.body = resData
}

app.use(index)

app.listen(7000)

console.log('app started')