<template>
  <div class='shopList'>
    <headTop />
    <div class='table_content'>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="店铺名称"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="店铺地址"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.address }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="活动描述"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.descript }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="商铺类型"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.category }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row, scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <span class="demonstration">直接前往</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size=pageSize
        layout="prev, pager, next, jumper"
        :total="pages">
      </el-pagination>
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
      currentPage: 1, // 当前页数
      pageSize: 5, // 每页几条信息
      pages: 0, // 总共多少页
      tableData: [{
        id: 1,
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        descript: '满减优惠',
        category: '快餐'
      }, {
        id: 2,
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        descript: '满减优惠',
        category: '快餐'
      }, {
        id: 3,
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        descript: '满减优惠',
        category: '快餐'
      }, {
        id: 4,
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        descript: '满减优惠',
        category: '快餐'
      }, {
        id: 5,
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        descript: '满减优惠',
        category: '快餐'
      }]
    }
  },
  created () {
    this.getdata()
  },
  methods: {
    getdata () {
      this.$http.post('http://localhost:3000/getGoodList', {currentPage: this.currentPage, pageSize: this.pageSize})
        .then((res) => {
          this.tableData = res.data.list
          this.pages = res.data.pages
        })
    },
    handleEdit (index, row) {
    },
    async handleDelete (index, row, id) {
      this.$http.post('http://localhost:3000/deleteShop', {
        id: id
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            // 重新获取数据
            // this.getdata()
            // 返回 去掉第index 的一个元素的数组
            this.tableData.splice(index, 1)
          }
        })
    },
    // 分页
    handleSizeChange (val) {
    },
    handleCurrentChange (val) {
      this.currentPage3 = val
      this.offset = (val - 1) * this.limit
      this.getdata()
    }
  }
}
</script>
<style lang='less'>
@import '../style/mixin.less';
  #shopList{
    .wh(100%, 100%);
    background:#f0f2f5;
  }
  .table_content{
    width:95%;
    margin-left:2.5%;
    margin-right:2.5%;
    margin-bottom:30px;
  }
  .block{
    width:95%;
    display: flex;
    margin-top:30px;
    margin-left:2.5%;
    align-items: center;
  }
</style>
