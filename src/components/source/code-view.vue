<template>
  <div class="code-view">
    <json-view
      :data="resCode"
      theme="vs-code"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    />
  </div>
</template>

<script>
import jsonView from "vue-json-views";
import { getSourceData, filterData } from "@/utils/source";

export default {
  name: "code-view",
  components: { jsonView },
  props: {
    option: {
      type: Object,
    },
  },
  data() {
    return {
      loading: false,
      resCode: {},
    };
  },
  methods: {
    // 发送接口返回数据
    async getData(over = true) {
      this.loading = true;
      await getSourceData(this.option).then(
        (res) => {
          this.resCode = res;
          if (over) {
            this.loading = false;
          }
        },
        () => {
          this.loading = false;
        }
      );
    },
    // 经过过滤器处理数据
    async getFiltersData(code) {
     await this.getData(false).then(() => {
        try {
          let data = this.resCode;
          let result = filterData(data, code);
          if (result) {
            this.resCode = [];
            this.resCode = result;
          } else {
            this.resCode = [];
          }
          this.loading = false;
        } catch (err) {
          console.warn(err);
          this.$notify({
            title: "过滤执行方法错误",
            message: err,
            type: "warning",
          });
          this.resCode = [];
          this.loading = false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.code-view {
}
</style>