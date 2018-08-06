<template>
  <div class='lottery'>
    <div class='pointer'  @click='action' :style="{transform:rotate_angle,transition:rotate_transition}"></div>
    <div class='rotate' id='rotate'>
      <!-- <div class='prize prize_1' style='transform: rotate(0deg) translateX(0%); width:80px;' >苹果6s</div> -->
      <div v-for="item in list" :class='"prize prize_" + item.id' :key="item.id" :style='"transform: rotate(" + item.id * 45 + "deg) translateX(-50%); width:80px;"'>{{item.name}}</div>
      <!-- <div class='prize prize_1' style='transform: rotate(0deg) translateX(-50%); width:80px;' >苹果6s/div> -->
      <!-- <div class='prize prize_2' style='transform: rotate(45deg) translateX(-50%); width:80px;' >谢谢参与</div>
      <div class='prize prize_3' style='transform: rotate(90deg) translateX(-50%); width:80px;' >充电宝</div>
      <div class='prize prize_4' style='transform: rotate(135deg) translateX(-50%); width:80px;' >未中奖</div>
      <div class='prize prize_5' style='transform: rotate(180deg) translateX(-50%); width:80px;' >压底</div>
      <div class='prize prize_6' style='transform: rotate(225deg) translateX(-50%); width:80px;' >123</div>
      <div class='prize prize_7' style='transform: rotate(270deg) translateX(-50%); width:80px;' >13圆</div>
      <div class='prize prize_8' style='transform: rotate(315deg) translateX(-50%); width:80px;' >未中奖</div> -->
    </div>
  </div>
</template>

<script>
// import random from '../utils/util'
export default {
  data () {
    return {
      winnum: '', // 中奖得下标
      startRotating_degree: 0,
      rotateAngle: 0, // 转盘要旋转得度数
      rotateTransition: 'transform 12s ease-in-out',
      list: [
        {
          'name': '10元',
          'id': 0,
          'type': '优惠券'
        },
        {
          'name': '11元',
          'id': 1,
          'type': '优惠券'
        },
        {
          'name': '12元',
          'id': 2,
          'type': '优惠券'
        },
        {
          'name': '13元',
          'id': 3,
          'type': '优惠券'
        }, {
          'name': '14元',
          'id': 4,
          'type': '优惠券'
        }, {
          'name': '15元',
          'id': 5,
          'type': '优惠券'
        }, {
          'name': '16元',
          'id': 6,
          'type': '优惠券'
        }, {
          'name': '17元',
          'id': 7,
          'type': '优惠券'
        }
      ]
    }
  },
  beforeCreate () {
    window.location.title = '抽奖'
  },
  created () {
  },
  methods: {
    /* 点击开始抽奖按钮 */
    action () {
      /* 中奖下标 */
      this.winnum = Math.floor(Math.random() * Number(this.list.length - 1))
      this.rotating(this.winnum)
    },
    rotating (index) {
      console.log(index)
      var resultIndex = index
      this.rotateTransition = 'transform 6s cubic-bezier(0.25,0.1,0.01,1)'
      if (this.startRotatingDegree < 0) {
        this.startRotatingDegree = 0
      } else {
        this.startRotatingDegree = this.startRotatingDegree + Math.floor(360 * 100 / this.list.length) / 200
      }

      var rotateAngle = this.startRotatingDegree + 360 * 10 + Math.floor(-360 * 100 / this.list.length) / 200 - Math.floor(360 * 100 / this.list.length) * resultIndex / 100
      this.startRotatingDegree = rotateAngle
      this.rotateAngle = 'rotate(' + rotateAngle + 'deg)'
      console.log(rotateAngle)
    }
  }
}
</script>
<style lang='less'>
  @width: 280px;
  .lottery{
    width:@width;
    height:@width;
    margin:20px auto;
    position:relative;
    background:#f2f2f3;
    border-radius:50%;
    .pointer{
      background:url('http://ww2.sinaimg.cn/large/459e195ajw1f1zng2c5kvj204w06m74s.jpg') center no-repeat;
      background-size: contain;
      position:absolute;
      z-index:3;
      width:100px;
      height:100px;
      left:@width/2 - 50px;
      bottom:@width/2 - 50px;
      border-radius:50%;
    }
    .rotate{
      width:100%;
      height:100%;
      background:url('http://ww4.sinaimg.cn/large/459e195ajw1f1zng2u879j20fu0fu412.jpg') center no-repeat;
      background-size:100%;
      margin:0 auto;
      position:relative;
      .prize{
        // margin:0 auto;
        // width:100px;
        // height:100px;
        // color:#000;
        // text-align: center;
        // border-radius:100px 0 0;
        // background:#ddd;
        // transform: translateX(45deg);
        // transform-origin: 0 100%;
        width:80px;
        position:absolute;
        top:0;
        z-index:12;
        height:100px;
        left:140px;
        transform-origin:0 140px;
        // transform-origin: 100% 100%;
        line-height:105px;
        vertical-align: baseline;
        background:transparent;
        text-align: center;
      }
      .prize_0{
        // background-color:#fef4ac;
        // -webkit-transform: skew(54deg);
        // -moz-transform:skew(54deg);
        // transform:skew(54deg);
      }
    }
  }
</style>
