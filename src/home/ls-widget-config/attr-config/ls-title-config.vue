<template>
  <div class="ls-title-config">
    <el-form
      ref="form"
      :model="config"
      label-width="90px"
      label-position="left"
    >
      <el-form-item props="text" label="文字：">
        <el-input v-model="config.text" size="small"></el-input>
      </el-form-item>
      <!-- 字体样式 -->
      <font-form v-model="config.fontStyle"></font-form>
    </el-form>
  </div>
</template>

<script>
import fontForm from "@/components/form/font-form";

export default {
  name: "ls-title-config",
  components: {
    fontForm,
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
.ls-title-config {
}
</style>