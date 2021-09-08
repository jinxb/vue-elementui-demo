<template>
  <div class="navBox" :style="`width:${cWidth}`">
    <el-form class="navboxLeft" label-width="80px" label-position="left">
      <el-form-item
        :label="item.busiLabel"
        prop="city"
        v-for="item in boxData.boxList"
        :key="item.id"
      >
        <el-radio-group v-for="(item2, index) in item.details" :key="item2.id">
          <el-radio-button
            :label="item2"
            :class="{ lastColor: item2 == '更多' }"
            @click="handleSelectBtn(index)"
          ></el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="navboxRight" v-if="boxData.gImage">
      <el-image :src="require(`assets/img/${boxData.gImage}`)">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBox",
  props: {
    boxData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  computed: {
    cWidth: function () {
      return this.boxData.gImage ? "963px" : "710px";
    },
  },
};
</script>

<style lang="scss">
.navbox {
  width: 963px;
  width: 710px;
  height: auto;
  border: 1px solid #3eb4fa;
  background: #ffffff;
  z-index: 2;
  position: absolute;
  left: 235px;
  top: -1px;
  z-index: 9;
  .navboxLeft {
    box-sizing: content-box !important;
    float: left;
    width: 640px;
    min-height: 396px;
    padding: 10px 30px;
    .el-form-item {
      float: left;
      width: 640px;
      padding: 5px 0;
      margin-bottom: 0px;
      .el-form-item__label {
        font: bold 12px/30px "microsoft yahei";
        color: #494949;
        background: url("../../../assets/img/nav_bgli2.jpg") no-repeat 65px
          center;
      }
      .el-radio-group {
        display: block;
        float: left;
        height: 20px;
        padding: 0 10px;
        margin: 3px 0;
        font: 12px/20px "microsoft yahei";
        color: #494949;
        border-right: 1px solid #d7d7d7;
        .el-radio-button__inner {
          padding: 0;
          border: none;
          font-size: 12px;
        }
      }
      .lastColor {
        .el-radio-button__inner {
          color: #3eb4fa;
        }
      }
      .el-radio-group:last-child {
        border-right: none;
      }
    }
  }
  .navboxRight {
    float: left;
    width: 230px;
    height: 396px;
    padding: 10px 30px 10px 0px;
    background: #ffffff;
  }
}
</style>