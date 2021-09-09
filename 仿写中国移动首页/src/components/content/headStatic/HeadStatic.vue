<template>
  <div class="head_2">
    <nav-bar class="headstatic">
      <div slot="left" class="head_con" id="middle">
        <a
          href="http://www.10086.cn/"
          onclick="javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_LOGO_571|577');}"
        >
          <img
            class="logo"
            alt="中国移动欢迎您"
            :src="require('assets/img/201805181516251275sK.png')"
          />
        </a>
      </div>
      <div slot="center" class="nav" style="text-align: left">
        <el-row>
          <el-button v-for="item in tags" :key="item.id" class="navbtn">{{
            item
          }}</el-button>
        </el-row>
      </div>
      <div slot="right">
        <search :imgName="`searchBg_t.jpg`" :pNum="2"></search>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import HomeApi from "services/home.js";

import NavBar from "components/common/navbar/NavBar";
import Search from "components/content/search/Search";

export default {
  name: "Head",
  components: {
    NavBar,
    Search,
  },
  data() {
    return {
      tags: [],
    };
  },
  created() {
    this.qryTagsData();
  },
  methods: {
    qryTagsData() {
      HomeApi.getNavconInfo().then((resp) => {
        console.log(resp);
        this.tags = [...resp.navInfo];
        this.tags = this.tags.splice(1, 5);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.head_2 {
  width: 100%;
  height: 61px;
  margin: 0 auto;
  border-bottom: 1px solid #24a7f9;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1000;
  background: #ffffff;
  box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
  position: fixed;
  .headstatic {
    width: 1200px;
    height: 61px;
    margin: 0 auto;
    .logo {
      width: 230px;
      height: auto;
      margin: 9px 0 0 0;
    }
    .nav {
      height: 50px;
      padding-top: 11px;
      padding-left: 45px;
      .navbtn {
        height: 33px;
        padding: 0 7px;
        font: 16px/33px "microsoft yahei";
        color: #222222;
        border: none;
        /* background: #ffffff; */
        border-radius: 5px;
        /* margin: 0 7px; */
      }
      .el-button:first-child {
        color: #ffffff;
        background: #2ba7ff;
        margin-left: 17px;
        margin-right: 7px;
      }
      .el-button:focus,
      .el-button:hover {
        color: #ffffff;
        background: #2ba7ff;
      }
      .el-button + .el-button {
        margin-left: 27px;
      }
    }
    .headright {
      width: 285px;
      padding-top: 11px;
      margin-right: 50px;
    }
  }
}
</style>