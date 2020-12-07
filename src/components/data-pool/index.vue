<template>
  <div class="data-pool">
    <el-dialog
      title="数据池配置"
      width="30%"
      :visible.sync="show"
      :append-to-body="true"
    >
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "data-pool",
  props: {
    value: {
      type: Object,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapGetters(["project"]),
  },
  watch: {
    show: {
      immediate: true,
      handler(newVal, oldVal) {
        if (!newVal) {
        } else {
        }
      },
    },
    value: {
      immediate: true,
      handler(newVal, oldVal) {
        this.jump = newVal;
      },
    },
  },
  methods: {
    open(data) {
      this.show = true;
    },
    submit() {
      this.$refs["jumpForm"].validate((valid) => {
        if (valid) {
          this.show = false;
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.data-pool {
}
</style>