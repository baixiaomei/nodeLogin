<template>
  <div  class='foodList'>
    <headTop />
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
    }
  }
}
</script>
<style lang='less'>
@import '../style/mixin.less';
.foodList{
  width:100%;
  height:100%;
}
</style>
