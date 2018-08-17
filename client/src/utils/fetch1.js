// fetch 的封装
/**
 * 将对象转成 name=xiamo&phone=12345678 这种形式
 * @param obj 对象
*/

const obj2String = (obj, arr = [], idx = 0) => {
  for (let item in obj) {
    arr[idx++] = [item, obj[item]]
  }
  return new URLSearchParams(arr).toString()
}

/**
 * 真正的请求
 * @param URL 请求地址
 * @param options 请求参数
 * @param method 请求方式
*/
const commonFetch = (url, options, method = 'GET') => {
  const searchStr = obj2String(options)
  let initObj = {}
  if (method === 'GET') { // 如果是get请求拼接URL
    url += '?' + searchStr
    initObj = {
      method: method,
      credentials: 'include' // 强制加入凭据头
    }
  } else {
    initObj = {
      method: method,
      credentials: 'include',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      body: searchStr
    }
  }
  fetch(url, initObj).then((res) => {
    return res.json()
  }).then((res) => {
    return res
  })
}

export const GETdata = (url, options) => {
  return commonFetch(url, options, 'GET')
}
export const POSTdata = (url, options) => {
  return commonFetch(url, options, 'POST')
}
