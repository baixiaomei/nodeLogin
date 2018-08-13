<template>
  <div id='home'>
    <headTop></headTop>
    <div class='content'>
      <header class='section_title'>数据统计</header>
      <el-row :gutter='60'>
        <el-col :span='6'>
          <div class='data_list today_head'>
            <span class='data_num head'>当日数据：</span>
          </div>
        </el-col>
        <el-col :span='6'>
          <div class='data_list'>
            <span class='data_num'>1000</span>新增用户
          </div>
        </el-col>
        <el-col :span='6'>
          <div class='data_list'>
            <span class='data_num'>2000</span>新增订单
          </div>
        </el-col>
        <el-col :span='6'>
          <div class='data_list'>
            <span class='data_num'>3000</span>新增管理员
          </div>
        </el-col>
      </el-row>
      <el-row :gutter='60'>
        <el-col :span='6'>
          <div class='data_list all_head'>
            <span class='data_num head'>总数据：</span>
          </div>
        </el-col>
        <el-col :span='6'>
          <div class='data_list'>
            <span class='data_num'>13527</span>注册用户
          </div>
        </el-col>
        <el-col :span='6'>
          <div class='data_list'>
            <span class='data_num'>5259</span>订单
          </div>
        </el-col>
        <el-col :span='6'>
          <div class='data_list'>
            <span class='data_num'>20292</span>管理员
          </div>
        </el-col>
      </el-row>
    </div>
    <tendency :sevenDate='sevenDate' :sevenDay='sevenDay'/>
  </div>
</template>
<script>
import headTop from '../common/headTop'
import tendency from '../common/tendency'
import dtime from 'time-formater'
import {userCount, orderCount, getUserCount, getOrderCount, adminDayCount, adminCount} from '@/api/getData'
export default {
  components: {
    headTop,
    tendency
  },
  data () {
    return {
      userCount: null,
      orderCount: null,
      adminCount: null,
      allUserCount: null,
      allOrderCount: null,
      allAdminCount: null,
      sevenDay: [],
      sevenDate: [[], [], []]
    }
  },
  methods: {
    async initData () {
      const today = dtime().format('YYYY-MM-DD')
      Promise.all([userCount(today), orderCount(today), adminCount(), adminDayCount(today), getUserCount(), getOrderCount()])
        .then(res => {
          this.userCount = res[0].count
          this.orderCount = res[1].count
          this.adminCount = res[2].count
          this.allUserCount = res[3].count
          this.allOrderCount = res[4].count
          this.allAdminCount = res[5].count
        }).catch(err => {
          console.log(err)
        })
    },
    async getSevenData () {
      const apiArr = [[], [], []]
      this.sevenDay.forEach(item => {
        apiArr[0].push(userCount(item))
        apiArr[1].push(orderCount(item))
        apiArr[2].push(adminDayCount(item))
      })
      console.log(apiArr)
      const promiseArr = [...apiArr[0], ...apiArr[1], ...apiArr[2]]
      console.log(promiseArr)
      Promise.all(promiseArr).then(res => {
        const resArr = [[], [], []]
        res.forEach((item, index) => {
          if (item.data.status === 1) {
            resArr[Math.floor(index / 7)].push(item.data.count)
          }
        })
        this.sevenDate = resArr
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.initData()
    for (let i = 6; i > -1; i--) {
      const date = dtime(new Date().getTime() - 86400000 * i).format('YYYY-MM-DD')
      this.sevenDay.push(date)
    }
    this.getSevenData()
  }
}
</script>
<style lang='less'>
@import '../style/mixin.less';
  #home{
    background:#f0f2f5;
  }
  .content{
    width:95%;
    margin-left:2.5%;
    margin-right:2.5%;
    margin-top:10px;
    margin-bottom:30px;
    .section_title{
      font-size:30px;
      text-align: center;
      margin-bottom:20px;
    }
    .el-row{
      margin-bottom:10px;
    }
    .data_list{
      text-align:center;
      font-size:14px;
      color:#666;
      border-radius:6px;
      background: #E5E9f2;
      height:45px;
      line-height: 45px;
    }
    .data_num{
      font-size:26px;
      color:#333;
    }
    .today_head{
      background:#ff9800;
    }
    .all_head{
      background:#20a0ff;
    }
    .head{
      border-radius:6px;
      font-size:22px;
      color:#fff;
      display:inline-block;
    }
  }
</style>
