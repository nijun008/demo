var express = require('express')
var Tag = require('../models/Tag')

var router  = express.Router()


router.get('/', function (req, res, next) {
  Tag.find().then(tags => {
    res.render('index', {
      userInfo: req.userInfo,
      tags: tags
    })
  })
})

module.exports = router