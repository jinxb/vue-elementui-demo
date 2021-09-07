<template>
  <div>
    <el-item>
      <el-form-item label="选择地市：" prop="city" v-for="item in boxList">
        <el-radio-group
          v-for="(item, index) in citys"
          :key="item.id"
          v-model="form.city"
          @change="selectRule([item, 'city'])"
        >
          <el-radio-button
            :label="item.label"
            :class="{ defaultSelect: item.cId === defaultNum }"
            @click="handleSelectBtn(index)"
          ></el-radio-button>
        </el-radio-group>
      </el-form-item>
      
    </el-item>
  </div>
</template>

<script>
export default {
  name: "NavBox",
};
</script>

<style scoped>
</style>