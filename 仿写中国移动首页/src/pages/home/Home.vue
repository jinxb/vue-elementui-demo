<template>
  <div class="home" ref="home">
    <head-static v-show="showHead"></head-static>
    <head-view></head-view>
    <home-swiper></home-swiper>
    <home-pro-sw></home-pro-sw>
    <home-content></home-content>
    <ul>
      <li>1666</li>
      <li>2666</li>
      <li>3666</li>
      <li>4666</li>
      <li>5666</li>
      <li>6666</li>
      <li>7666</li>
      <li>8666</li>
      <li>9666</li>
      <li>10666</li>
      <li>11666</li>
      <li>12666</li>
      <li>13666</li>
      <li>14666</li>
      <li>15666</li>
      <li>16666</li>
      <li>17666</li>
      <li>18666</li>
      <li>19666</li>
      <li>20666</li>
      <li>21666</li>
      <li>22666</li>
      <li>23666</li>
      <li>24666</li>
      <li>25666</li>
      <li>26666</li>
      <li>27666</li>
      <li>28666</li>
      <li>29666</li>
      <li>30666</li>
      <li>31666</li>
      <li>32666</li>
      <li>33666</li>
      <li>34666</li>
      <li>35666</li>
      <li>36666</li>
      <li>37666</li>
      <li>38666</li>
      <li>39666</li>
      <li>40666</li>
      <li>41666</li>
      <li>42666</li>
      <li>43666</li>
      <li>44666</li>
      <li>45666</li>
      <li>46666</li>
      <li>47666</li>
      <li>48666</li>
      <li>49666</li>
      <li>50666</li>
      <li>51666</li>
      <li>52666</li>
      <li>53666</li>
      <li>54666</li>
      <li>55666</li>
      <li>56666</li>
      <li>57666</li>
      <li>58666</li>
      <li>59666</li>
      <li>60666</li>
      <li>61666</li>
      <li>62666</li>
      <li>63666</li>
      <li>64666</li>
      <li>65666</li>
      <li>66666</li>
      <li>67666</li>
      <li>68666</li>
      <li>69666</li>
      <li>70666</li>
      <li>71666</li>
      <li>72666</li>
      <li>73666</li>
      <li>74666</li>
      <li>75666</li>
      <li>76666</li>
      <li>77666</li>
      <li>78666</li>
      <li>79666</li>
      <li>80666</li>
      <li>81666</li>
      <li>82666</li>
      <li>83666</li>
      <li>84666</li>
      <li>85666</li>
      <li>86666</li>
      <li>87666</li>
      <li>88666</li>
      <li>89666</li>
      <li>90666</li>
      <li>91666</li>
      <li>92666</li>
      <li>93666</li>
      <li>94666</li>
      <li>95666</li>
      <li>96666</li>
      <li>97666</li>
      <li>98666</li>
      <li>99666</li>
      <li>100666</li>
    </ul>
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
      HomeContent
    },
    mixins: [],
    data: function () {
      return {
        scrollTop:'',
        showHead: false
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {}
</style>
