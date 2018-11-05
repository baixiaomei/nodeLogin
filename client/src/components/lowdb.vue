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
      </div>
    </transition>
  </div>
</template>

<script>
export default {
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
    replaceRegister () {
      this.$router.push({name: 'register'})
    },
    submitForm (info) {
      this.$refs.informate.validate(async (valid) => {
        if (valid) {
          this.$http.post('/addData', info).then(res => {
            console.log(res)
          })
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
</style>
