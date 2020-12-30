/** 
* 字体表单
*/
<template>
  <form-container :title="title || '文字配置'">
    <el-form ref="form" :model="form" label-width="90px" label-position="left">
      <el-form-item proos="fontSize" label="文字大小：">
        <el-slider v-model="form.fontSize" :min="10" :max="24"></el-slider>
      </el-form-item>
      <el-form-item proos="fontWeight" label="文字粗细：">
        <el-slider
          v-model="form.fontWeight"
          :min="500"
          :max="1000"
          :step="100"
        ></el-slider>
      </el-form-item>
      <el-form-item proos="letterSpacing" label="文字间距：">
        <el-slider v-model="form.letterSpacing" :min="0" :max="10"></el-slider>
      </el-form-item>
      <el-form-item proos="backgroundColor" label="字体颜色：">
        <!-- <gradient v-model="form.backgroundColor"></gradient> -->
        <el-color-picker v-model="form.color"></el-color-picker>
      </el-form-item>
    </el-form>
  </form-container>
</template>

<script>
import { fontStyle } from "@/config/initData";
import fontForm from "@/components/form/font-form";
import formContainer from "@/components/container/form-container";
import gradient from "@/components/gradient";

export default {
  name: "font-form",
  components: {
    fontForm,
    gradient,
    formContainer,
  },
  props: {
    form: {
      type: Object,
      default: () => fontStyle,
    },
    title: {
      type: String,
      default: "",
    },
  },
  model: {
    prop: "form",
    event: "change",
  },
  data() {
    return {
      mForm: {},
    };
  },
  watch: {
    form: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.mForm = this.form;
      },
    },
    mForm: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.$emit("change", this.mForm);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.font-form {
}
</style>