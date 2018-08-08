// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import http from './utils/axios'
import ElementUI from 'element-ui'

// 引入状态管理机
import store from './store'
// mock数据
import './mock'

Vue.prototype.$http = http
Vue.use(ElementUI)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#main')
