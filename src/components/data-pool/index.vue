<template>
  <div class="data-pool">
    <el-dialog
      title="数据池配置"
      width="25%"
      :visible.sync="show"
      :append-to-body="true"
    >
      <div class="f12 lb-2 mb25 theme lh-20">
        物料配置数据池后，点击物料对应单项时，会把对应数据的pool_data字段赋值给选中的数据池数据
      </div>
      <div class="flex-center">
        <el-select
          v-model="mValue"
          size="small"
          style="width: 300px"
          placeholder="选择赋值的数据池数据"
        >
          <el-option
            v-for="item in poolData"
            :label="item.label"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "data-pool",
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {
      show: false,
      mValue: "",
    };
  },
  computed: {
    ...mapGetters(["poolData"]),
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
        this.mValue = newVal;
      },
    },
    // mValue: {
    //   immediate: true,
    //   handler(newVal, oldVal) {},
    // },
  },
  methods: {
    open(data) {
      this.show = true;
    },
    submit() {
      this.$emit("input", this.mValue);
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>