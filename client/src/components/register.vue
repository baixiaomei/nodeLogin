<template>
  <div class="register">
    <transition name="form-fade" mode="in-out">
      <div class='content' v-show="iShow">
        <div class='manage_tip'>
          <p>elm后台管理系统</p>
        </div>
        <el-form :model="userInfo" ref="registerForm" :rules="rules2" label-width="50px" class="demo-ruleForm">
          <el-form-item label="姓名" prop="name">
          <el-input v-model.number="userInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="userInfo.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(userInfo)">提交</el-button>
            <el-button v-if='isLog' type="primary" @click="register">去登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>
    <!-- <form action="http://localhost:3000/www/register"  method='post'>
      <label for="name">
        姓名： <input type="text" name='name'>
      </label>
      <label for="password">
        密码： <input type="password" name='password'>
      </label>
      <input type="submit" name='submit' value='提交'>
    </form> -->
  </div>
</template>

<script>
// import {register} from '../api/getData.js'
export default {
  name: 'login',
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
      iShow: false,
      isLog: false,
      userInfo: {
        password: '',
        name: ''
      },
      rules2: {
        name: [
          { require: true, validator: validateName, trigger: 'blur' }
        ],
        password: [
          { require: true, validator: validatePassword, trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    // 支持transition的动画功能
    this.iShow = true
  },
  methods: {
    register () {
      this.$router.push({name: 'login'})
    },
    submitForm (userInfo) {
      this.$refs.registerForm.validate(async (valid) => {
        if (valid) {
          this.$http.post('http://localhost:3000/users/register', userInfo).then(res => {
            if (res.data.code === 201) {
              this.$message({
                showClose: true,
                message: res.data.msg,
                type: 'success'
              })
              this.isLog = true
            } else if (res.data.code === 200) {
              this.$message({
                showClose: true,
                message: res.data.msg,
                type: 'success'
              })
              this.isLog = true
            } else {
              this.$message({
                showClose: true,
                message: res.data.msg,
                type: 'error'
              })
            }
          }).catch(err => {
            console.error(err)
          })
        } else {
          this.$message({
            showClose: true,
            message: 'error submit',
            type: 'error'
          })
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../style/mixin.less';
.register{
  width:100%;
  height:100%;
  background: #324057;
  .content{
    .manage_tip{
      position: absolute;
      width: 100%;
      top: -100px;
      left: 0;
      p{
        font-size: 34px;
        color: #fff;
      }
    }
    background:#fff;
    .wh(320px, 210px);
    .ctp(320px, 210px);
    padding:25px;
    border-radius:5px;
    text-align: center;
    .submit{
      line-height: 20px;
      border:1px solid #ddd;
      width:40px;
      text-align: center;
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
</style>
