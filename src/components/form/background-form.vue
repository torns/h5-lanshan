<template>
  <form-container title="背景配置">
    <el-form ref="form" :model="form" label-width="90px" label-position="left">
      <el-form-item proos="type" label="背景类型：">
        <el-radio v-model="form.type" :label="0">颜色背景</el-radio>
        <el-radio v-model="form.type" :label="1">图片背景</el-radio>
      </el-form-item>
      <el-form-item v-if="form.type == 0" proos="background" label="背景颜色：">
        <gradient v-model="form.background"></gradient>
      </el-form-item>
      <el-form-item v-else proos="background" label="背景图片：">
        <material-upload v-model="form.url"></material-upload>
      </el-form-item>
    </el-form>
  </form-container>
</template>

<script>
export default {
  name: "background-form",
  props: {
    form: {
      type: Object,
      default: () => fontStyle,
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
.background-form {
}
</style>