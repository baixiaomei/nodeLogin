<template>
  <div id="index" ref='index'>
    <div v-if='noToken' class='noToken'>
      <div class='login' @click='goLoginEvent'>登陆</div>
      <div class='register' @click='goRegisterEvent'>注册</div>
    </div>
    <div class='tableBox'>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark title">{{msg}}</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      noToken: true,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeCreate () {
  },
  created () { // 还没有初始化el  el是挂载的dom
    if (sessionStorage.getItem('token')) {
      this.noToken = false
    }
  },
  mounted () { // el才加载完毕
  },
  methods: {
    goRegisterEvent () {
      this.$router.push({name: 'register'})
    },
    goLoginEvent () {
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
#index{
  width:100%;
  .tableBox{
    width:100%;
  }
}
.title{
      line-height:36px;
      color:#000;
    }
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
