<template>
  <div class="promotion" v-if="swData.tImage">
    <div class="promo235">
      <el-image
        style="width: 100%"
        :src="require(`assets/img/${swData.tImage}`)"
      ></el-image>
    </div>
    <div class="promo960">
      <awesome-swiper :proImages="swData.proImages"></awesome-swiper>
    </div>
  </div>
</template>

<script>
import HomeApi from 'services/home'

import AwesomeSwiper from 'components/common/awesomeSwiper/AwesomeSwiper'
export default {
  name: "Promotion",
  components:{
    AwesomeSwiper
  },
  data() {
    return {
      swData:{}
    };
  },
  created() {
    this.qryProData()
    
  },
  methods: {
    qryProData(){
      HomeApi.getswDataInfo().then(resp => {
        console.log(resp)
        this.swData = resp.swData
      })
    }
  },
};
</script>

<style lang="scss">
.promotion {
  width: 1200px;
  height: 170px;
  margin: 20px auto 0;
  .promo235 {
    float: left;
    width: 235px;
    height: 170px;
  }
  .promo960 {
    float: right;
    width: 960px;
    height: 170px;
    position: relative;
    overflow: hidden;
    /* .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    } */
  }
}
</style>