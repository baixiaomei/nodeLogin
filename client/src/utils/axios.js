import axios from 'axios'
import Qs from 'qs'
import {baseUrl1} from './env.js'

axios.defaults.baseURL = baseUrl1
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timeout = 1000000

axios.interceptors.request.use((res) => {
  console.log(res)
  res.data = Qs.stringify(res.data)
  console.log(res.data)
  // 封装好return出去
  return res
}, (error) => {
  return Promise.reject(error)
})

export default axios
