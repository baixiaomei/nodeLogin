<template>
  <div class='line1'>
    <div id='line1' style='width:90%; height:450px;'></div>
  </div>
</template>
<script>
import echart from '../../static/echarts.js'
export default {
  data () {
    return {}
  },
  props: ['sevenDate', 'sevenDay'],
  mounted () {
    this.myChart = echart.init(document.getElementById('line1'))
  },
  methods: {
    line1 () {
      const colors = ['#5793f3', '#675bba', '#d14a61']
      const option = {
        color: colors,
        title: {
          text: '走势图',
          subtext: 'fdd'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['新注册用户', '新增订单', '新增管理员']
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['bar', 'line']},
            restore: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.sevenDay
        },
        yAxis: [
          {
            type: 'value',
            name: '用户',
            min: 0,
            max: 200,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: '#999'
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '订单',
            min: 0,
            max: 200,
            position: 'right',
            axisLine: {
              lineStyle: {
                color: '#999'
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '新注册用户',
            type: 'line',
            data: this.sevenDate[0],
            yAxisIndex: 1,
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            }
          },
          {
            name: '新增订单',
            type: 'line',
            data: this.sevenDate[1],
            yAxisIndex: 1,
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            }
          },
          {
            name: '新增管理员',
            type: 'line',
            data: this.sevenDate[2],
            yAxisIndex: 1,
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            }
          }
        ]
      }
      this.myChart.setOption(option)
    }
  },
  watch: {
    sevenDate: function () {
      this.line1()
    },
    sevenDay: function () {
      this.line1()
    }
  }
}
</script>
<style lang='less'>

</style>
