<template>
  <div class="ls-button-config">
    <el-form
      ref="form"
      :model="config"
      label-width="90px"
      label-position="left"
    >
      <el-form-item props="text" label="标题：">
        <el-input v-model="config.text" size="small"></el-input>
      </el-form-item>
      <!-- 字体样式 -->
      <font-form v-model="config.fontStyle" title='标题配置'></font-form>
      <!-- 背景样式 -->
      <background-form v-model="config.backgroundStyle"></background-form>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "ls-top-bar-config",
  props: {
    params: {
      type: Object,
    },
  },
  computed: {
    config() {
      return this.params;
    },
  },
};
</script>

<style lang="scss" scoped>
.ls-button-config {
}
</style>