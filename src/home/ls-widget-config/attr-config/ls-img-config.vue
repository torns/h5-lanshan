<template>
  <div class="ls-text-config">
    <el-form
      ref="form"
      :model="config"
      label-width="120px"
      label-position="left"
    >
      <el-form-item proos="radius" label="原角：">
        <el-input-number
          v-model="config.radius"
          controls-position="right"
          size="small"
          :min="0"
          :max="40"
        ></el-input-number>
      </el-form-item>
      <el-form-item proos="url" label="图片：">
         <Imgpond :count="1" v-model="config.url" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: "ls-img-config",
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