const fs = require('fs')
const path = require('path')
const Rsa = require('node-rsa')
const Koa = require('koa')
const static = require('koa-static')
const koaBody = require('koa-body')
const router = require('koa-router')()

const app = new Koa()

const key = new Rsa({b: 512})

// 生成公钥
let pub_key_str = key.exportKey('pkcs8-public')
// 生成私钥
let pri_key_str = key.exportKey('pkcs8-private') 

// 导入公钥
var public_key = new Rsa(pub_key_str)
// 导入私钥
var private_key = new Rsa(pri_key_str)

// 呃...大概是设置解密方式,加密解密需要统一
public_key.setOptions({encryptionScheme: 'pkcs1'})
private_key.setOptions({encryptionScheme: 'pkcs1'})

router.get('/', (ctx) => {
  let html = fs.readFileSync('./index.html', 'utf-8');
  ctx.response.body = html
})

router.get('/getKey', (ctx) => {
  let resData = {}

  // 给前端返回公钥
  resData.key = pub_key_str
  ctx.response.body = JSON.stringify(resData)
})

router.post('/post', (ctx) => {
  let query = ctx.request.body
  let user = ctx.request.body.user
  let psd = ctx.request.body.psd

  console.log('解密前：')
  console.log(user)
  console.log(psd)

  //解密
  let user_key = private_key.decrypt(user, 'utf8')
  let psd_key = private_key.decrypt(psd, 'utf8')

  console.log('解密后：')
  console.log(user_key)
  console.log(psd_key)

  ctx.response.body = JSON.stringify({
    msg: '提交成功'
  })
})

app.use(static(__dirname, './public'))

app.use(koaBody())

app.use(router.routes())

app.listen(7000)