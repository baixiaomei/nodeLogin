<template>
    <div class='g-container'>
      <div v-if='show' :class="'g-position g-position' + z" :style="`top:${y - halfvmin}px; left:${x - halfvmin}px; z-index:${z}`">
        <div class="g-center">
          <div class="wave g-wave1"></div>
          <div class="wave g-wave2"></div>
          <div class="wave g-wave3"></div>
          <div class="wave g-wave4"></div>
        </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data () {
    return {
      x: 0,
      y: 0,
      z: 0,
      index: 0,
      halfvmin: 0,
      show: false
    }
  },
  created () {
    let screenSizeWidth = $('body').width()
    let screenSizeHeight = $('body').height()
    this.halfvmin = (screenSizeWidth > screenSizeHeight ? screenSizeHeight / 2 : screenSizeWidth / 2) * 0.8
    console.log('halfvmin', this.halfvmin)
    $(document).on('click', (e) => {
      this.x = e.pageX
      this.y = e.pageY
      this.waveMove(this.x, this.y, this.index++)
    })
  },
  methods: {
    waveMove (x, y, z) {
      console.log(x, y, z)
      this.z = z
      this.show = true
      setTimeout(() => {
        // $(`.g-position${z}`).remove()
        this.x = 0
        this.y = 0
        this.z = 0
        this.halfvmin = 0
        this.show = false
      }, 1000)
    }
  }
}
</script>
<style lang='less'>
  @img: 'https://images.unsplash.com/photo-1440688807730-73e4e2169fb8?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=';
  @aniTime: 1s;
  html, body{
    width:100%;
    height:100%;
  }
  .g-container{
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vw;
    background-image:url(@img);
    background-attachment: fixed;
    background-position:center center;
    background-size:auto 100%;
    overflow:hidden;
    cursor:pointer;
  }
  .g-position{
    position:absolute;
    width:80vmin;
    height:80vmin;
  }
  .g-center{
    position:relative;
    width:100%;
    height:100%;
  }
  .wave{
    position:absolute;
    top:calc((100% - 20vmin)/2);
    left:calc((100% - 20vmin)/2);
    width:20vmin;
    height:20vmin;
    border-radius:50%;
    // background-image: url(@img);
    background-attachment: fixed;
    background-position: center center;
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }
  .g-wave1 {
    background-size: auto 106%;
    animation: wave @aniTime ease-out .1s;
    animation-fill-mode: forwards;
    z-index: 10;
  }
  .g-wave2 {
    background-size: auto 102%;
    animation: wave @aniTime ease-out .15s;
    animation-fill-mode: forwards;
    z-index: 20;
  }
  .g-wave3 {
    background-size: auto 104%;
    animation: wave @aniTime ease-out .25s;
    animation-fill-mode: forwards;
    z-index: 30;
  }
  .g-wave4 {
    background-size: auto 100%;
    animation: wave @aniTime ease-out .4s;
    animation-fill-mode: forwards;
    z-index: 40;
  }
@keyframes wave {
    0% {
        top: calc((100% - 20vmin)/2);
        left: calc((100% - 20vmin)/2);
        width: 20vmin;
        height: 20vmin;
        opacity: 1;
    }
    10% {
        // opacity: 1;
    }
    99% {
        opacity: 1;
    }
    100% {
        top: calc((100% - 80vmin)/2);
        left: calc((100% - 80vmin)/2);
        width: 80vmin;
        height: 80vmin;
        opacity: 0;
    }
}
</style>
