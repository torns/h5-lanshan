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
        <material-upload v-model="config.url"></material-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import materialUpload from "@/components/material/material-upload";

export default {
  name: "ls-img-config",
  components: {
    materialUpload,
  },
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