var express = require('express');
var router = express.Router();
var mysql = require('mysql')
const config = require('../config')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 创建连接 */
var conn1 = mysql.createConnection(config.mysql)
//执行创建连接
conn1.connect();

router.post('/section', function (req, res) {
  // sql语句 查询section里的所有语句
  let sectionSql = "select * from section"
  conn1.query(sectionSql, function (error, results) {
    if (error) {
      console.log('[SELECT ERROR] -', err.message)
      return;
    }
    console.log(results)
    res.send({
      code: 200,
      result: results
    })
  })
})
module.exports = router;
