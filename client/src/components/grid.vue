<template>
  <div class='content'>
    <aside></aside>
    <main></main>
    <footer></footer>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang='less'>
  .content{
    width:100%;
    min-height: 100%;
    display:grid;
    grid-template-columns: 40px 1fr;
    grid-template-rows:1fr 90px;
    grid-template-areas: "asidebar content" "footer footer";
    aside{
      grid-area:asidebar;
      background: yellow;
    }
    main{
      grid-area:content;
      background:red;
    }
    footer{
      grid-area: footer;
      background:blue;
    }
  }
</style>
