<template>
  <div class="ls-button-config">
    <el-form
      ref="form"
      :model="config"
      label-width="90px"
      label-position="left"
    >
      <!-- 字体样式 -->
      <font-form v-model="config.fontStyle" title="标题配置"></font-form>
      <!-- 背景样式 -->
      <background-form v-model="config.backgroundStyle"></background-form>
    </el-form>
  </div>
</template>

<script>
import fontForm from "@/components/form/font-form";
import backgroundForm from "@/components/form/background-form";

export default {
  name: "top-bar-control-config",
  components: {
    fontForm,
    backgroundForm
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
.ls-button-config {
}
</style>