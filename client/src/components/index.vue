<template>
  <div id="index" ref='index'>
    <div v-if='noToken' class='noToken'>
      <div class='login' @click='goLoginEvent'>登陆</div>
      <div class='register' @click='goRegisterEvent'>注册</div>
    </div>
    <div class='tableBox' v-if='!noToken'>
      <div class='mask'></div>
      <div class='nav'>
        <div class='navContainer'>
          <div class='logo'>
            <a href="">
              <h1 draggable="true">MyBlogs</h1>
            </a>
          </div>
          <div class='menu'>
            <span class='menuIcon'></span>
            <ul>
              <li>
                <a href="" data-hover='HOME'>HOME</a>
              </li>
              <li>
                <a href="" data-hover='ABOUT'>ABOUT</a>
              </li>
              <li>
                <a href="" data-hover='GALLERY'>GALLERY</a>
              </li>
              <li>
                <a href="" data-hover='BLOGS'>BLOGS</a>
              </li>
              <li>
                <a href="" data-hover='SERVICES'>SERVICES</a>
              </li>
              <li>
                <a href="" data-hover='CONTACT'>CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <el-row  v-if='!noToken'>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark title">{{msg}}</div>
        </el-col>
      </el-row> -->
      <div class='md'>
        <a href="#mao1">点击我跳转mao1</a>
        <a href="#mao2">点击我跳转mao2</a>
        <a href="#mao3">点击我跳转mao3</a>
      </div>
      <div class='mao1'>
        <a href="" id='mao1'>mao1</a>
      </div>
      <div class='mao2'>
        <a href="" id='mao2'>mao2</a>
      </div>
      <div class='mao3'>
        <a href="" id='mao3'>mao3</a>
      </div>
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
.mao1,.mao2,.mao3{
  width:100%;
  height:500px;
}
#index{
  width:100%;
  color: #000;
  .tableBox{
    width:100%;

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
            color:#fff;
            h1{
              font-family: 'Merriweather Sans', sans-serif;
              font-size:2.5em;
              font-weight: bold;
              text-transform: uppercase;
            }
          }
          a:hover{
            cursor: pointer;
            color:#7ccfd7;
            background: linear-gradient(to bottom, #7ccfd7, #fff); /*设置渐变背景色*/
            -webkit-background-clip: text; /*以区块内的文字作为裁剪区域向外裁剪 注意兼容性*/
            background-clip:text;
            color: transparent; /*让设置文字透明色，让后面的背景显示出来*/
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

@keyframes mask{
  0% {-webkit-mask-position:0px 0px; -webkit-mask-size:20%;}
  25% {-webkit-mask-position:320px 0px; -webkit-mask-size:20%;}
  50% {-webkit-mask-position:640px 0px; -webkit-mask-size:20%;}
  75% {-webkit-mask-position: 860px 0px;-webkit-mask-size:20%;}
  100% {-webkit-mask-position: 0px 0px;-webkit-mask-size:100%;}
}
.mask{
  width:100%;
  height:456px;
  background: black url('http://demo.cssmoban.com/cssthemes4/cpts_979_byu/images/banner.jpg');
  // -webkit-mask-image: url('http://demo.cssmoban.com/cssthemes5/cpts_1053_boo/images/about-3.jpg');
  // -webkit-mask-image:linear-gradient(to left, transparent, blue);
  // animation: mask 10s linear infinite forwards;
}

@media only screen and (max-width:800px){
  .menu span.menuIcon{
    display:block;
    width:35px;
    height:35px;
    background:url('http://demo.cssmoban.com/cssthemes4/cpts_979_byu/images/nav.png')no-repeat 0px 0px;
    float:right;
    cursor: pointer;
  }
}
@media only screen and (max-width:800px){
  .menu ul{
    display: none;
  }
}
@media (max-width:800px) {
  margin:5px 3px;
}
@media (max-width: 991px) {
  .menu ul li a{
    font-size:0.9em;
  }
}

@media (max-width: 991px) {
  .menu{
    float:right;
    width:70%;
    margin-top:0.4em;
  }
}

// .menu ul li a {
//   // background: linear-gradient(to bottom,#fff,#fff);
//   // animation:move 10s linear infinite forwards;
//   -webkit-background-clip:text;
//   color: #fff;
//   font-size:24px;
// }
// .menu ul li a:hover {
//   background: linear-gradient(to bottom, #fff, red);
//   animation: move 10s linear infinite forwards;
//   -webkit-background-clip:text;
//   color: transparent;
// }
.menu{
  float:right;
  margin-top:0.75em;
}
.menu ul{
  overflow:hidden;
}
.menu ul li{
  float:left;
}
.menu ul li a {
  position:relative;
  color: #FFFFFF;
  text-decoration: none;
  padding: 0;
  font-weight: 400;
  font-size: 1em;
  margin:0 10px;
}
.menu ul li a::before{
  position:absolute;
  top:0px;
  left:-10px;
  overflow:hidden;
  padding:0 10px;
  max-height:0;
  color:#7ccfd7;
  content:attr(data-hover);
  transition:max-heihgt 0.5s;
  -webkit-transition:max-height 0.5s;
}
.menu ul li a:hover::before{
  max-height:100%;
}
@keyframes move{
    0%{
        background-size: 0px 0px;
    }
    100%{
        background-size: 100% 100%;
    }
}

</style>
