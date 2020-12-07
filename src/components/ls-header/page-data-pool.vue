<template>
  <div>
    <span class="header-text" @click="show = true">数据池</span>
    <el-dialog
      title="数据池"
      width="30%"
      :visible.sync="show"
      :append-to-body="true"
    >
      <!-- 数据池显示 -->
      <div class="pool-content">
        <div
          class="pool-item"
          :class="[item.id == variable.id ? 'theme' : '']"
          v-for="(item, index) in list"
          @click="variable = item"
        >
          {{ item.label }}
        </div>
        <div class="pool-item" @click="add">+</div>
      </div>
      <!--  操作 -->
      <div class="flex mt40">
        <div class="add flex-1">
          <span class="mr15">数据名称</span>
          <el-input
            style="width: 150px"
            size="small"
            v-model="variable.label"
            placeholder="请输入数据名称"
          ></el-input>
        </div>
        <div class="add flex-1">
          <span class="mr15">默认值</span>
          <el-input
            style="width: 150px"
            size="small"
            v-model="variable.default"
            placeholder="请输入默认值"
          ></el-input>
        </div>
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
import { getRandomCode } from "@/utils/tools.js";

export default {
  name: "page-data-pool",
  data() {
    return {
      show: false,
      variable: {},
      list: [],
    };
  },
  computed: {
    ...mapGetters(["poolData"]),
  },
  watch: {
    show: {
      immediate: true,
      handler(newValue, oldValue) {
        if (newValue) {
          this.list = this._.cloneDeep(this.poolData);
        } else {
          this.list = [];
          this.variable = {};
        }
      },
    },
  },
  methods: {
    ...mapMutations(["replacePool"]),
    add() {
      this.list.push({
        id: getRandomCode(8),
        label: "新增数据",
        default: undefined,
      });
    },
    submit() {
      this.replacePool(this.list);
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.pool-content {
  display: flex;
  flex-wrap: wrap;
  width: 380px;
  margin: 10px auto;

  .pool-item {
    padding: 8px 13px;
    margin: 10px 10px 0 0;
    font-size: 14px;
    letter-spacing: 3px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>