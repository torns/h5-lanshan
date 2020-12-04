<template>
  <div class="ls-text-config">
    <el-form ref="form" :model="config" label-width="120px" label-position='left'>
      <el-form-item props="text" label="文字：">
        <el-input
          v-model="config.text"
          size="small"
          type="textarea"
          rows="4"
        ></el-input>
      </el-form-item>
      <el-form-item props="color" label="字体颜色：">
        <el-color-picker v-model="config.color"></el-color-picker>
      </el-form-item>
      <el-form-item proos="fontSize" label="文字大小：">
        <el-input-number
          v-model="config.fontSize"
          controls-position="right"
          size="small"
          :min="1"
          :max="40"
        ></el-input-number>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "ls-text-config",
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
.ls-text-config {
}
</style>