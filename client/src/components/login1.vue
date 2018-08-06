<template>
  <div class="login1">
      <div class="top">
        <!-- <img src="../assets/mine/denglu_logo@2x.png" alt=""> -->
      </div>
      <div class="import-form">
        <!--输入手机号-->
          <label class="import-label">
            <input class="import-input" type="tel" placeholder="请输入手机号" autocomplete="off" maxlength="11" >
            <button class="import-yzm"></button>
          </label>
        <!--输入验证码-->
          <label class="import-label">
            <input class="import-input" type="tel" placeholder="请输短信验证码" autocomplete="off"  maxlength="4">
            <div>天天</div>
          </label>
      </div>
    <transition name="fades">
      <div class="promptMessage" v-if="showPrompt">
        <p>{{promptInfo}}</p>
      </div>
    </transition>

    <transition name="fades">
      <div class="Errormes" v-if="Errormes.show">{{Errormes.txt}}</div>
    </transition>
  </div>
</template>
<style lang="less">
@base-color:#f1f0fe;
.login1{
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background:#fff;
  background-size: 100% 100%;
  .top{
    width: 100%;
    margin: 0 auto;
    img{
      display:block ;
      width: 150px;
      margin: 50px auto;
    }
  }
}
.import-form{
  padding: 0px 1.875rem;
  .import-label{
    display: flex;
    padding: 0.75rem 0;
    height: 1.625rem;
    line-height: 1.625rem;
    white-space: nowrap;
    -webkit-tap-highlight-color: transparent;
    border-bottom: 0.0625rem solid @base-color;
    .import-icon{
      width: 2.25rem;
      height: 2.25rem;
      display: table-cell;
      margin-right: 0.3125rem;
    }
    .import-img{
      width: 2.25rem;
      height: 2.25rem;
      display: block;
    }
    .import-input{
      position: relative;
      top: 0.3125rem;
      height: 1.125rem;
      line-height: 1.125rem;
      font-size: 0.875rem;
      padding: 0.25rem 0;
      width: 100%;
      color: #ffffff;
      border: 0;
      display: table-cell;
      border-collapse: separate;
      -webkit-tap-highlight-color: transparent;

      background: rgba(0,0,0,0);
    }
    .import-yzm{
      padding:0 0.3125rem;
      width:8rem;
      height:1.875rem;
      line-height: 1.875rem;
      border: 0.0625rem solid #ffffff;
      border-radius: 3.125rem;
      color: #ffffff;
      font-size: 0.9375rem;
      -webkit-tap-highlight-color: transparent;
      background: rgba(0,0,0,0);
    }
    .gray{
      background: #ddd;
    }
  }
}

  .promptMessage{
    position: fixed;
    bottom:8rem;
    left:4.2rem;
    width:15rem;
    height:2rem;
    line-height: 2rem;
    background: rgba(0,0,0,0.6);
    border-radius: .5rem;
    p{
      text-align: center;
    }
  }
     .fades-enter-active, .fades-leave-active {
       transition: opacity .5s
     }
  .fades-enter, .fades-leave-active {
    opacity: 0
  }
  /*提示弹框*/
  .Errormes {
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 15px;
    background: rgba(0, 0, 0, .8);
    border-radius: 8px;
    color: #fff;
    font-size: 18px;
    z-index: 999999;
    white-space: nowrap
  }
</style>
<script>
export default {
  name: 'login',
  data () {
    return {
      userInfo: { // 用户信息 手机号码 验证码
        phoneNum: null,
        codeNum: null
      },
      validCode: '获取验证码',
      validTime: 60,
      interval: null,
      dis: false,
      isActive: true,
      promptInfo: '',
      showPrompt: false,
      Errormes: {
        txt: '', // 提示信息
        show: false // 是否显示
      },
      toUrl: ''
    }
  },
  components: {
  },
  created () {
  },
  methods: {
  }
}
</script>
