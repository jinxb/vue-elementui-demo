<template>
  <div>
    <head-top></head-top>
    <nav-bar>
      <div slot="left" class="head_con" id="middle">
        <a
          href="http://www.10086.cn/"
          onclick="javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_LOGO_571|577');}"
        >
          <img
            class="logo"
            style="margin-top: 20px"
            alt="中国移动欢迎您"
            :src="require('assets/img/201805181516251275sK.png')"
          />
        </a>
      </div>
      <div slot="center">
        <div class="dropdown">
          <el-popover
            placement="bottom-start"
            title=""
            width="546"
            trigger="click"
          >
          <div class="city" v-show="visible">
              <el-row class="title">
                <span style="font-size:12px;color:#333333">全部省份</span>
                <!-- <el-button type="text" class="elColor">{{ cityInfo.busi }}</el-button> -->
              </el-row>
               <el-form class="navboxLeft cityAll" label-position="left">
                  <el-form-item
                    :label="item.code"
                    prop="city"
                    v-for="item in cityAll" 
                    :key="item.code"
                  >
                    <el-radio-group v-for="(item2, index) in item.pros" :key="item2.id" v-model="form.radio1">
                      <el-radio-button
                        :label="`${item2} > `"
                        @click="handleSelectBtn(index)"
                      ></el-radio-button>
                    </el-radio-group>
                  </el-form-item>
                </el-form>
              
            </div>
            <div class="dishi" v-show="!visible">
               
              <el-row class="title">
                <span style="font-size:12px;color:#333333">{{ cityInfo.province }}</span>
                <el-button type="text" class="elColor" @click="visible = !visible">{{ cityInfo.busi }}</el-button>
              </el-row>
               <el-row class="cityAll">
                <el-link
                  href="https://element.eleme.io"
                  target="_blank"
                  :underline="false"
                  v-for="item in cityInfo.citys"
                  :key="item.id"
                  class="el_item"
                  >{{ item }}</el-link
                >
              </el-row>
            </div>
            
            <el-button slot="reference" class="topcity" @click="changeVisible">温州</el-button>
          </el-popover>
        </div>
      </div>
      <div slot="right">
        <search :restaurants="restaurants" :tipList="tipList" :imgName="`searchBg_nor.png`"></search>
      </div>
    </nav-bar>
    <tab-control :navInfo="navInfo"></tab-control>
  </div>
</template>

<script>
import HomeApi from "services/home.js";

import HeadTop from "components/content/headTop/HeadTop";
import NavBar from "components/common/navbar/NavBar";
import Search from "components/content/search/Search";
import TabControl from "components/content/tabControl/TabControl";

export default {
  name: "Head",
  data() {
    return {
      visible: false,
      navInfo: [],
      cityInfo:{},
      cityAll:{},
      restaurants:[],
      tipList:[],
      form:{
        radio1:''
      }
    };
  },
  components: {
    HeadTop,
    NavBar,
    Search,
    TabControl,
  },
  created() {
    this.getNavInfo()
    this.getCitysData()
    this.qrySearchAll();
  },
  methods: {
    changeVisible(){
      if(this.visible){
        this.visible = false
      }
    },
    qrySearchAll() {
      HomeApi.getSearchInfo().then((resp) => {
        const { searchDate, tipList } = resp;
        this.restaurants = searchDate;
        this.tipList = tipList
      });
    },
    getNavInfo() {
      HomeApi.getNavconInfo()
        .then((resp) => {
          console.log('sssss',resp);
          this.navInfo = resp.navInfo;
        })
        .catch((err) => {});
    },
    getCitysData(){
      HomeApi.getCitysInfo()
        .then((resp) => {
         this.cityInfo =  resp.cityData.cityInfo
         this.cityAll = resp.cityData.cityAll
        })
        .catch((err) => {});
    }
  },
};
</script>

<style lang="scss">
.dropdown {
  float: left;
  margin: 40px 0 0 20px;
  position: relative;
  z-index: 100;
  .el-button {
    border: none;
  }
  .el-button:focus,
  .el-button:hover {
    color: #333333;
    background: url("../../../assets/img/slidedown.png") no-repeat right center;
  }
  .dishi {
    float: left;
  }

}
.cityAll{
    font-size: 12px;
    padding: 5px 0;
    text-align: left;
    clear: both;
    .el-form-item{
      margin: 0;
      .el-form-item__label,.el-form-item__content{
          line-height: 12px;
          font-size: 12px;
          margin: 5px 0 9px 0px;
        }
        .el-form-item__label{
          float: left;
          /* height: 12px; */
          margin-right: 10px;
          width: 40px;
          padding: 0 0 0 10px;
          border-left: 3px solid #e50075;
          font-weight: normal;
        }
        .el-radio-button__inner{
          font-size: 12px;
          border: none;
        }
        .el-radio-button__orig-radio:checked+.el-radio-button__inner{
          color: #666;
          background-color: #fff;
        }
    }
    .el-radio-button__inner{
      border: none;
      padding: 0;
    }
}
.elColor{
      clear: none;
      color: #0085d0;
      font-weight: bold;
      padding: 0 20px;
      font-size: 12px;
    }
.el_item{
  display: inline-block;
  padding: 0 5px;
  font-size: 12px;
  font-family: "å¾®è½¯é›…é»‘",Helvetica,Arial,sans-serif;
  color: #666;
}
.el-popper {
  min-width: 160px;
  background: #fff;
  box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
  position: absolute;
  top: 100%;
  left: 0;
}
.el-popover{
  padding: 10px 20px;
}
.el-popper[x-placement^="bottom"] {
  margin-top: 2px;
}
.el-popper .popper__arrow,
.el-popper .popper__arrow::after {
  border-style: none;
}
.topcity {
  cursor: pointer;
  height: 18px;
  padding: 0 15px 0 0;
  font: 16px/18px "microsoft yahei";
  color: #333333;
  background: url("../../../assets/img/slidedown.png") no-repeat right center;
}
</style>