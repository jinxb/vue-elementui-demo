<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
    {{lWidth}}
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props:{
      lWidth: String,
      rWidth: String,
      height: String
    },
    computed:{
    },
    watch:{
      lWidth:()=>{
        console.log(lWidth);
      }
    },
    methods: {
      mth(){
        console.log(this.lWidth);
      }
    },
  }
</script>

<style scoped>
  .nav-bar {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    height: 88px;
    text-align: center;
  }

  .left{
    width: 230px;
  }
  .right{
    width: 285px;
  } 

  .center {
    flex: 1;
  }
</style>
