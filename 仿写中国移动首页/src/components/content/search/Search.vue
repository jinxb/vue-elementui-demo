<template>
  <div class="searchdiv">
    <div class="searchbar searchbar2">
      <el-autocomplete
        class="el-input form-control"
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="全球通尊享"
        @select="handleSelect"
        :trigger-on-focus="false"
      >
      </el-autocomplete>
      <el-button
        style="
          position: absolute;
          width: 80px;
          height: 36px;
          right: -1px;
          top: 8px;
          opacity: 0;
        "
      ></el-button>
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
import HomeApi from 'services/home'
export default {
  name: "Search",
  data: function () {
    return {
      message: "headCon",
      restaurants: [],
      state: "",
      timeout: null,
      tipList: [],
    };
  },
  created: function () {},
  mounted: function () {
    this.qrySearchAll();
  },
  computed: {},
  methods: {
    qrySearchAll() {
      HomeApi.getSearchInfo().then(resp => {
        const {searchDate, tipList} = resp
        this.restaurants = searchDate
        this.tipList = tipList
      })
    },
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
.searchdiv {
  position: relative;
  float: right;
  margin-top: 22px;
  margin-top: 12px;
  box-sizing: border-box !important;
  .el-button {
    padding: 0;
    font-size: 12px;
    vertical-align: text-top;
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
}

.searchbar2 {
  background: url("../../../assets/img/searchBg_nor.png") no-repeat;
}
</style>