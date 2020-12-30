<template>
  <div class="config-body">
    <el-form ref="form" :model="form" label-width="100px" label-position="left">
      <el-form-item label="背景图类型：">
        <el-select
          v-model="form.backgroundType"
          size="small"
          placeholder="请选择背景类型"
        >
          <el-option label="重复" :value="0"> </el-option>
          <el-option label="单张" :value="1"> </el-option>
          <el-option label="纯色" :value="2"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        v-if="[1, 2].includes(form.backgroundType)"
        label="背景色："
      >
        <gradient v-model="form.backgroundGradient"></gradient>
      </el-form-item>
      <el-form-item
        v-if="[0, 1].includes(form.backgroundType)"
        label="背景图片："
      >
        <Imgpond :count="1" v-model="form.backgroundImg" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import gradient from "@/components/gradient";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "page-config",
  components: {
    gradient,
  },
  data() {
    return {
      test: {
        list: [],
      },
    };
  },
  computed: {
    ...mapGetters(["widgetPage"]),
    form() {
      return this.widgetPage.config;
    },
  },
  methods: {
    change(val) {
      console.log(val);

      this.$set(this.form, "backgroundType", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-config {
}
</style>