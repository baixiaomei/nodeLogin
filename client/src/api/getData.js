import axios from 'axios'
const url = 'http://localhost:3000/users/register'

export const register = (data) => axios.post(url, data)

// 请求elm实例 的接口
let baseUrl = 'https://elm.cangdu.org'
// let baseImgPath = ''

// if (process.env.NODE_ENV === 'development') {
//   baseUrl = ''
//   baseImgPath = '/img/'
// } else {
//   baseUrl = 'https://elm.cangdu.org'
//   baseImgPath = '//elm.cangdu.org/img/'
// }
/**
 * 用户注册量
 */
export const userCount = date => axios.get(baseUrl + '/statis/user/' + date + '/count')

/**
 * 某一天订单数量
 */
export const orderCount = date => axios.get(baseUrl + '/statis/order/' + date + '/count')

/**
 * 某一天管理员注册量
 */
export const adminDayCount = date => axios.get(baseUrl + '/statis/admin/' + date + '/count')

/**
 * 获取用户数量
 */
export const getUserCount = data => axios.get(baseUrl + '/v1/users/count', data)

/**
 * 获取订单数量
 */
export const getOrderCount = data => axios.get(baseUrl + '/bos/orders/count', data)

/**
 * 管理员数量
 */
export const adminCount = () => axios.get(baseUrl + '/admin/count')

/**
 * 获取用户列表
 */
export const getUserList = data => axios.get(baseUrl + '/v1/users/list', data)
