<template>
  <div class="ls-button-config">
    <el-form
      ref="form"
      :model="config"
      label-width="90px"
      label-position="left"
    >
      <el-form-item props="value" label="文字：">
        <el-input v-model="config.value" size="small"></el-input>
      </el-form-item>
      <el-form-item proos="height" label="高度：">
        <el-slider v-model="config.height" :min="10" :max="200"></el-slider>
      </el-form-item>
      <el-form-item proos="width" label="宽度：">
        <el-slider v-model="config.width" :min="10" :max="300"></el-slider>
      </el-form-item>
      <el-form-item proos="radius" label="原角：">
        <el-slider v-model="config.radius" :min="0" :max="30"></el-slider>
      </el-form-item>
      <!-- 字体样式 -->
      <font-form v-model="config.fontStyle"></font-form>
      <!-- 背景样式 -->
      <background-form v-model="config.backgroundStyle"></background-form>
    </el-form>
  </div>
</template>

<script>
import fontForm from "@/components/form/font-form";
import backgroundForm from "@/components/form/background-form";

export default {
  name: "ls-button-config",
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