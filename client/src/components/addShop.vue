<template>
  <div id='addShop'>
    <headTop></headTop>
    <div class='content'>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="店铺名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
          <span>当前城市：北京市</span>
        </el-form-item>
        <el-form-item label="商品类型" prop="category">
          <el-input v-model="ruleForm.category"></el-input>
        </el-form-item>

        <el-form-item label="活动形式" prop="descript">
          <el-input type="textarea" v-model="ruleForm.descript"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleForm)">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import headTop from '../common/headTop'
export default {
  components: {
    headTop
  },
  data () {
    return {
      ruleForm: {
        name: '',
        descript: '',
        address: '',
        category: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' },
          { min: 2, max: 20, message: '请输入3-20字符', trigger: 'blur' }
        ],
        category: [
          { required: true, message: '请输入类型', trigger: 'blur' },
          { min: 2, max: 20, message: '请输入3-20字符', trigger: 'blur' }
        ],
        descript: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$http.post('http://localhost:3000/businessList', formName).then(res => {
        if (res.data.code === 200) {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
        } else if (res.data.code === 201) {
          this.$message({
            message: res.data.msg,
            type: 'warning'
          })
        } else {
          this.$message.error(res.data.msg)
        }
      })
      // this.$refs[formName].validate((valid) => { // businessList
      //   if (valid) {
      //     this.$http.post('http://localhost:3000/businessList', valid).then(res => {
      //       console.log(res)
      //     })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    }
  }
}
</script>
<style lang='less'>
  #addShop{
    .content{
      width:95%;
      margin-left:2.5%;
      margin-right:2.5%;
      margin-top:10px;
      margin-bottom:30px;
    }
  }
</style>
