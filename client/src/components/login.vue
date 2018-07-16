<template>
  <div class="login">
    <div class='content'>
      <el-form :model="info" ref="info" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
        <el-input v-model.number="info.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="info.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(info)">提交</el-button>
          <el-button v-if='isReg' type="primary" @click="replaceRegister">去注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      isReg: false,
      info: {
        password: '',
        name: ''
      }
    }
  },
  methods: {
    replaceRegister () {
      this.$router.push({name: 'register'})
    },
    submitForm (info) {
      this.$http.post('http://localhost:3000/users/login', info).then(res => {
        if (res.data.code === 201) {
          alert('没有此账户请去登陆')
          this.isReg = true
        } else if (res.data.code === 200) {
          alert(res.data.msg)
          sessionStorage.setItem('token', res.data.token)
          this.$router.push({name: 'index'})
        } else {
          alert(res.data.msg)
        }
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.login{
  width:100%;
  .content{
    width:50%;
    margin:0 auto;
    form{
      width:100%;
      display:block;
    }
    .submit{
      line-height: 20px;
      border:1px solid #ddd;
      width:40px;
      text-align: center;
    }
  }
}
</style>
