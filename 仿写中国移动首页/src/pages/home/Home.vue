<template>
  <div class="home">
    <head-view></head-view>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HeadView from './childComps/HeadView.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'

  export default {
    name: 'Home',
    components: {
      HeadView,
      HomeSwiper,
    },
    mixins: [],
    props: {
      msg: {
        type: String,
        default: 'Home'
      }
    },
    data: function () {
      return {

      }
    },
    computed: {

    },
    watch: {

    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {}
</style>
