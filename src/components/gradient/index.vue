<template>
  <div class="gradient">
    <div class="gradient-view" :style="{ backgroundImage: gradientVal }"></div>
    <el-color-picker
      v-for="(item, index) in gradientData.list"
      :key="index"
      v-model="item.color"
      show-alpha
      color-format="hex"
      @change="deleteColor(index)"
    ></el-color-picker>
    <div class="gradient-operation">
      <i title="新增" class="iconfont icon-xinzeng" @click="addList()"></i>
      <i title="删除" class="iconfont icon-lajitong" @click="deleteList"></i>
      <el-popover placement="top" width="250" trigger="click">
        <div class="flex-column">
          <div class="flex-center">颜色比例</div>
          <div
            class="block"
            v-for="(colorItem, i) in gradientData.list"
            :key="i"
          >
            <div
              class="w25 h25 radius"
              style="border: 1px solid #eeeeee"
              :style="{ background: colorItem.color }"
            ></div>
            <el-slider v-model="colorItem.proportion" :max="100"></el-slider>
          </div>
        </div>
        <i
          title="颜色比例"
          class="iconfont icon-tiaozheng"
          slot="reference"
        ></i>
      </el-popover>
      <el-popover placement="top" width="250" trigger="click">
        <div class="flex-column">
          <div class="flex-center">渐变角度</div>
          <el-slider v-model="gradientData.angle" :max="360"></el-slider>
        </div>
        <i title="调整角度" class="iconfont icon-adjust" slot="reference"></i>
      </el-popover>
    </div>
  </div>
</template>

<script>
import { gradientChannel } from "@/utils/styleChannel";

export default {
  name: "gradient",
  props: {
    value: {
      type: Object,
      default: () => ({
        angle: 180,
        list: [
          {
            color: "#fff",
            proportion: 50,
          },
        ],
      }),
    },
  },
  data() {
    return {
      gradientData: {
        lsit: [],
      },
    };
  },
  computed: {
    gradientVal() {
      return gradientChannel(this.gradientData);
    },
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        console.log(this.value);

        this.gradientData = newValue;
      },
    },
    gradientData: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.$emit("input", newValue);
      },
    },
  },
  methods: {
    deleteColor(index) {
      if (!this.gradientData.list[index].color) {
        this.gradientData.list[index].color = "#fff";
      }
    },
    addList() {
      if (this.gradientData.list.length < 5) {
        this.gradientData.list.push({ color: "#fff", proportion: 100 });
      }
    },
    deleteList() {
      if (this.gradientData.list.length > 1) {
        this.gradientData.list.pop();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  display: flex;
  align-items: center;
}

.gradient {
  width: 200px;
  .gradient-view {
    height: 100px;
    border: 1px solid #eeeeee;
    border-radius: 10px;
  }

  .gradient-operation {
    display: flex;
    justify-content: space-around;
    margin-top: -15px;

    i {
      color: $theme-color;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        color: #286de7;
      }
    }
  }
}
</style>