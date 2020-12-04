<template>
  <div class="sudoku-config-layout">
    <!-- {{ mValue }} -->
    <draggable class="layouts" v-model="mValue">
      <transition-group>
        <div
          v-for="(item, index) in mValue"
          :key="index"
          class="layouts-item flex-center"
        >
          <img :src="configList.find((config) => config.key == item).img" alt="" />
        </div>
      </transition-group>
    </draggable>
    <div class="flex row-around operation">
      <el-popover placement="top" width="250" trigger="click">
        <div class="flex-column">
          <div class="flex-center">选择行类型</div>
          <div v-for="(config, i) in configList" :key="i" class="layouts-item">
            <img :src="config.img" alt="" @click="addLayout(config.key)" />
          </div>
        </div>
        <i title="新增" class="iconfont icon-xinzeng" slot="reference"></i>
      </el-popover>
      <i
        title="删除"
        class="iconfont icon-lajitong"
        @click="deleteLayout()"
      ></i>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "sudoku-config-layout",
  components: {
    draggable,
  },
  data() {
    return {
      mValue: [],
      configList: [
        { key: 2, img: "https://s3.ax1x.com/2020/11/19/DuNKyQ.png" },
        { key: 3, img: "https://s3.ax1x.com/2020/11/19/DuNJYV.png" },
        { key: 4, img: "https://s3.ax1x.com/2020/11/19/DuN40A.png" },
      ],
    };
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.mValue = newValue;
      },
    },
    mValue: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.$emit("input", newValue);
      },
    },
  },
  methods: {
    addLayout(config) {
      if (this.mValue.length < 4) {
        this.mValue.push(config);
      }
    },
    deleteLayout() {
      if (this.mValue.length > 1) {
        this.mValue.pop();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.layouts-item {
  margin: 5px 0;
  padding: 2px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  // border: solid 1px;
  cursor: pointer;
}

.operation {
  display: flex;
  justify-content: space-around;

  i {
    color: $theme-color;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      color: #286de7;
    }
  }
}
</style>