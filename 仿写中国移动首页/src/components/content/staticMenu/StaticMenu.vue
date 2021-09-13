<template>
  <div>
    <div class="topImg">
      <img class="kf" alt="扫黄打非举报" src="~assets/img/staticM1.jpg" />
    </div>
    <div class="bMenu">
      <el-row v-if="rList.length" v-for="(item, index) in rList" :key="item.id">
        <span
          :class="['wz', { changeColor: index === currentIndex }]"
          v-show="index === currentIndex"
          >{{item.text}}</span><el-button
          @mouseenter.native="handleActive(index)"
          @mouseleave.native="handleActive()"
          :style="`background:#918888 url(${require(`assets/img/${item.img}.png`)}) no-repeat center center;`"
          :class="{ changeColor: index === currentIndex }"
        ></el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "StaticMenu",
  data() {
    return {
      show: false,
      currentIndex: "",
    };
  },
  props: {
    rList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    handleActive(index) {
      console.log(index);
      if (index || index === 0) {
        this.currentIndex = index;
      } else {
        this.currentIndex = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.topImg {
  width: 40px;
  height: 118px;
  position: fixed;
  right: 0px;
  top: 290px;
  z-index: 900;
}
.bMenu {
  width: 100px;
  height: auto;
  position: fixed;
  right: 0px;
  top: 420px;
  z-index: 900;
  .el-button {
    height: 38px;
    transition: 0s;
    float: right;
    border-radius: 0%;
    border: none;
  }
  .el-button + .el-button {
    margin: 0;
  }
}
.wz {
  display: inline-table;
  width: 60px;
  height: 38px;
  text-align: center;
  font: bold 12px/38px "microsoft yahei";
  color: #ffffff;
  background: #3eb4fa;
}
.changeColor {
  background:#3eb4fa;
  background-color: #3eb4fa !important;
}
</style>