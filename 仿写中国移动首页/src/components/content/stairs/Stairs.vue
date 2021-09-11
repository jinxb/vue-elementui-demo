<template>
  <div v-if="stairsData.length">
    <div class="sec_h">
      <h3>
        <el-link
          href="https://element.eleme.io"
          target="_blank"
          class="title"
          >{{ stairsData[4].title }}</el-link
        >
      </h3>
      <el-row>
        <el-button
          type="text"
          v-for="item in stairsData[4].lastList"
          :key="item.id"
          :class="['last', { all: item === '全部' }]"
          >{{ item }}</el-button
        >
      </el-row>
    </div>
    <div class="sec_con">
      <el-container>
        <el-aside class="col_1">
          <div
            :class="[
              { box1: stairsData[0].f_1[1].t1 ? true : false },
              { box1_1: stairsData[0].f_1[1].t1 ? false : true },
            ]"
          >
            <div v-if="stairsData[0].f_1[0].t1">
              <h4>
                {{ stairsData[0].f_1[0].t1 }} <br />
                {{ stairsData[0].f_1[0].t1_1 }}
              </h4>
              <p>{{ stairsData[0].f_1[0].t2 }}</p>
              <span>{{ stairsData[0].f_1[0].price }}</span>
            </div>
            <el-image
              :src="`${require(`assets/img/${stairsData[0].f_1[0].img[0]}.jpg`)}`"
              lazy
              @load="imgLoad"
            >
              <div slot="placeholder" class="image-slot">
                <img :src="require('assets/img/zhanweitu.jpg')" alt="" />
              </div>
            </el-image>
          </div>
          <div :class="{ box2: stairsData[0].f_1[1].t1 ? true : false }">
            <div v-if="stairsData[0].f_1[1].t1">
              <h4>{{ stairsData[0].f_1[1].t1 }}</h4>
              <p>{{ stairsData[0].f_1[1].t2 }}</p>
              <el-image
                :src="`${require(`assets/img/${stairsData[0].f_1[1].img[0]}.jpg`)}`"
                lazy
              >
                <div slot="placeholder" class="image-slot">
                  <img :src="require('assets/img/pic180_140.jpg')" alt="" />
                </div>
              </el-image>
            </div>
            <div v-else class="box2_3">
              <el-image
                :src="`${require(`assets/img/${item}.jpg`)}`"
                v-for="item in stairsData[0].f_1[1].img"
                :key="item.id"
                lazy
              >
                <div slot="placeholder" class="image-slot">
                  <img :src="require('assets/img/pic95_50.jpg')" alt="" />
                </div>
              </el-image>
            </div>
          </div>
        </el-aside>
        <el-aside class="col_2">
          <div class="box3" v-for="item in stairsData[1].f_2" :key="item.id">
            <h4>{{ item.t1 }}</h4>
            <p>{{ item.t2 }}</p>
            <span v-if="item.price">{{ item.price }}</span>
            <el-image :src="`${require(`assets/img/${item.img[0]}.jpg`)}`" lazy>
              <div slot="placeholder" class="image-slot">
                <img :src="require('assets/img/pic240_120.jpg')" alt="" />
              </div>
            </el-image>
          </div>
        </el-aside>
        <el-aside class="col_2">
          <!-- 如果数组长度为1 则展示div   如果为2 则展示下面这个 -->
          <div v-if="stairsData[2].f_3.length === 2">
            <div class="box3" v-for="item in stairsData[2].f_3" :key="item.id">
              <h4>{{ item.t1 }}</h4>
              <p>{{ item.t2 }}</p>
              <span v-if="item.price">{{ item.price }}</span>
              <el-image
                :src="`${require(`assets/img/${item.img[0]}.jpg`)}`"
                lazy
              >
                <div slot="placeholder" class="image-slot">
                  <img :src="require('assets/img/pic240_120.jpg')" alt="" />
                </div>
              </el-image>
            </div>
          </div>
          <div v-else class="box4">
            <h4>{{ stairsData[2].f_3[0].t1 }}</h4>
            <p>{{ stairsData[2].f_3[0].t2 }}</p>
            <el-image
              :src="`${require(`assets/img/${stairsData[2].f_3[0].img[0]}.jpg`)}`"
              lazy
            >
              <div slot="placeholder" class="image-slot">
                <img :src="require('assets/img/pic240_280.jpg')" alt="" />
              </div>
            </el-image>
          </div>
        </el-aside>
        <el-aside class="col_2">
          <div class="box3" v-for="item in stairsData[3].f_4" :key="item.id">
            <h4>{{ item.t1 }}</h4>
            <p>{{ item.t2 }}</p>
            <span v-if="item.price">{{ item.price }}</span>
            <el-image :src="`${require(`assets/img/${item.img[0]}.jpg`)}`" lazy>
              <div slot="placeholder" class="image-slot">
                <img :src="require('assets/img/pic240_120.jpg')" alt="" />
              </div>
            </el-image>
          </div>
        </el-aside>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stairs",
  props: {
    stairsData: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  mounted() {},
  computed: {},
  data() {
    return {};
  },
  components: {},
  methods: {
     imgLoad() {
        // 判断, 所有的图片都加载完了, 那么进行一次回调就可以了.
          this.$emit('imageload');
	    }
  },
};
</script>

