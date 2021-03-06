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

// index页面的section
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

// 添加商家
router.post('/businessList', function (req, res) {
  let params = req.body
  console.log(req)
  // sql 语句 查询数据库里有没有相同的数据
  let selectSQL = "select * from businessList where name='" + params.name + "'";
  conn1.query(selectSQL, function (err, results) {
    if (err) {
      console.log('[SELECT ERROR] -', err.message)
      return;
    }
    if (JSON.stringify(results) !== '[]') {
      // 把值返回给前端
      res.send({
        code: 201,
        msg: '该商家已经注册'
      })
    } else {
      // sql语句 添加businessList
      let addListSql = "INSERT INTO businessList (name,address,descript,category) VALUES('" + params.name + "','" + params.address + "', '" + params.descript +"', '"+ params.category +"')"
      conn1.query(addListSql, [params.name, params.address, params.descript, params.category], function (err, result) {
        if (err) {
          console.log('[INSERT ERROR] -', err.message)
          res.send({
            code: 500,
            msg: '小哥翘班了'
          })
          return;
        }
        res.send({
          code: 200,
          msg: '添加成功'
        })
      })
    }
  })
})

// 获取注册商家列表
router.post('/getGoodList', function (req, res) {
  let params = req.body
  // sql语句 查询section里的所有语句
  var start = (params.currentPage - 1) * params.pageSize
  // 查数据总条数SELECT COUNT(*) FROM businessList; 返回的是【{"COUNT(*)":26}】
  let countsql = 'SELECT COUNT(*) as pages FROM businessList;' // 返回的是【{"pages": 26}】
  conn1.query(countsql, function (error, result) {
    if (error) {
      console.log('[SELECT ERROR] -', error.message)
      return;
    }
    // 将获取的总条数存储
    let pages = result[0].pages
    // 选取从start开始pageSize条数据
    let sectionSql = "SELECT * FROM businessList limit " + start + ", " + params.pageSize
    conn1.query(sectionSql, function (error, results) {
      if (error) {
        console.log('[SELECT ERROR] -', error.message)
        return;
      }
      console.log(1)
      console.log(JSON.stringify(results))
      console.log(1)
      res.send({
        code: 200,
        list: results,
        pages: pages
      })
    })
  })
  // let sectionSql = "select * from businessList; SELECT * FROM businessList limit " + start + ", " + params.pageSize
})

// 商家列表 删除对应商家
router.post('/deleteShop', function (req, res) {
  let params = req.body
  let deleteSql = 'delete from businessList where id='+ params.id
  conn1.query(deleteSql, function (error, results) {
    if (error) {
      console.log('[SELECT ERROR] -', err.message)
      return;
    }
    console.log(results)
    res.send({
      code: 200
    })
  })
})

module.exports = router;
