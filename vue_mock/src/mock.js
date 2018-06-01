// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// 请求延迟时间
Mock.setup({
  timeout: '500-2000'
})

// Mock.mock( 请求地址, 请求类型 , 返回的数据)
Mock.mock('/api/news', 'get', newData)
Mock.mock('/api/userInfo', 'get', userInfo)
Mock.mock('/api/tags', 'get', Mock.mock({
  'title|20': ['HTML']
}))
Mock.mock('/api/banner', 'get', Random.image('1920x1080', '#941290', '#666', 'png', '一张图片'))



// 数据返回
function newData () {
  let articles = []
  for (let i = 0; i < 10; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }

  return {
    articles: articles
  }
}

function userInfo () {
  return Mock.mock({
    'username|5-10': '倪军',
    'isAdmin|1': true
  })
}

