<template>
  <div id="index" ref='index'>
    <div v-if='noToken' class='noToken'>
      <div class='login' @click='goLoginEvent'>登陆</div>
      <div class='register' @click='goRegisterEvent'>注册</div>
    </div>
    <div class='tableBox'>
      <img src="http://demo.cssmoban.com/cssthemes4/cpts_979_byu/images/banner.jpg" alt="">
      <div class='nav'>
        <div class='navContainer'>
          <div class='logo'>
            <a href="">
              <h1>MyBlogs</h1>
            </a>
          </div>
          <div class='menu'></div>
        </div>
      </div>
      <!-- <el-row  v-if='!noToken'>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark title">{{msg}}</div>
        </el-col>
      </el-row> -->
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
    console.group('----beforeCreate创建前状态----')
    console.log('%c%s', 'color:red', 'el:' + this.$el)
    console.log('%c%s', 'color:red', 'data:' + this.$data)
    console.log('%c%s', 'color:red', 'el:' + this.$el)
  },
  created () { // 还没有初始化el  el是挂载的dom
    console.log(this.$refs.index)
    console.log(sessionStorage.getItem('token'))
    if (sessionStorage.getItem('token')) {
      this.noToken = false
    }
  },
  mounted () { // el才加载完毕
    console.log(this.$refs.index)
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
@color: #ddd;
@align: center;
#index{
  width:100%;
  color: #000;
  .tableBox{
    width:100%;
    img{
      width:100%;
    }
    .nav{
      position:fixed;
      top:0;
      width:100%;
      background-color:rgba(0, 0, 0, 0.36);
      padding:15px 0;
      .navContainer{
        overflow:hidden;
        box-sizing: border-box;
        padding:0 15px;
        margin-right:auto;
        margin-left:auto;
        .logo{
          float:left;
          a{
            display:block;
            h1{
              color:#fff;
              font-family: 'Merriweather Sans', sans-serif;
              font-size:2.5em;
              font-weight: bold;
              text-transform: uppercase;
            }
          }
        }
      }
      @media screen and (min-width: 992px) {
        .navContainer{
          width:970px;
        }
      }
      @media screen and (min-width: 768px) {
        .navContainer{
          width:750px;
        }
      }
    }
  }
  .noToken{
    width:100%;
    text-align: center;
    line-height: 36px;
    padding-top:20px;
    div{
      margin:10px auto;
      width:80px;
      border:1px solid #ddd;
    }
  }
}
.title{
      line-height:36px;
      color:#fff;
      text-align: center;
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
