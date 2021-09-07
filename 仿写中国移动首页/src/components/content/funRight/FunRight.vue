<template>
  <div class="fun">
    <div class="icons">
      <el-row>
        <el-col :span="5" v-for="(item, index) in funList" :key="item">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="require(`assets/img/f_${index}.gif`)" class="image" />
            <div class="f_label">
              <span>{{ item }}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="charge">
      <el-button
        v-for="(item, index) in ['话 费', '流 量']"
        :key="item"
        :class="['tags', { active: currentIndex === index }]"
        @click="handleTag(index)"
        >{{ item }}
      </el-button>
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-form-item  prop="phone">
            <el-input v-model="form.phone" placeholder='请输入手机号码' maxlength='11'></el-input>
          </el-form-item>
          <el-form-item class="insselect" v-if="!currentIndex">
            <el-radio-group
              v-for="(item, index) in form.pricesInfo"
              :key="item.id"
              v-model="form.price"
              :class="{ defaultSelect: index === defaultNum }"
              @change="handleSelectBtn(index)"
            >
              <el-radio-button
                :label="item"
                @click="handleSelectBtn(index)"
              ></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item class="insselect" v-else>
            <el-radio-group
              v-for="(item, index) in form.fluxInfo"
              :key="item.id"
              v-model="form.flux"
              :class="{ defaultSelect: index === defaultNum }"
              @change="handleSelectBtn(index)"
            >
              <el-radio-button
                :label="item"
                @click="handleSelectBtn(index)"
              ></el-radio-button>
            </el-radio-group>
           
          </el-form-item>
          <el-form-item class="tagsbox_btn">
            <el-button type="primary" @click="onSubmit">立即充值</el-button>
          </el-form-item>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FunRight",
  data() {
    return {
      currentIndex: 0,
      defaultNum: 0,
      funList: [
        "话费查询",
        "流量查询",
        "国际/港澳台",
        "积分兑换",
        "优惠专区",
        "业务办理",
      ],
      form: {
        phone: '',
        price: '',
        flux: '',
        pricesInfo: ["30元", "50元", "100元", "300元", "其他"],
        fluxInfo:["1G","2G","3G","5G","100G"]
      },
    };
  },
  methods: {
    handleTag(index) {
      console.log(index);
      this.currentIndex = index;
      this.defaultNum = 0
    },
    handleSelectBtn(index){
      this.defaultNum = index
    },
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="scss">
.fun {
  width: 260px;
  height: 398px;
  position: absolute;
  right: 0px;
  top: 0px;
  background: #ffffff;
  z-index: 9;
  .icons {
    width: 258px;
    margin: 0 auto;
    padding: 30px 0 0;
    img:hover,
    img:active {
      transform: scale(1.1, 1.1);
    }
  }
  .el-col-5 {
    width: 86px;
    height: 74px;
  }
  .el-col-offset-2 {
    margin: 0;
  }
  .el-card__body {
    width: 86px;
    height: 74px;
    text-align: center;
    vertical-align: middle;
    padding: 0px;
    font-size: 12px;
  }
  .f_label {
    padding-top: 5px;
  }
  .el-card.is-always-shadow,
  .el-card.is-hover-shadow:focus,
  .el-card.is-hover-shadow:hover {
    box-shadow: none;
  }
  .el-card {
    border: none;
  }
  .clearfix {
    zoom: 1;
  }
  .charge {
    width: 230px;
    margin: 0 auto;
    padding-top: 20px;
    border-top: 1px dotted #c2c2c2;
    .el-button {
      border: none;
      border-radius: 0;
    }
    .el-form-item {
      margin-bottom: 0;
    }
    .tags {
      display: block;
      float: left;
      padding: 0px 0px 5px;
      margin: 0 15px;
      font: 14px/14px "microsoft yahei";
      color: #222222;
      border-bottom: 2px solid #ffffff;
    }
    .active {
      display: block;
      float: left;
      padding: 0px 0px 5px;
      margin: 0 15px;
      font: 14px/14px "microsoft yahei";
      color: #3eb4fa;
      border-bottom: 2px solid #3eb4fa;
    }
    .el-form {
    /* display: none; */
      width: 230px;
      padding-top: 13px;
      margin: 0 auto;
      overflow: hidden;
    }
    .el-input__inner{
      width: 208px;
      height: 33px;
      padding: 0 10px;
      font: 12px/33px "microsoft yahei";
      border: 1px solid #dadada;
      box-sizing: content-box;
      border-radius: 0;
      /* color: #dadada; */
    }
    .el-form-item__content{
      line-height: normal;
      .el-radio-button__inner{
        padding: 0;
        border: none;
        font-size: 12px;
        font-family: "微软雅黑",Helvetica,Arial,sans-serif;
        background: none;
        transition:none
      }
    }
    .el-radio-button__inner{
      color: #666;
    }
    .insselect {
      width: 240px;
      height: auto;
      padding: 10px 0;
      text-align: center;
    }
    .defaultSelect{
      border: 1px solid #e30077;
      background: #e30077;
      .el-radio-button__inner{
        color: #ffffff;
      }
    }
    .el-radio-group {
      float: left;
      display: inline-block;
      width: 37px;
      height: 32px;
      line-height: 32px;
      font-size: 12px;
      margin-right: 8px;
      text-align: center;
      border: 1px solid #dadada;
      border-radius: 3px;
      color: #666;
      /* font-size: 0; */
    }
    .tagsbox_btn {
      width: 230px;
      margin: 0 auto;
      padding-top: 12px;
      .el-button{
        display: inline-block;
        float: right;
        width: 129px;
        height: 34px;
        font: 14px/34px "microsoft yahei";
        border-radius: 2px;
        text-align: center;
        padding: 0;
        color: #ffffff!important;
        background: #3eb4fa;
      }
   }
  }
}
</style>