<template>
  <div class="register">
    <!-- <form action="http://localhost:3000/www/register"  method='post'>
      <label for="name">
        姓名： <input type="text" name='name'>
      </label>
      <label for="password">
        密码： <input type="password" name='password'>
      </label>
      <input type="submit" name='submit' value='提交'>
    </form> -->
    <div class='content'>
      <el-form :model="info" ref="info" :rules="rules2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
        <el-input v-model.number="info.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="info.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register1(info)">提交</el-button>
          <el-button v-if='isLog' type="primary" @click="replaceLogin">去登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
    }
    var validPassword = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('密码不能为空'))
      } else if (value.length < 6 || value.length > 20) {
        return callback(new Error('请输入6～20位的密码'))
      }
    }
    return {
      isLog: false,
      info: {
        password: '',
        name: ''
      },
      rules2: {
        name: [
          { validator: checkName, trigger: 'blur' }
        ],
        password: [
          { validator: validPassword, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    replaceLogin () {
      this.$router.push({name: 'login'})
    },
    register1 (info) {
      this.$http.post('http://localhost:3000/users/register', info).then(res => {
        if (res.data.code === 201) {
          alert(res.data.msg)
          this.isLog = true
        } else if (res.data.code === 200) {
          alert(res.data.msg)
          this.isLog = true
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
.register{
  width:100%;
  .content{
    width:50%;
    margin:0 auto;
    form{
      width:100%;
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
