<template>
  <div class="home" ref="home">
    <head-static v-show="showHead"></head-static>
    <head-view></head-view>
    <home-swiper></home-swiper>
    <home-pro-sw></home-pro-sw>
    <home-content ref="con" :positionY='scrollTop'></home-content>
    <img src="~assets/img/dibu.png" alt="" width="1519px">
  </div>
</template>

<script>
import HeadStatic from 'components/content/headStatic/HeadStatic'


import HeadView from './childComps/HeadView.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeProSw from './childComps/HomeProSw.vue'
import HomeContent from './childComps/HomeContent.vue'


  export default {
    name: 'Home',
    components: {
      HeadStatic,
      HeadView,
      HomeSwiper,
      HomeProSw,
      HomeContent,
    },
    mixins: [],
    data: function () {
      return {
        scrollTop: 0,
        showHead: false,
      }
    },
    computed: {

    },
    watch: {

    },
    created() {

    },
    mounted() {
      window.addEventListener('scroll',this.handleScroll)
    },
    methods: {
      handleScroll() {
        //首先修改相对滚动位置
        this.scrollTop = this.scrollTop = window.pageYOffset || document.body.scrollTop
        if (this.scrollTop > 566) {
          this.showHead = true
        }else {
          this.showHead = false
        }
        console.log(this.scrollTop);
        this.$refs.con.contentScroll(this.scrollTop)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {}
</style>
