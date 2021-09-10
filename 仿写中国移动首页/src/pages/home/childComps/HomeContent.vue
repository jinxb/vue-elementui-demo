<template>
  <div class="content">
    <stairs :stairsData="sf1"></stairs>
    <stairs :stairsData="sf2"></stairs>
    <stairs :stairsData="sf3"></stairs>
 </div>
</template>

<script>
import HomeApi from 'services/home'

import Stairs from 'components/content/stairs/Stairs'
export default {
  name: 'HomeContent',
  components:{
    Stairs
  },
  data() {
    return {
      sf1:[],
      sf2:[],
      sf3:[],
      sf4:[]
    }
  },
  created() {
    this.qryStairsData()
  },
  methods: {
    qryStairsData(){
      HomeApi.getStairsDataInfo().then(resp => {
        this.sf1 = resp.stairsData.f1
        this.sf2 = resp.stairsData.f2
        this.sf3 = resp.stairsData.f3
        console.log(this.sf1);
      })
    }
  },
 }
</script>

<style lang="scss" scoped>
.content{
  width: 1198px;
  margin: 0 auto;
}
</style>