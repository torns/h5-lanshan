<template>
  <div class="data-pool">
    <el-dialog
      title="数据池"
      width="30%"
      :visible.sync="show"
      :append-to-body="true"
      :close-on-click-modal="false"
    >
      <div class="f16 lb-2 mb5 theme lh-20">数据池管理</div>
      <div class="pool flex mb50">
        <!-- 数据池显示 -->
        <div class="pool-content">
          <div
            class="pool-item"
            :class="[item.id == variable.id ? 'theme' : '']"
            v-for="(item, index) in poolData"
            @click="variable = item"
          >
            {{ item.label }}
          </div>
          <div class="pool-item" @click="add">+</div>
        </div>
        <!--  操作 -->
        <div class="flex-cloumn w200">
          <div class="add flex-1 mb10">
            <!-- <span class="mr15">数据名称</span> -->
            <el-input
              style="width: 150px"
              size="small"
              v-model="variable.label"
              placeholder="数据名称"
            ></el-input>
          </div>
          <div class="add flex-1 mb10">
            <el-input
              style="width: 150px"
              size="small"
              v-model="variable.default"
              placeholder="默认值"
            ></el-input>
          </div>
          <div class="add flex-1 mb10">
            <el-input
              style="width: 150px"
              size="small"
              :disabled="true"
              placeholder="当前值"
              v-model="variable.value || variable.default"
            ></el-input>
          </div>
        </div>
      </div>
      <div class="f16 lb-2 mb5 theme lh-20">数据池配置当前物料</div>
      <div class="f12 lb-2 mb25 theme lh-20">
        配置后，在点击物料时，会把数据pool_value字段赋值给选择的数据池数据
      </div>
      <div class="flex-center">
        <el-select
          v-model="mValue"
          size="small"
          style="width: 300px"
          clearable
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
      <!-- {{ poolData }} -->
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
    poolData: {
      deep: true,
      handler(newVal, oldVal) {
        console.log("触发");

        this.replacePool(newVal);
      },
    },
  },
  methods: {
    ...mapMutations(["replacePool"]),
    add() {
      this.poolData.push({
        id: getRandomCode(8),
        label: "新增数据",
        default: undefined,
      });
    },
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
.pool {
  .pool-content {
    flex: 1;

    .pool-item {
      display: inline-block;
      height: 30px;
      padding: 8px 13px;
      margin: 0 10px 10px 0;
      font-size: 14px;
      letter-spacing: 3px;
      box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>