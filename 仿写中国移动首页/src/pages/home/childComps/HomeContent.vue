<template>
  <div class="content">
    <stairs :stairsData="sf1" ref="sf1" @imageload="imageload"></stairs>
    <stairs :stairsData="sf2" ref="sf2"></stairs>
    <stairs :stairsData="sf3" ref="sf3"></stairs>
    <stairs :stairsData="sf4" ref="sf4"></stairs>
    <stairs :stairsData="sf5" ref="sf5"></stairs>
    <h-menu
      v-show="showMenu"
      ref="menu"
      @clickStairs="clickStairs"
      :fList="fList"
    ></h-menu>
    <static-menu :rList="rList"></static-menu>
  </div>
</template>

<script>
import HomeApi from "services/home";

import Stairs from "components/content/stairs/Stairs";
import HMenu from "components/content/hMenu/HMenu";
import StaticMenu from 'components/content/staticMenu/StaticMenu'

import { debounce } from "utils/utils";
export default {
  name: "HomeContent",
  props: {
    positionY: Number,
  },
  components: {
    Stairs,
    HMenu,
    StaticMenu
  },
  data() {
    return {
      sf1: [],
      sf2: [],
      sf3: [],
      sf4: [],
      sf5: [],
      fList: [],
      rList: [],
      showMenu: false,
      currentIndex: null,
      themeTopYs: [],
    };
  },
  created() {
    this.qryStairsData();
    this.qryHmenuData();
  },
  mounted() {
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(this.$refs.sf1.$el.offsetTop);
      this.themeTopYs.push(this.$refs.sf2.$el.offsetTop);
      this.themeTopYs.push(this.$refs.sf3.$el.offsetTop);
      this.themeTopYs.push(this.$refs.sf4.$el.offsetTop);
      this.themeTopYs.push(this.$refs.sf5.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
    });
  },
  methods: {
    imageload() {
      this.getThemeTopY();
    },
    qryStairsData() {
      HomeApi.getStairsDataInfo().then((resp) => {
        this.sf1 = resp.stairsData.f1;
        this.sf2 = resp.stairsData.f2;
        this.sf3 = resp.stairsData.f3;
        this.sf4 = resp.stairsData.f4;
        this.sf5 = resp.stairsData.f5;
        console.log(this.sf1);
      });
    },
    qryHmenuData() {
      HomeApi.getMenusDataInfo().then((resp) => {
        const {fList,rList} = resp
        this.fList = fList
        this.rList = rList
      });
    },
    contentScroll(positionY) {
      console.log(positionY);
      if (positionY > 690) {
        this.showMenu = true;
      } else {
        this.showMenu = false;
      }
      //2.positionY和阶梯中的offsetsTop值进行对比
      let length = this.themeTopYs.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] - 63 &&
          positionY < this.themeTopYs[i + 1] - 63
        ) {
          this.currentIndex = i;
          this.$refs.menu.currentIndex = this.currentIndex;
        } else {
          console.log('出bug');
        }
      }
    },
    clickStairs(index) {
      window.scrollTo({
        top: this.themeTopYs[index] - 40,
        behavior: "smooth", // instant
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 1198px;
  margin: 0 auto;
}
</style>