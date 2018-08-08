import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

Vue.use(vuex)

const $setApplications = '  SETAPPLICATIONS'

const moduleA = {
  state: {
    applications: null
  },
  // 进行同步数据处理 修改state的唯一入口
  mutations: {
    [$setApplications]: (state, list) => {
      state.applications = list
    }
  },
  // 处理异步请求
  actions: {
    requestApplications ({ commit, state }) {
      axios.get('/')
        .then(({data: {list}}) => {
          commit($setApplications, list)
        })
        .catch(() => {
          console.log(arguments)
        })
    }
  }
}

// 将store分割成模块
export default new vuex.Store({
  modules: {
    moduleA
  }
})
