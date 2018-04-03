var express = require('express')
var Tag = require('../models/Tag')
var Content = require('../models/Content')

var router  = express.Router()


router.get('/', function (req, res, next) {
  var data = {
    userInfo: req.userInfo,
    tags: [],
    contents: [],
    count: 0,
    page: Number(req.query.page) || 1,
    limit: 10,
    pages: 0,
    tag: req.query.tag || null
  }
  var where = {}
  if (data.tag) {
    where.tag = data.tag
  }
  Tag.find().then(tags => {
    data.tags = tags
    return Content.where(where).count()
  }).then(count => {
    data.count = count
    data.pages = Math.ceil(data.count / data.limit)
    data.page = Math.min(data.page, data.pages)
    data.page = Math.max(data.page, 1)
    var skip = (data.page - 1) * data.limit
    return Content.where(where).find().sort({ createTime: -1}).limit(data.limit).skip(skip).populate(['tag', 'user'])
  }).then((contents) => {
    data.contents = contents
    res.render('index', data)
  })
})

module.exports = router