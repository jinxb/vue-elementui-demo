<template>
  <div>
    <div class="btnList">
      <div class="block">
        <el-image
          v-for="o in 7" :key="o"
          :src="require(`assets/img/li_${o}.png`)"></el-image>
      </div>
      <el-button
        v-for="(item, index) in busiBtns"
        :key="item.id"
        :class="{ cur: currentIndex === index || show }"
        @mouseenter.native="handleCur(index)"
        >{{ item }}</el-button
      >
    </div>
    <nav-box
      class="navbox"
      v-show="currentIndex || currentIndex === 0"
      :boxData="boxData"
      @mouseleave.native="handleCur()"
    ></nav-box>
  </div>
</template>

<script>
import HomeApi from "services/home";

import NavBox from "components/content/navBox/NavBox";
export default {
  name: "NavBusiness",
  data() {
    return {
      currentIndex: "",
      show: false,
      busiBtns: [],
      dataAll: {},
      boxData: {},
    };
  },
  components: {
    NavBox,
  },
  mounted() {
    this.qryBusiBtns();
    this.qryBusiAll();
  },
  methods: {
    qryBusiBtns() {
      HomeApi.getNavBusiBtnInfo().then((resp) => {
        this.busiBtns = resp.busiBtns;
      });
    },
    qryBusiAll() {
      HomeApi.getBoxDataInfo().then((resp) => {
        this.dataAll = resp.boxData;
        console.log(this.dataAll);
      });
    },
    handleChange(value) {
      console.log(value);
    },
    handleCur(index) {
      if (index || index === 0) {
        this.currentIndex = index;
        if (index === 0) {
          this.boxData = this.dataAll.b1
        }
        if(index === 1){
          this.boxData = this.dataAll.b2
        }
        if(index === 2){
          this.boxData = this.dataAll.b3
        }
        if(index === 3){
          this.boxData = this.dataAll.b4
        }
        if(index === 4){
          this.boxData = this.dataAll.b5
        }
        if(index === 5){
          this.boxData = this.dataAll.b6
        }
        if(index === 6){
          this.boxData = this.dataAll.b7
        }
      }else {
        this.currentIndex = "";
      }
    },
  },
};
</script>

<style lang="scss">
.btnList {
  float: left;
  width: 235px;
  height: 398px;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 10;
  .block{
    position: absolute;
    .el-image{
      height: 54px;
      display: block;
    }
    .el-image__inner{
      width: 21px;
      height: 21px;
      margin: 15px 10px 15px 31px;
    }
  }
  .el-button + .el-button {
    margin-left: 0;
  }
  .el-button {
    box-sizing: content-box;
    clear: both;
    width: 170px;
    height: 52px;
    border: 1px solid #ffffff;
    background: #ffffff url("../../../assets/img/nav_bgli.png") no-repeat 195px
      center;
    text-align: left;
    font-size: 16px;
    padding: 0;
    padding-left: 63px;
    border-radius: 0px;
  }
  .el-button.is-disabled,
  .el-button.is-disabled:focus,
  .el-button.is-disabled:hover {
    /* color: #409EFF */
    background-image: url("../../../assets/img/nav_bgli.png");
  }
  .cur {
    width: 170px;
    height: 52px;
    border: 1px solid #3eb4fa;
    border-right: 2px solid #ffffff;
    background: #ffffff url("../../../assets/img/nav_bgli.jpg") no-repeat 195px
      center;
    z-index: 10;
    span{
      color: #409EFF;
    }
  }
}
</style>