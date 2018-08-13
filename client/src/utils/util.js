/**
 * 随机数
*/
export const random = (n = 1) => {
  var rnd = 0
  for (var i = 0; i < n; i++) {
    rnd += Math.floor(Math.random() * 45)
  }
  return rnd
}

/**
 * 去掉字符串中所有的空格
 * @param {String} str 需要格式化的字符串
 * @param {String} isGlobal [g] 是否去掉所有的空格
 */
function trim (str, isGlobal) {
  var result
  result = str.replace(/(^\s+)|(\s+$)g/, '')
  if (isGlobal && isGlobal.toLowerCase() === 'g') return result.replace(/\s/g, '')
  return result
}

/**
  * 格式化手机号码 334
  */
export const formatPhone = (phone) => {
  let tel = trim(phone, 'g')
  return tel.substring(0, 3) + ' ' + tel.substring(3, 7) + ' ' + tel.substring(7, 11)
}

/**
 * 跳转页面不记录URL
 */
export const _urlReplace = uri => {
  var href = uri
  if (href && /^#|javasc/.test(href) === false) {
    if (history.replaceState) {
      history.replaceState(null, document.title, href.split('#')[0] + '#')
      location.replace('')
    } else {
      location.replace(href)
    }
  }
}

const hasClass = function (elem, cls) {
  cls = cls || ''
  if (cls.replace(/\s/g, '').length === 0) return false
  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ')
}

/**
 * 添加 Class
 * @param  {String} ele document
 * @param  {String} cls 需要添加的className
 * @return {[type]}     [description]
 */
export const addClass = function (ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className = ele.className === '' ? cls : ele.className + ' ' + cls
  }
}

/**
 * 删除 Class
 * @param  {String} ele document
 * @param  {String} cls 需要删除的className
 * @return {[type]}     [description]
 */
export const removeClass = function (ele, cls) {
  if (hasClass(ele, cls)) {
    let newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' '
    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ')
    }
    ele.className = newClass.replace(/^\s+|\s+$/g, '')
  }
}

/**
 * 存储 sessionStorage
 */
export const __setItem = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name, content)
}

/**
 * 获取 sessionStorage
 */
export const __getItem = name => {
  if (!name) return
  return window.sessionStorage.getItem(name)
}

/**
 * 删除 sessionStorage
 */
export const __removeItem = name => {
  if (!name) return
  window.sessionStorage.removeItem(name)
}

export default random
