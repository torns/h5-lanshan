<template>
  <div class="params-list">
    <!-- {{ mValue }} -->
    <div class="params-item" v-for="(item, index) in mValue" :key="index">
      <el-input v-model="item.key" size="small" style="width: 150px"></el-input>
      <el-switch
        class="ml10"
        v-model="item.custom"
        active-text="数据池"
        inactive-text="自定义"
      >
      </el-switch>
      {{ item.pool_property }}
      {{ poolData }}

      <el-select
        v-model="item.pool_property"
        v-if="item.custom"
        value-key="id"
        size="small"
        class="ml15"
        style="width: 180px"
        placeholder="选择赋值的数据池数据"
      >
        <el-option v-for="item in poolData" :label="item.label" :value="item">
        </el-option>
      </el-select>
      <el-input
        v-else
        size="small"
        class="ml15"
        style="width: 180px"
        v-model="item.value"
      ></el-input>
    </div>
    <div class="params-add flex-center theme mt10" @click="mValue.push({})">
      +
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "params-list",
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      mValue: undefined,
    };
  },
  computed: {
    ...mapGetters(["poolData"]),
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        this.mValue = newValue;
      },
    },
    mValue: {
      immediate: true,
      handler(newValue, oldValue) {
        this.$emit("input", newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.params-list {
  .params-add {
    width: 80px;
    height: 30px;
    font-size: 14px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>