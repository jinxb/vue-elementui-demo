<template>
  <div>
    <div class="sec_h">
      <h3>
        <el-link href="https://element.eleme.io" target="_blank" class="title"
          >默认链接</el-link
        >
      </h3>
      <el-row>
        <el-button
          type="text"
          v-for="item in lastList"
          :key="item.id"
          class="last"
          >{{ item }}</el-button
        >
      </el-row>
    </div>
    <div class="sec_con">
      <el-container>
        <el-aside class="col_1">
          <div class="box1">
            <el-image :src="src">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
          </div>
          <div class="box2" slot="box2">

          </div>
        </el-aside>
        <el-aside class="col_2">
          <div class="box1" v-for="item in col2" :key="item.id">
            <h4>家庭亲情网</h4>
            <p>家庭沟通专享，亲情欢乐随行</p>
            <span v-if="price"></span>
             <el-image :src="src">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
          </div>
        </el-aside>
        <el-aside class="col_2">
            <!-- 如果数组长度为1 则展示div   如果为2 则展示下面这个 -->
          <div class="box1" v-for="item in col2" :key="item.id">
            <h4>家庭亲情网</h4>
            <p>家庭沟通专享，亲情欢乐随行</p>
            <span v-if="price"></span>
             <el-image :src="src">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
          </div>
        </el-aside>
        <el-aside class="col_2">
          <div class="box1" v-for="item in col2" :key="item.id">
            <h4>家庭亲情网</h4>
            <p>家庭沟通专享，亲情欢乐随行</p>
            <span v-if="price"></span>
             <el-image :src="src">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
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
  data() {
    return {
      lastList: ["全部", "提速降费"],
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.sec_h {
  width: 100%;
  height: 67px;
  margin: 0 auto;
  background: #ffffff;
  .title {
    float: left;
    display: block;
    padding-top: 32px;
    font: 22px/22px "microsoft yahei";
    color: #222222;
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
    background-color: blue;
  }
  .col_2 {
    width: 240px !important;
    height: 466px;
    border-right: 1px solid #e8e8e8;
    background-color: yellow;
  }
}
</style>