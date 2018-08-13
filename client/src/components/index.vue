<template>
  <div id="index" ref='index'>
    <header class="header" v-if="$route.meta.navBar">
      <nav class="inner">
        <router-link :to="{ name: 'index' }" exact>
          首页
        </router-link>
        <router-link :to="{ name: 'login' }" exact>
          <i class="iconfont icon-help"></i>
            去登陆
        </router-link>
        <a href="javascript:;" class="userAccount" >
          我的
        </a>
      </nav>
    </header>
    <div v-if='noToken' class='noToken'>
      <div class='login' @click='goLoginEvent'>登陆</div>
      <div class='register' @click='goRegisterEvent'>注册</div>
    </div>
    <div class='tableBox' v-if='!noToken'>
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
              <li v-for='item in section' :key='item.id'>
                <a :href="item.href" :data-hover='item.name'>{{item.name}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class='mao1'>
        <a href="" id='mao1'>mao1</a>
      </div>
      <div class='mao2'>
        <!--下载图片-->
        <a href="../static/blog.png" download="blogd" id='mao2'>
          mao2
        </a>
      </div>
      <div class='mao3'>
        <a href="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png" download="baidu" id='mao3'>mao3</a>
      </div>
      <div class='mao4'>
        <a href="../static/down.txt" download='2.txt' id='mao4'>mao4</a>
      </div>
      <div class='mao5'>
        <a href="" id='mao5'>mao5
          <div id='qrcode'>二维码的位置</div>
        </a>
      </div>
      <div class='mao6'>
        <a href="" id='mao6'>mao6</a>
      </div>
    </div>
  </div>
</template>

<script>
// import QRCode from 'qrcode'
// import $ from 'jquery'
export default {
  name: 'index',
  data () {
    return {
      noToken: true,
      section: []
    }
  },
  created () { // 还没有初始化el  el是挂载的dom
    if (sessionStorage.getItem('token')) {
      this.noToken = false
    }
    this.$http.post('http://localhost:3000/section').then(res => {
      if (res.data.code === 200) {
        this.section = res.data.result
      }
    })
  },
  methods: {
    goRegisterEvent () {
      this.$router.push({name: 'register'})
    },
    goLoginEvent () {
      this.$router.push({name: 'login'})
    }
  },
  mounted () { // el才加载完毕
    this.$nextTick(() => {
      // 保证 this.$el 已经插入文档
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@color: #ddd;
@align: center;

.mao1,.mao2,.mao3,.mao4,.mao5,.mao6{
  width:100%;
  height:100%;
}
#index{
  width:100%;
  height:100%;
  color: #000;
  .tableBox{
    width:100%;
    height:100%;
    .nav{
      position:fixed;
      top:0;
      width:100%;
      background-color:rgba(0, 0, 0, 0.36);
      padding:15px 0;
      .navContainer{
        overflow:hidden;
        box-sizing: border-box;
        padding:0 0 0 15px;
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
          a:hover{ /* blog的样式 */
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
          width:800px;
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
.mao1{
  width:100%;
  height:100%;
  background:linear-gradient(151.1deg, #3ab39b, #88df94);
  transition: opacity 600ms;
  // -webkit-mask-image: url('http://demo.cssmoban.com/cssthemes5/cpts_1053_boo/images/about-3.jpg');
  // -webkit-mask-image:linear-gradient(to left, transparent, blue);
  // animation: mask 10s linear infinite forwards;
}

@media only screen and (max-width:818px){
  .menu span.menuIcon{
    display:block;
    width:35px;
    height:35px;
    background:url('http://demo.cssmoban.com/cssthemes4/cpts_979_byu/images/nav.png')no-repeat 0px 0px;
    float:right;
    cursor: pointer;
  }
}
@media only screen and (max-width:818px){
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
