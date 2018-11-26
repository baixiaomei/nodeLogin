<template>
<div class='addVehicle-content-main'>
  <el-card class="addVehicle-content-screening" style="margin-bottom: 20px">
    <el-form :model="formCar" style='margin:16px auto; width:50%;' size="small" ref='formCar'>
        <el-form-item label="车辆图片" :label-width="formLabelWidth">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            :before-upload="beforeupload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="车牌号" :label-width="formLabelWidth" >
          <el-input v-model="formCar.licenseNum" ></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-select v-model="formCar.vehicleModel" placeholder="请选择车型">
            <el-option label="机动车" value="jidongche"></el-option>
            <el-option label="跑车" value="paoche"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="车长" :label-width="formLabelWidth">
          <el-select v-model="formCar.vehicleLong" placeholder="请选择">
            <el-option label="100" value="jidongche"></el-option>
            <el-option label="200" value="paoche"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="号牌种类" :label-width="formLabelWidth">
          <el-select v-model="formCar.flapperType" placeholder="请选择">
            <el-option label="dfasd" value="jidongche"></el-option>
            <el-option label="asdf" value="paoche"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="品牌型号" :label-width="formLabelWidth">
          <el-input v-model="formCar.brandType" ></el-input>
        </el-form-item>
        <el-form-item label="车架号" :label-width="formLabelWidth" label-suffix='fengzi'>
          <el-input v-model="formCar.carframe" ></el-input>
        </el-form-item>
        <el-form-item label="发动机号" :label-width="formLabelWidth">
          <el-input v-model="formCar.engineNum" ></el-input>
        </el-form-item>
        <el-form-item label="动力类型" :label-width="formLabelWidth">
          <el-select v-model="formCar.powerType" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-alert
          title="提示:"
          type="error"
          :closable="false"
          style="margin-bottom: 20px"
          description="提示：车架号(车辆识别代号VIN)一般在汽车挡风玻璃的左下角或右下角，或在车辆行驶证中查找。">
        </el-alert>
      </el-form>
      <div class="addCarBtn">
        <el-button @click="dialogDriver = false" style='margin-right:40px;'>取 消</el-button>
        <el-button  type="primary" @click="insertDriver('formCar')">确 定</el-button>
      </div>
  </el-card>
</div>
</template>
<script>
export default {
  data () {
    return {
      param: '', // 表单提交的参数
      formLabelWidth: '90px',
      formCar: {
        file: '',
        licenseNum: '',
        vehicleModel: '',
        vehicleLong: '',
        flapperType: '', // 号牌类型
        brandType: '', // 品牌型号
        carframe: '', // 车架号
        engineNum: '', // 发动机号
        powerType: '' // 动力类型
      },
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    beforeupload (file) {
      // 创建临时的路径来展示图片
      var windowURL = window.URL || window.webkitURL
      this.src = windowURL.createObjectURL(file)
      // 重新写一个表单上传的方法
      this.param = new FormData()
      this.param.append('file', file, file.name)
      return false
    },
    handleRemove (file, fileList) {
    },
    insertDriver (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // let param = {
          //   plateNumber: this.formCar.licenseNum,
          //   motorcycleType: this.formCar.vehicleModel,
          //   carLength: this.formCar.vehicleLong,
          //   plateNumberType: this.formCar.flapperType,
          //   brandModel: this.formCar.brandType,
          //   vinNo: this.formCar.carframe,
          //   engineNo: this.formCar.engineNum,
          //   powerType: this.formCar.powerType,
          //   imgFile: this.formCar.dialogImageUrl
          // }
          this.param.append('plateNumber', this.formCar.licenseNum)
          this.axios.post('/services/vp/wlh/addCarInfo', this.param)
            .then((res) => {
            })
        } else {
          this.$message({
            type: 'error',
            message: '查询信息有误'
          })
          return false
        }
      })
    }
  }
}
</script>
<style lang="less">
.addVehicle-content-main{
  margin:16px;
  min-height: 800px;
}
  .el-form-item{
    margin-bottom:18px;
  }

.addVehicle-content-screening{
  display: block;
  box-sizing: border-box;
}

  .addCarBtn{
    display:flex;
    align-items:center;
    justify-content:center;
  }
</style>
