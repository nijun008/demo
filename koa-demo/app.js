const Koa = require('koa')

const app = new Koa()

const index = (ctx) => {
  ctx.response.body = 'Hello Koa.js'
}

app.use(index)

app.listen(7000)

console.log('app started')