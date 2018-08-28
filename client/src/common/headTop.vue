<template>
  <div class='header'>
    <el-breadcrumb separator="/" class='fl'>
      <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key='index'>{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class='fc'></div>
    <div class='fr'>
      <div class='search'><i class='el-icon-search'></i></div>
      <div class='bell'><i class='el-icon-bell'></i></div>
      <el-dropdown @command='handleCommand'>
        <div class='personInfo el-dorpdown-link'>
          <div class='photo'></div>
          <div class='userId'>123456</div>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <el-dropdown-menu slot='dropdown' text-color='blue'>
          <el-dropdown-item command='changPassword'>修改密码</el-dropdown-item>
          <el-dropdown-item command='singout'>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleCommand (command) {
      console.log(command)
    }
  }
}
</script>
<style lang='less'>
  .header{
    width:100%;
    min-height:60px;
    display:grid;
    grid-template-columns: 1fr 1fr 200px;
    grid-template-areas: "fl fc fr";
    border-bottom:1px solid #ddd;
    padding-left:10px;
    padding-right:10px;
    box-sizing: border-box;
    background: #EFF2F7;
    .fl,fl{
      grid-area:fl;
      height:60px;
      line-height: 60px;
      i{
        font-size:20px;
        color:#000;
        line-height: 60px;
        vertical-align: middle;
        margin-left:2px;
      }
    }
    fc{
      grid-area:fc;
    }
    .fr,fr{
      grid-area:fr;
      height:60px;
      display:flex;
      align-items: center;
      .search{
        width:40px;
        text-align: center;
      }
      .bell{
        width:40px;
        text-align: center;
      }
      .personInfo{
        display:flex;
        align-items: center;
        .photo{
          width:40px;
          height:40px;
          border-radius:50%;
          background:#ddd;
          margin-right:5px;
        }
      }
      .el-dorpdown-link{
        cursor:pointer;
        color:#409EFF;
      }
    }
  }
</style>
