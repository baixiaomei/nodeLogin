var express = require('express')
var router = express.Router()
var index = require('../server/index.js')

// 设置跨域
router.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'POST,GET')
  res.header('X-Powered-By', '3.2.1')
  next()
})

router.post('/addData', function (req, res) {
  let obj = req.body
  let str = index.insertData(obj)
  res.send(str)
})

router.post('/getAllData', function (req, res) {
  let str = index.getAllData()
  res.send(str)
})

module.exports = router
