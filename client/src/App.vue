<template>
  <div id="app">
    <transition name='fade' mode="out-in" appear>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url("./style/reset.less");
html, body{
  width:100%;
  height:100%;
}
#app{
  width:100%;
  height:100%;
}
.fadesd-enter-active, .fadesd-leave-active {
    transition: all .2s ease;
  }
  .fadesd-enter, .fadesd-leave-active {
    opacity: 0;
  }
</style>