<style lang="scss" scoped>
.el-aside {
  overflow: visible;
  box-sizing: content-box;
}
.sec_h {
  width: 100%;
  height: 67px;
  margin: 0 auto;
  background: #ffffff;
  .all {
    color: rgb(227, 0, 119);
  }
  .el-link.is-underline:hover:after {
    text-decoration: none;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    color: rgb(102, 102, 102);
    border: none;
  }
  .title {
    float: left;
    display: block;
    padding-top: 32px;
    font: 22px/22px "microsoft yahei";
    color: #222222;
  }
  .el-row {
    float: right;
    padding-top: 25px;
  }
}
.sec_con {
  width: 1198px !important;
  height: 466px;
  margin: 0 auto;
  border: 1px solid #e8e8e8;
  position: relative;

  .col_1 {
    width: 475px !important;
    height: 466px;
    border-right: 1px solid #e8e8e8;
  }
  .col_2 {
    width: 240px !important;
    height: 466px;
    border-right: 1px solid #e8e8e8;
  }
  .box1 {
    width: 475px;
    height: 325px;
    border-bottom: 1px solid #e8e8e8;
    .el-image {
      display: block;
      width: 475px;
      height: 325px;
    }
  }
  .box1_1 {
    width: 475px;
    height: 360px;
    position: relative;
    border-bottom: 1px solid #e8e8e8;
    h4 {
      float: left;
      width: 200px;
      padding: 25px 0 0 30px;
      font: 100 22px/34px "microsoft yahei";
      color: #222222;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      float: left;
      width: 220px;
      padding: 13px 0 0 30px;
      font: 14px/14px "microsoft yahei";
      color: #808080;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    span {
      display: block;
      float: left;
      width: 220px;
      padding: 40px 0 0 30px;
      font: 24px/24px "microsoft yahei";
      color: #e40077;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .el-image {
      display: block;
      width: 235px;
      height: 360px;
      position: absolute;
      top: 0px;
      right: 0px;
    }
  }
  .box2_3 {
    width: 475px;
    height: 105px;
  }
  .box2 {
    width: 475px;
    height: 140px;
    position: relative;
    h4 {
      float: left;
      width: 245px;
      padding: 50px 0 0 25px;
      font: 18px/18px "microsoft yahei";
      color: #222222;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      float: left;
      width: 245px;
      padding: 8px 0 0 25px;
      font: 14px/14px "microsoft yahei";
      color: #808080;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .el-image {
      display: block;
      width: 180px;
      height: 140px;
      position: absolute;
      right: 0px;
      top: 0px;
    }
  }
  .box3 {
    width: 240px;
    height: 232px;
    border-bottom: 1px solid #e8e8e8;
    position: relative;
    h4 {
      width: 210px;
      padding: 30px 15px 0px;
      font: 18px / 20px "microsoft yahei";
      color: rgb(34, 34, 34);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      width: 210px;
      padding: 10px 15px 0px;
      font: 14px / 16px "microsoft yahei";
      color: rgb(128, 128, 128);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    span {
      display: block;
      width: 210px;
      padding: 10px 15px 0;
      font: 16px/16px "microsoft yahei";
      color: #e40077;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .el-image {
      display: block;
      width: 240px;
      height: 120px;
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px;
    }
  }
  .box4 {
    width: 240px;
    height: 466px;
    position: relative;
    h4 {
      width: 210px;
      padding: 24px 15px 0px;
      font: 22px / 28px "microsoft yahei";
      color: rgb(34, 34, 34);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      width: 210px;
      padding: 10px 15px 0px;
      font: 14px / 14px "microsoft yahei";
      color: rgb(128, 128, 128);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .el-image {
      display: block;
      width: 240px;
      height: 280px;
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px;
    }
  }
}
</style>