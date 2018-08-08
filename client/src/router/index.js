import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import register from '@/components/register'
import login from '@/components/login'
import practice from '@/components/practice'
import lottery from '@/components/lottery'
import echart1 from '@/components/echart1'
import login1 from '@/components/login1'
import grid from '@/components/grid'
import mock from '@/components/mock'
// 在lazyload这个路由下懒加载lazyload组建
const lazyload = () => import('@/components/lazyload')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: '首页', navBar: true },
      component: index
    }, {
      path: '/register',
      name: 'register',
      component: register
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/practice',
      name: 'practice',
      component: practice
    }, {
      path: '/lottery',
      name: 'lottery',
      component: lottery
    }, {
      path: '/echart1',
      name: 'echart1',
      component: echart1
    }, {
      path: '/login1',
      name: 'login1',
      component: login1
    }, {
      path: '/grid',
      name: 'grid',
      component: grid
    }, {
      path: '/mock',
      name: 'mock',
      component: mock
    }, {
      path: '/lazyload',
      name: 'lazyload',
      component: lazyload
    }
  ]
})
