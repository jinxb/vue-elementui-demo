<template>
  <div class="slide_content" :style="`background-color:${bgc};transition:background 1s cubic-bezier(0.14, 1.46, 1, 1) 0s;`">
    <div class="nav1200">
      <swiper :banner='banners' @bgcIndex='handleBgc'></swiper>
      <nav-business class="navBusi"></nav-business>
      <fun-right></fun-right>
    </div>
 </div>
</template>

<script>

import HomeApi from 'services/home'

import Swiper from 'components/content/swiper/Swiper'
import NavBusiness from 'components/content/navBusiness/NavBusiness'
import FunRight from 'components/content/funRight/FunRight'


export default {
  name: 'HomeSwiper',
  components:{
    Swiper,
    NavBusiness,
    FunRight
  },
  data() {
    return {
      bgIndex: '',
      bgc: '',
      currentIndex: 0,
      banners: [],
    }
  },
  watch:{
    bgIndex(val,oldVal){
      if(!val){
        this.bgc =  'rgb(250, 253, 252)'
      }
      if(val === 0){
        this.bgc = '#ffffff'
      }
      if(val === 1){
        this.bgc = 'rgb(19, 48, 78)'
      }
       if(val === 2){
        this.bgc = 'rgb(199, 199, 235)'
      }
       if(val === 3){
        this.bgc = 'rgb(30, 154, 242)'
      }
      if(val === 4){
        this.bgc = 'rgb(229, 57, 19)'
      }
       if(val === 5){
        this.bgc = 'rgb(20 118 230)'
      }
    }
  },
  computed:{
  },
  mounted() {
    this.qryDataAll()
    // console.log(this.$refs.swi);
  },
  methods: {
    qryDataAll(){
      HomeApi.getNavBannerInfo().then(resp => {
        this.banners = resp.banners
      })
    },
    handleBgc(obj){
      this.bgIndex = obj.index
    }
  },
 }
</script>

<style lang='scss'>
.slide_content {
    width: 100%;
    height: 400px;
    margin: 0 auto;
    /* position: relative;
    transition: background-color ease-in-out 1s; */
    .nav1200 {
    width: 1200px;
    height: 0px;
    margin: 0 auto;
    position: relative;
    .navBusi{
        width: 234px;
        height: 398px;
        position: absolute;
        left: 0px;
        top: 0px;
        background: #ffffff;
        z-index: 10;
    }
  }
}
</style>