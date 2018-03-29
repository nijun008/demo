var express = require('express')
var User = require('../models/User')
var Tag = require('../models/Tag')

var router  = express.Router()

//路由拦截,身份验证
router.use( function (req, res, next) {
  if(!req.userInfo.isAdmin) {
    res.send('没有管理员权限')
    return
  }
  next()
})

router.get('/', function (req, res, next) {
  res.render('admin/index', {
    userInfo: req.userInfo
  })
})

router.get('/user', function (req, res, next) {
  //读取数据库User列表
  //limit(number)方法限制获取的数据条数
  //skip(number)方法忽略数据的条数

  var page = Number(req.query.page) || 1
  var limit = 10
  var pages = 0

  User.count().then((count) => {

    pages = Math.ceil(count / limit)
    page = Math.min(page, pages)
    page = Math.max(page, 1)
    var skip = (page -1) * limit

    User.find().limit(limit).skip(skip).then((users) => {
       res.render('admin/user', {
        users: users,
        page: page,
        count: count,
        pages: pages,
        limit: limit
      })
    })
  })
})

router.get('/tag', function (req, res, next) {
  var page = Number(req.query.page) || 1
  var limit = 10
  var pages = 0

  Tag.count().then((count) => {

    pages = Math.ceil(count / limit)
    page = Math.min(page, pages)
    page = Math.max(page, 1)
    var skip = (page - 1) * limit

    Tag.find().limit(limit).skip(skip).then((tags) => {
      res.render('admin/tag', {
        tags: tags,
        page: page,
        count: count,
        pages: pages,
        limit: limit
      })
    })
  })
})

router.get('/tag/add', function (req, res, next) {
  res.render('admin/tag_add', {
    userInfo: req.userInfo
  })
})

router.post('/tag/add', function (req, res, next) {
  var name = req.body.name

  if(name == '') {
    res.render('admin/error', {
      userInfo: req.userInfo,
      message: '名称不能为空'
    })
    return
  }
  //检查数据库是否存在同名标签
  Tag.findOne({
    name: name
  }).then((result) => {
    if(result) {
      res.render('admin/error', {
        userInfo: req.userInfo,
        message: '标签已存在'
      })
      return
    } else {
      return new Tag({
        name: name
      }).save()
      .then((newTag) => {
        res.render('admin/success', {
          userInfo: req.userInfo,
          message: '标签添加成功',
          url: '/admin/tag'
        })
      })
    }
  })

})

router.get('/tag/edit', function (req, res) {
  var id = req.query.id || '';
  Tag.findOne({
    _id: id
  }).then((tag) => {
    if(!tag) {
      res.render('admin/error',{
        userInfo: req.userInfo,
        message: '标签不存在'
      })
    } else {
      res.render('admin/tag_edit', {
        userInfo: req.userInfo,
        tag: tag
      })
    }
  })
})

router.post('/tag/edit', function (req, res) {
  var id = req.query.id
  var name = req.body.name
  Tag.findOne({
    _id: id
  }).then((tag) => {
    if(!tag) {
      res.render('admin/error', {
        userInfo: req.userInfo,
        message: '标签不存在'
      })
      return Promise.reject()
    } else {
      if(name == tag.name) {
        res.render('admin/success', {
          userInfo: req.userInfo,
          message: '修改成功',
          url: '/admin/tag'
        })
        return Promise.reject()
      } else {
        return Tag.findOne({
          _id: {$ne: id},
          name: name
        })
        return Promise.reject()
      }
    }
  }).then((sameTag) => {
      if(sameTag) {
        res.render('admin/error', {
          userInfo: req.userInfo,
          message: '标签已存在'
        })
        return Promise.reject()
      } else {
        return Tag.update({
          _id: id
        }, {
          name: name 
        })
      }
    }).then(() => {
      res.render('admin/success', {
        userInfo: req.userInfo,
        message: '标签修改成功',
        url: '/admin/tag'
      })
    })
})

router.get('/tag/delete', function (req, res) {
  var id = req.query.id || ''
  Tag.findOne({
    _id: id
  }).then((tag) => {
    console.log(tag)
    if(!tag) {
      res.render('admin/error', {
        userInfo: req.userInfo,
        message: '标签不存在',
        url: '/admin/tag'
      })
      return
    } else {
      Tag.remove({
        _id: id
      }).then((result) => {
        res.render('admin/success', {
          userInfo: req.userInfo,
          message: '标签删除成功',
          url: '/admin/tag'
        })
        return
      })
    }
  }).catch(err => {
    res.render('admin/error', {
      userInfo: req.userInfo,
      message: '标签不存在',
      url: '/admin/tag'
    })
    return
  })
})

module.exports = router