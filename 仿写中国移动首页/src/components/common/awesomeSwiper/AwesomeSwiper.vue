<template>
  <swiper
    class="swiper"
    ref="swiper"
    :options="swiperOption"
    v-if="proImages"
    @mouseenter.native="on_top_enter"
    @mouseleave.native="on_top_leave"
  >
    <swiper-slide v-for="item in proImages" :key="item.id">
      <div class="indexbox">
        <h3>{{ item.title1 }}</h3>
        <p>{{ item.title1 }}</p>
        <el-image
          class="st"
          :src="require(`assets/img/${item.img}.png`)"
        ></el-image>
      </div>
    </swiper-slide>
    <!-- <swiper-slide v-for="item in proImages" :key="item.id">
      <div class="indexbox">
        <h3>{{ item.title1 }}</h3>
        <p>{{ item.title1 }}</p>
        <el-image
          class="st"
          :src="require(`assets/img/${item.img}.png`)"
        ></el-image>
      </div>
    </swiper-slide> -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-change-direction",
  title: "Change direction",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    proImages: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 500,
          disableOnInteraction: false,
        },
        // slidesPerView: "auto",
        slidesPerView: 4,
        loop: true, //开启循环模式
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          resize: () => {
            this.$refs.swiper.$swiper.changeDirection(
              window.innerWidth <= 960 ? "vertical" : "horizontal"
            );
          },
        },
      },
    };
  },
  methods: {
    on_top_enter() {
      this.$refs.swiper.$swiper.autoplay.stop();
    },
    on_top_leave() {
      this.$refs.swiper.$swiper.autoplay.start();
    },
  },
};
</script>

<style lang="scss" scoped>
.indexbox {
  float: left;
  width: 235px;
  height: 170px;
  margin: 0 7px 0 0;
  position: relative;
  background: #f4f4f4;
  h3 {
    float: left;
    width: 215px;
    padding: 13px 10px 0;
    font: bold 18px/25px "microsoft yahei";
    color: #222222;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    width: 215px;
    padding: 6px 10px 0;
    font: 14px/20px "microsoft yahei";
    color: #808080;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .st {
    width: 120px;
    height: 100px;
    position: absolute;
    right: 0px;
    bottom: 0px;
  }
}
/* 
  @media (max-width: $container-width) {
    .swiper-button-next {
      right: 20px;
      transform: rotate(90deg);
    }

    .swiper-button-prev {
      left: 20px;
      transform: rotate(90deg);
    }
  } */
</style>