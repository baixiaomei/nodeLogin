<template>
  <div id='home'>
    <headTop></headTop>
    <div class='table_content'>
      <el-table :data='tableData2'  highlight-current-row style='width:100%;' :row-class-name='tableRowClassName'>
        <el-table-column type='index' width='100'></el-table-column>
        <el-table-column prop='date' label='日期' width='180'></el-table-column>
        <el-table-column prop='name' label='姓名' width='180'></el-table-column>
        <el-table-column prop='address' label='地址' ></el-table-column>
      </el-table>
      <div class="block">
        <span class="demonstration">共 {{count}} 条记录  第 {{currentPage3}}/{{pages}}页</span>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="limit"
          layout="prev, pager, next, jumper"
          :total="pages">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import headTop from '../common/headTop'
import {getUserCount, getUserList} from '@/api/getData'
export default {
  components: {
    headTop
  },
  computed: {
    pages () {
      return (Math.floor(this.count / this.limit))
    }
  },
  data () {
    return {
      tableData2: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      currentPage3: 5,
      currentPage: 1,
      currentRow: null,
      offset: 0,
      limit: 20,
      count: 0
    }
  },
  created () {
    this.initData()
  },
  methods: {
    // 获取总页数
    async initData () {
      try {
        const countData = await getUserCount()
        if (countData.status === 1) {
          this.count = countData.count
        } else {
          throw new Error('获取数据失败')
        }
        this.getUsers()
      } catch (err) {
        console.log('获取数据失败', err)
      }
    },
    async getUsers () {
      const user = await getUserList({offset: this.offset, limit: this.limit})
      this.tableData2 = []
      user.forEach(item => {
        const tableData = {}
        tableData.name = item.username
        tableData.date = item.registe_time
        tableData.address = item.city
        this.tableData2.push(tableData)
      })
    },
    // 分页
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage3 = val
      this.offset = (val - 1) * this.limit
      this.getUsers()
    },
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>
<style lang='less'>
@import '../style/mixin.less';
  #home{
    .wh(100%, 100%);
    background:#f0f2f5;
  }
  .table_content{
    width:95%;
    margin-left:2.5%;
    margin-right:2.5%;
    margin-bottom:30px;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .block{
    display: flex;
    margin-top:30px;
    .demonstration{
      line-height: 32px;
      margin-right:20px;
    }
  }
</style>
