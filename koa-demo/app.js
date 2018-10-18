const Koa = require('koa')
const fs = require('fs')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new Router()

app.use(bodyParser())

router.get('/', async (ctx, next) => {
  let query = ctx.request.query
  console.log(query)
  let resData =  fs.readFileSync('./view/index.html','utf-8')
  ctx.response.body = resData
})

router.post('/login', async (ctx, next) => {
  let { name, password } = ctx.request.body

  console.log(name, password)

  ctx.response.body = '密码错误'
})


app.use(router.routes())

app.listen(7000)

console.log('app started')