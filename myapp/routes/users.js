var express = require('express');
var router = express.Router();
var URL = require('url')
var mysql = require('mysql')
const config = require('../config')
const jwt = require('jsonwebtoken')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* 创建连接 */
var conn = mysql.createConnection(config.mysql)
//执行创建连接
conn.connect();

/* 注册接口 */
router.post('/register', function (req, res) {
  // 获取前端传过来的值 form表单提交和json提交方式都可以
  let params = {
    name: req.body.name,
    password: req.body.password
  }
  // sql查询语句
  let selectSQL = "select * from user where name='" + params.name + "'";
  // sql查询
  conn.query(selectSQL, function (err, results) {
    if (err) {
      console.log('[SELECT ERROR] -', err.message)
      return;
    }
    if (JSON.stringify(results) !== '[]') {
      // 把值返回给前端
      res.send({
        code: 201,
        msg: '你已经是老用户了'
      })
    } else {
      // 往user表里添加一条数据 后面的CVALUES（）？号个数要与前面的对应
      // let addSql = 'INSERT INTO user (name,password) VALUES(?,?)';
      let addSql = "INSERT INTO user (name,password) VALUES('" + params.name + "','" + params.password + "')"
      /* 插入 */
        conn.query(addSql, [params.name, params.password], function (err, result) {
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
            msg: '恭喜您注册成功'
          })
        })
    }
  })
})

// connection.end();

/* 登陆接口 */
router.post('/login', function (req, res) {
  let obj = {
    name: req.body.name,
    password: req.body.password
  }

  loginSql = "select * from user where name='" + obj.name + "'and password='" + obj.password + "'";
  conn.query(loginSql, [obj.name, obj.password], function (err, result) {
    /* 生成token */
    const token = jwt.sign(obj, '2015122308291027', { expiresIn: '10000d' })
    console.log(token)
    if (err) {
      console.log('[INSERT ERROR] -', err.message)
      res.send({
        code: 500,
        msg: '小哥翘班了',
        token: ''
      })
      return;
    }
    console.log(result)
    if (JSON.stringify(result) === '[]') {
      res.send({
        code: 201,
        msg: '您的用户不存在请去注册',
        token: ''
      })
    } else {
      res.send({
        code: 200,
        msg: '登陆成功！',
        token: token
      })
    }
  })
})

module.exports = router;
