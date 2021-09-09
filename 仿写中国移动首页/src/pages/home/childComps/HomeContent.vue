<template>
  <div class="content">
    <stairs></stairs>
 </div>
</template>

<script>
import Stairs from 'components/content/stairs/Stairs'
export default {
  name: 'HomeContent',
  components:{
    Stairs
  }
 }
</script>

<style lang="scss" scoped>
.content{
  width: 1198px;
  margin: 0 auto;
}
</style>