<template>
  <div>
    <head-top></head-top>
    <nav-bar>
      <div slot="left" class="head_con" id="middle">
        <a href="http://www.10086.cn/" onclick="javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_LOGO_571|577');}">
          <img class="logo" style="margin-top: 20px;" alt="中国移动欢迎您" :src="require('assets/img/201805181516251275sK.png')">
        </a>
      </div>
      <div slot="right">
        <search></search>
      </div>
    </nav-bar>
    <tab-control :navInfo="navInfo"></tab-control>
 </div>
</template>

<script>

import HomeApi from 'services/home.js'

import HeadTop from 'components/content/headTop/HeadTop'
import NavBar from 'components/common/navbar/NavBar'
import Search from 'components/content/search/Search'
import TabControl from 'components/content/tabControl/TabControl'

export default {
  name: 'Head',
  data() {
    return {
      navInfo: [],
    }
  },
  components: {
      HeadTop,
      NavBar,
      Search,
      TabControl,
    },
  mounted() {
    this.getNavInfo()
  },
  methods: {
    getNavInfo(){
      HomeApi.getNavconInfo().then(resp => {
        console.log(resp)
        this.navInfo = resp.navInfo
      }).catch((err) => {
        
      });
    }
  },
 }
</script>

<style scoped>
</style>