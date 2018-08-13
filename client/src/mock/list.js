// 在根目录下 npm i -D mock.js
// import { Mock, Random } from 'mock.js'
// 使用 Mock
import { mock, Random } from 'mockjs'
/**
 * '@id' (称为‘占位符’)) 是Random.id()的简写形式
 * ‘@id’ 必须用引号包裹
 * ‘@id’ + 111 会将‘@id'当作字符串（返回‘@id111’）
*/
Random.id()
Random.guid()
Random.cname()
Random.ctitle()
// {
//   'list|0-50': [
//     {
//       'approveId': '@id',
//       'applier': {
//         'userId': '@guid',
//         'userName': '@cname',
//         'sectionId': '@id',
//         'sectionName': '@ctitle'
//       }
//     }
//   ]
// }
export default mock({
  id: 1,
  name: '2'
})
