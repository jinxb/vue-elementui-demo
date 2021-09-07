<template>
  <div class="bs-slider">
    <el-carousel trigger="click" @change='itemChange'>
      <el-carousel-item v-for="(item,index) in banner" :key="item">
        <img :src="require(`assets/img/${item}`)" alt="" style="width:705px">
      </el-carousel-item>
    </el-carousel>
 </div>
</template>

<script>
export default {
  name: 'Swiper',
  props:{
    banner:{
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    itemChange(index,index2){
      this.$emit('bgcIndex',{index,index2})
    }
  },
 }
</script>

<style lang="scss">
.bs-slider {
    width: 1200px;
    max-height: 398px!important;
    height: 398px;
    margin: 0 auto;
    position: relative;
    background: #ffffff;
    overflow: hidden;
    z-index: 1;
}
.el-carousel{
    width: 705px;
    top: 0px;
    left: 235px!important;
    right: 260px!important;
    z-index: 1;
    display: block!important;
}
.el-carousel__container{
    height: 398px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>