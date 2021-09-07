<template>
  <div class="headtop">
    <div class="head_top1200 clearfix">
      <div class="head_lf" id="head_lf">
        <span class="s1">欢迎来到中国移动网站</span>
        <div id="loginArea" class="login">
          <a
            class="login_a"
            href="https://login.10086.cn/login.html?channelID=12034&amp;backUrl=http%3A%2F%2Fwww.10086.cn%2Findex%2Fzj%2Findex_571_577.html"
            onclick="javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_LOGIN_T_571|577');}"
            >请登录</a
          >
        </div>
      </div>
      <div class="head_rg">
        <a
          href="http://shop.10086.cn/i/"
          class="a1"
          id="tempBar0"
          onclick="javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_SELF_571|577');}"
          >个人中心</a
        >
        <div class="a2" id="sjyyt">
          <a
            :class="['a2_a',{a2_a_h: hoverFlag}]"
            id="tempBar1"
            onclick="javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_APP_571|577');}"
            @mouseenter="handleFlag(true)"
            @mouseleave="handleFlag(false)"
            href="http://www.10086.cn/cmccclient/"
            >中国移动客户端</a
          >
          <div class="a2_box" id="yytbar" v-show="hoverFlag">
            <img
              id="imgYYTfc"
              :src="require('@/assets/img/2weima.png')"
            />
            <p>扫一扫，随时查话费！</p>
          </div>
        </div>
        <a
          href="http://jf.10086.cn/"
          class="a1"
          id="tempBar2"
          onclick="javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_JFSC_571|577');}"
          >积分商城</a
        ><a
          href="http://open.10086.cn/"
          class="a1 a1_shop"
          id="tempBar3"
          onclick="javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_OPEN_571|577');}"
          >能力开放商店</a
        ><a
          href="http://www.10086.cn/aboutus/"
          class="a1"
          id="tempBar4"
          onclick="javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_ABOUT_571|577');}"
          >关于中国移动</a
        ><a
          href="http://www.10086.cn/zzxx/"
          class="a1"
          id="tempBar8"
          onclick="javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_ZZXX_571|577');}"
          >证照信息</a
        ><a
          href="http://www.10086.cn/web_notice/contact/"
          class="a1"
          id="tempBar5"
          onclick="javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_CONTACT_571|577');}"
          >联系我们</a
        ><a
          class="a1"
          id="tempBar6"
          onclick="javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_ZQKH_571|577');}"
          href="http://www.zj.10086.cn/power/"
          >政企客户</a
        ><a
          class="a1"
          href="javascript:void(0)"
          id="cniil_wza"
          onclick="javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_WZWZA_INDEX_571|577');}"
          >网站无障碍</a
        ><a
          href="http://www.chinamobileltd.com/?lang=en"
          class="a1 idx_last"
          id="tempBar7"
          onclick="javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_ENGLISH_571|577');}"
          >ENGLISH</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headTop",
  props: {
    msg: String,
  },
  components: {},
  mixins: [],
  data: function () {
    return {
      message: "headTop",
      hoverFlag: false
    };
  },
  created: function () {},
  mounted: function () {},
  computed: {},
  methods: {
    handleFlag(flag){
      console.log(flag);
      this.hoverFlag = flag
    }
  },
};
</script>

<style lang="scss">
.headtop {
  width: 100%;
  height: 30px;
  margin: 0 auto;
  background: #f5f5f5;
  z-index: 10;
  .head_top1200 {
    width: 1200px;
    height: 30px;
    margin: 0 auto;
    font: 12px/30px "microsoft yahei";
    color: #808080;
    a:link, a:visited {
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
    color: #666;
    }
    .head_lf {
      float: left;
      width: 460px;
      .s1 {
          display: inline-block;
          float: left;
          padding-right: 10px;
      }
      .login {
        float: left;
        width: 72px;
        height: 30px;
        position: relative;
      }
      .login_a {
        transition: 0s;
        display: inline-block;
        width: 70px;
        height: 30px;
        border-left: 1px solid #f5f5f5;
        border-right: 1px solid #f5f5f5;
        text-align: center;
        color: #e40077;
        cursor: pointer;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 112;
      }
    }
    .head_rg {
      float: right;
      a1:hover {
          color: #3eb4fa;
      }
      a:hover, a:active {
          text-decoration: none;
          color: #0085d0;
      }
      .head_top .head_top1200 .head_rg .a1 {
        display: inline-block;
        float: left;
        padding: 0 7px;
        color: #808080;
      }
      .a2 {
        float: left;
        width: 110px;
        height: 30px;
        position: relative;
        margin-right: 10px;
      }
      .a2_a {
        transition: 0s;
        display: inline-block;
        width: 120px;
        height: 30px;
        border-left: 1px solid #f5f5f5;
        border-right: 1px solid #f5f5f5;
        text-align: center;
        color: #808080;
        background: url('../../../assets/img/bg2wm.png')
          no-repeat center center;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 112;
      }
      .a2_a_h{
        border-left:1px solid #dfddde;
        border-right:1px solid #dfddde;
        color:#3eb4fa;
        background:#ffffff url('../../../assets/img/bg2wm.png') no-repeat center center;}
      .a2_box {
        width: 160px;
        height: 160px;
        border: 1px solid #dfddde;
        background: #ffffff;
        position: absolute;
        left: 0px;
        top: 29px;
        z-index: 111;
        img {
            margin: 20px auto 0;
            display: block;
        }
        p {
            font: 14px/30px "microsoft yahei";
            color: #333;
            text-align: center;
        }
      }
      .a1 {
          display: inline-block;
          float: left;
          padding: 0 7px;
          color: #808080;
      }
      .a1_shop{
          color: #e40077;
      }
      .a1_shop:hover {
          color: #e40077;
      }
      .idx_last {
          padding-right: 0px;
      }
    }
  }
}
</style>


