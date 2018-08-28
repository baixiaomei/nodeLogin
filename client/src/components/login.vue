<template>
  <div class="register">
    <transition name='form-fade' mode="in-out">
      <div class='content'>
        <div class='manage_tip'>
          <p>elm后台管理系统</p>
        </div>
        <el-form :model="info" ref="informate" :rules="rules"  label-width="50px" class="demo-ruleForm">
          <el-form-item label="姓名:" prop="name">
          <el-input v-model.number="info.name" placeholder='请输入用户名'></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input type="password" v-model="info.password" auto-complete="off" placeholder='请输入密码'></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(info)" class="submit_btn">提交</el-button>
            <el-button v-if='isReg' type="primary" @click="replaceRegister">去注册</el-button>
          </el-form-item>
        </el-form>
       <a @click='WebSocketTest()'>运行 WebSocket</a>
      </div>
    </transition>
    <div id='box'>
      <ul id='messages'></ul>
      <form action=''>
        <input id='m' ref='input' autocomplete='off'>
        <button @click='submitFn'>send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  // components: {
  //   Form: () => import('element-ui').then(({Form}) => Form)
  // },
  data () {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      isReg: false,
      info: {
        password: '',
        name: ''
      },
      rules: {
        name: [
          { require: true, validator: validateName, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { require: true, validator: validatePassword, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitFn () {
      this.$refs.input
    },
    WebSocketTest () {
      console.log(1)
      // if ('webSocket' in window) {
      //   alert('您的浏览器支持WebSocket')
      // } else {
      //   return false
      // }
      var ws = new WebSocket('ws://localhost:8080/echo')
      ws.onopen = function () {
        ws.send('发送数据')
        alert('数据发送中。。。')
      }

      ws.onmessage = function (evt) {
        var receivedMsg = evt.data
        console.log(receivedMsg)
        alert('数据已接受。。。')
      }

      ws.onclose = function () {
        alert('连接已关闭')
      }
    },
    replaceRegister () {
      this.$router.push({name: 'register'})
    },
    submitForm (info) {
      this.$refs.informate.validate(async (valid) => {
        if (valid) {
          this.$http.post('/users/login', info).then(res => {
            if (res.data.code === 201) {
              this.$message({
                message: '没有此账户请去注册',
                type: 'success',
                showClose: true
              })
              this.isReg = true
            } else if (res.data.code === 200) {
              this.$message({
                message: '登陆成功',
                type: 'success',
                duration: 2000
              })
              sessionStorage.setItem('token', res.data.token)
              // this.$router.push({name: 'manage'})
              window.location.href = 'http://localhost:8080/manage'
            } else {
              this.$message({
                message: res.data.msg,
                type: 'error',
                showClose: true
              })
            }
          }).catch(err => {
            console.error(err)
          })
        } else {
          this.$message({
            message: '请填入正确的信息',
            type: 'error',
            showClose: true
          })
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='less'>
@import '../style/mixin.less';

.register{
  width:100%;
  height:100%;
  background: #324057;
  .content{
    background:#fff;
    .wh(320px, 210px);
    .ctp(320px, 210px);
    padding:25px;
    border-radius:5px;
    text-align: center;
    .manage_tip{
      position:absolute;
      width:100%;
      top:-100px;
      left:0;
      p{
        color:#fff;
        font-size:34px;
      }
    }
    // form{
    //   width:100%;
    //   display:block;
    // }
    .submit_btn{
      width:100%;
      font-size:16px;
    }
  }
}

.form-fade-enter-active, .form-fade-leave-active{
  transition:all 1s;
}
.form-fade-enter, .form-fade-leave-active{
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
#box{
  width:100%;
  height:80px;
}
form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
#messages { list-style-type: none; margin: 0; padding: 0; }
#messages li { padding: 5px 10px; }
#messages li:nth-child(odd) { background: #eee; }
</style>
