<template>
  <div id='echart1'>
    <div id='main1'></div>
    <div id='main2' ref='main2'></div>
  </div>
</template>
<script>
import echart from '../../static/echarts.js'
export default {
  data () {
    return {
      msg: 'hello'
    }
  },
  methods: {
    main1 () {
      // 基于准备好的dom,初始化echarts实例
      let myChart = echart.init(document.getElementById('main1'))
      // 绘制图标
      myChart.setOption({
        title: {
          text: 'Echarts 入门示例'
        },
        // 可以下载柱状图
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    },
    main2 () {
      let myChart = echart.init(this.$refs.main2)
      myChart.setOption({
        title: {
          text: '堆叠区域图'
        },
        tooltip: {
          trigger: {
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          }
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {normal: {}},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 保证 this.$el 已经插入文档
      this.main1()
      this.main2()
    })
  }
}
</script>
<style lang='less'>
  #echart1{
    width:100%;
    #main1{
      width:600px;
      height:400px;
      margin:0 auto;
    }
    #main2{
      width:600px;
      height:400px;
      margin:20px auto;
    }
  }
</style>
