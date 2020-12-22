<template>
  <div class="ls-sudoku" :style="styleSudoku">
    <div class="flex" v-for="(deal, index) in dealList">
      <div
        class="flex-column flex-1 flex-center sudoku-item"
        :class="[params.shadow ? 'sudoku-item-shadow' : '']"
        :style="{ ...styleSudokuItem, backgroundImage: `url(${d.background})` }"
        v-for="(d, index) in deal"
        :key="index"
         @click="jump(d.jump)"
      >
        <img class="sudoku-item-img" :src="d.url" alt="" />
        <div class="font mt7" :style="styleFont">{{ d.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/mixin/config";
import {
  widgetBackgroundChannel,
  fontStyleChannel,
} from "@/utils/styleChannel";

export default {
  name: "ls-sudoku",
  mixins: [config],
  data() {
    return {};
  },
  computed: {
    // 根据布局把数据整理为对应二维数组
    dealList() {
      // 根据布局处理二维数组
      let result = [];
      let copyList = this._.cloneDeep(this.params.list);
      this.params.layouts.map((i) => result.push(copyList.splice(0, i)));
      console.log(result);

      return result;
    },
    styleSudoku() {
      return {
        width: `${this.params.width}%`,
        borderRadius: `${this.params.radius}px`,
        padding: `${this.params.gutter / 2}px`,
        backgroundSize: "cover",
        ...widgetBackgroundChannel(this.params.backgroundStyle),
      };
    },
    styleSudokuItem() {
      return {
        margin: `${this.params.gutter / 2}px`,
        borderRadius: `${this.params.radius}px`,
        padding: `${this.params.padding}px 0`,
      };
    },
    styleFont() {
      return fontStyleChannel(this.params.fontStyle);
    },
  },
};
</script>

<style lang="scss" scoped>
.ls-sudoku {
  overflow: hidden;

  .sudoku-item {
    background-size: cover;

    .sudoku-item-img {
      width: 38px;
      height: 38px;
    }

    .font {
      text-align: center;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
    }
  }

  .sudoku-item-shadow {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  }
}
</style>