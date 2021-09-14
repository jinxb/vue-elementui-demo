<template>
  <div class="searchdiv">
    <div
      class="searchbar"
      :style="`background: url(${require(`assets/img/${imgName}`)}) no-repeat;`"
      :class="{ patch: pNum === 2 }"
    >
      <el-autocomplete
        class="el-input form-control"
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="全球通尊享"
        @select="handleSelect"
        :trigger-on-focus="false"
        :debounce=10
      >
      </el-autocomplete>
      <el-button :class="['searBtn', { patch2: pNum === 2 }]"></el-button>
    </div>
    <el-row style="float: left">
      <el-button
        type="text"
        v-for="(item, index) in tipList"
        :key="item"
        :class="{ selBtn: index % 2 === 0 }"
        >{{ item }}</el-button
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    tipList: Array,
    restaurants: Array,
    imgName: String,
    pNum: Number,
  },
  data: function () {
    return {
      message: "headCon",
      state: "",
      timeout: null,
    };
  },
  created: function () {},
  mounted: function () {},
  computed: {},
  methods: {
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 20 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
  },
};
</script>
<style lang="scss">
.searchdiv {
  position: relative;
  float: right;
  margin-top: 22px;
  margin-top: 12px;
  box-sizing: border-box !important;
  .el-popper[x-placement^="bottom"] {
    margin-top: 0;
  }
  .el-popper {
    width: 422px !important;
  }
  .el-autocomplete-suggestion {
    margin: 0px 0px 5px 0px;
    border-radius: 0%;
  }
  .el-popper .popper__arrow,
  .el-popper .popper__arrow::after {
    border-style: none;
  }
  .el-autocomplete-suggestion__wrap {
    padding: 2px 0;
    font-size: 14px;
  }
  .el-button--text {
    color: #333333;
  }
  .selBtn {
    color: #e40077;
  }
  .el-button {
    padding: 0;
    font-size: 12px;
    vertical-align: text-top;
  }
  .el-button + .el-button {
    margin-left: 18px;
  }
  .searchbar {
    border: 1px solid #3eb4fa;
    padding-top: 10px;
    padding-bottom: 5px;
    border: 1px solid transparent;
    position: static;
    width: 500px;
    box-sizing: border-box !important;

    .el-input__inner {
      vertical-align: top;
      outline: none;
      box-shadow: inset 0 0 0 rgb(0 0 0 / 0%);
      z-index: 0;
      border: 0;
      color: #666666;
      height: 32px;
      margin-top: 0px;
      padding: 0px 10px 5px;
      padding-right: 150px;
      font-size: 12px;
      box-sizing: border-box !important;
      border-radius: 0px !important;
      background: none;
    }
  }
  .searBtn {
    position: absolute;
    width: 80px;
    height: 36px;
    right: -1px;
    top: 8px;
    opacity: 0;
  }
  .patch {
    float: right;
    width: 285px;
    padding-top: 1px;
    margin-right: 50px;
  }
  .patch2 {
    right: 46px;
    top: -1px;
  }
}

/* .searchbar2 {
  background: url("../../../assets/img/searchBg_nor.png") no-repeat;
} */
</style>