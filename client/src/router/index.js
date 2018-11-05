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
// 后台管理系统的外壳
const manage = () => import('@/components/manage')
// 后台管理系统的首页
const home = () => import('@/components/home')
// 用户列表
const userList = () => import('@/components/userList')

// background-attached
const fixed = () => import('@/components/fixed')

const addShop = () => import('@/components/addShop')
// 注册商家列表
const shopList = () => import('@/components/shopList')

// 食品列表
const foodList = () => import('@/components/foodList')

// 上传图片和表单 element
const addVehicle = () => import('@/components/addVehicle')

// 上传图片和表单 lrz
const upload = () => import('@/components/upload')

// lowdb使用例子
const lowdb = () => import('@/components/lowdb')
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
    }, {
      path: '/manage',
      name: 'manage',
      component: manage,
      children: [
        {
          path: '',
          component: home,
          meta: []
        }, {
          path: '/userList',
          component: userList,
          meta: ['数据管理', '用户列表']
        }, {
          path: '/addShop',
          component: addShop,
          meta: ['添加数据', '添加商铺']
        }, {
          path: '/shopList',
          component: shopList,
          meta: ['添加数据', '商家列表']
        }, {
          path: '/foodList',
          component: foodList,
          meta: ['数据管理', '食品列表']
        }, {
          path: '/addVehicle',
          component: addVehicle,
          meta: ['上传图片', '表单和图片一起上传']
        }, {
          path: '/upload',
          component: upload,
          meta: ['上传图片', '表单和图片一起上传2']
        }
      ]
    }, {
      path: '/fixed',
      component: fixed
    }, {
      path: '/lowdb',
      component: lowdb
    }
  ]
})
