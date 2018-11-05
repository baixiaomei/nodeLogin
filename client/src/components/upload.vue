<template>
<div class='addVehicle-content-main'>
  <headTop></headTop>
  <el-card class="addVehicle-content-screening" style="margin-bottom: 20px">
    <el-form :model="formCar" style='margin:16px auto; width:50%;' size="small" ref='formCar'>
        <el-form-item label="车辆图片" :label-width="formLabelWidth">
          <div class='upImg'>
            <!-- <img class='pushImg' src="../assets/pic1.png" alt=""> -->
            <img id="upimglsdoImg" :src='upimg1' />
            <div id="upimg1Btn">
              <form enctype="multipart/form-data" method="post">
                <input type="file" name="file1" multipart id="file1"  accept="image/*"  class="uploadImg"  @change="chooseImg($event)"/>
                <!-- <input type="file" name="file1" multipart id="file1" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"  class="uploadImg"  @change="chooseImg($event)"/> -->
              </form>
              <img class='pushImg' src="../assets/upimg.png" alt="">
            </div>
          </div>
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
import lrz from 'lrz'
import headTop from '../common/headTop'
import againsts from '../assets/pic1.png'
export default {
  components: {
    headTop
  },
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
      upimg1: againsts
    }
  },
  methods: {
    chooseImg (event) {
      // 验证图片格式
      if (event.target.files[0]) {
        if (!/\/(?:jpeg|jpg|png)/i.test(event.target.files[0].type)) {
          return
        }
        if (event.target.files[0].type.indexOf('image') === 0) {
          // 对图片进行大小判断
          let reader = new FileReader()
          reader.readAsDataURL(event.target.files[0])
          reader.onload = (e) => {
            // 当图片大于预定大小时，对图片进行压缩
            lrz(e.target.result, {
              quality: 0.1,
              fieldName: 'file1'
            })
              .then((res) => {
                this.upimg1 = res.base64
              })
              .catch(() => {
                alert('请重新选择图片')
              })
          }
        }
      }
    },
    handleImg (img) {
      console.log(img)
      return img.split(',')[1]
    },
    insertDriver (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (!this.handleImg(this.upimg1)) {
            this.$message('请上传图片')
          }
          var file1 = this.handleImg(this.upimg1)
          let param = {
            plateNumber: this.formCar.licenseNum,
            motorcycleType: this.formCar.vehicleModel,
            carLength: this.formCar.vehicleLong,
            plateNumberType: this.formCar.flapperType,
            brandModel: this.formCar.brandType,
            vinNo: this.formCar.carframe,
            engineNo: this.formCar.engineNum,
            powerType: this.formCar.powerType,
            imgFile: file1
          }
          this.$http.post('/insertForm', param)
            .then((res) => {
              console.log('res', res)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="less">
.addVehicle-content-main{
  margin: 16px;
  min-height: 800px;
}
.upImg {
  width: 80%;
  margin: 20px auto;
  position: relative;
  overflow: hidden;
  #upimglsdoImg{
    width:300px;
  }
  .on {
    display: block;
    width: 40%;
    height: 190px;
    border-radius: 10px;
    margin: 4px auto;
  }
  #upimg1Btn {
    position: absolute;
    width: 100%;
    height: 100px;
    top: 40%;
    left: 25%;
    margin-left: -75px;
    text-align: center;
    form {
      height: 100%;
    }
    input {
      outline: none;
      position: relative;
      height: 5.2rem;
      display: block;
      opacity: 0;
      width: 95%;
      z-index: 9999;
    }
    .pushImg {
      display: block;
      width: 155px;
      height: auto;
      margin: 0px auto;
      position: absolute;
      top: 40%;
      left: 25%;
    }
  }
}
</style>
