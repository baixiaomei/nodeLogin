var low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
var db = ConnectDb('list')

// 创建并连接库
function ConnectDb (connecting) {
  connecting = 'data/' + connecting + '.json'
  const adapter = new FileSync(connecting)
  return low(adapter) // 创建库list.json
}

const insertData = (obj) => {
  try {
    let name = obj.name
    // 从list.json数据库找到info表 info表中id 为obj.id得name值是多少
    let str = db.get('info').find({name: name}).get('name').value()
    if (str) {
      return '该平台已经存在，请重新定义'
    } else {
      let _obj = {name: obj.name, password: obj.password}
      // 往info表中写入新的对象
      db.get('info').push(_obj).write()
      return '添加成功'
    }
  } catch (e) {
    return '添加失败'
  }
}

const getAllData = () => {
  var str = db.get('info')
  return str
}

module.exports = {insertData, getAllData}
