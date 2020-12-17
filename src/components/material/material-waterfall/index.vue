<template>
  <div
    class="ls-waterfall"
    :style="{ padding: `${gutter}px ${gutter / 2}px 0 ${gutter / 2}px` }"
  >
    <div
      v-for="(col, cIndex) in list"
      :key="cIndex"
      class="ls-waterfall__col"
      ref="waterfall__col"
      :style="{
        width: `calc(${100 / column}% - ${gutter}px)`,
        margin: `0 ${gutter / 2}px`,
      }"
    >
      <div
        v-for="(row, rIndex) in col"
        :key="rIndex"
        class="ls-waterfall__row"
        :style="{ marginBottom: `${gutter}px` }"
      >
        <slot :item="row"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "material-waterfall",
  props: {
    value: {
      type: Array,
      default: [],
    },
    // 列数
    column: {
      type: Number,
      default: 2,
    },
    // 间隔
    gutter: {
      type: Number,
      default: 10,
    },
  },
  mounted() {
    // 初始化多维数组
    this.list = new Array(this.column).fill(1).map(() => []);
  },
  data() {
    return {
      list: [],
    };
  },
  watch: {
    value: {
      handler(list) {
        setTimeout(() => {
          this.list = new Array(this.column).fill(1).map(() => []);
          this.append(list);
        }, 0);
      },
      immediate: true,
    },
  },
  methods: {
    append(list) {
      this.$nextTick(async () => {
        console.log("...");
        console.log(list);

        for (let i in list) {
          const next = () => {
            return new Promise((resolve, reject) => {
              let cloHeight = this.$refs["waterfall__col"].map(
                (e) => e.offsetHeight
              );
              let minH = Math.min(...cloHeight);
              let index = cloHeight.indexOf(minH);
              if (index < 0) {
                index = 0;
              }

              let cuur = list[i];
              this.list[index].push(cuur);

              // 等待图片加载完成 继续 next
              let Img = new Image();
              Img.src = list[i].url;
              Img.onload = () => {
                resolve();
              };
              Img.onerror = () => {
                resolve();
              };
            });
          };
          await next();
          if (i == list.length - 1) {
            this.$emit("end");
            console.log(this.list);
          }
        }
      });
    },
    // 清空
    clear() {
      this.list = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.ls-waterfall {
  width: 100%;
  // padding: 10px 5px 0 5px;
  overflow: hidden;
  .ls-waterfall__col {
    display: inline-block;
    vertical-align: top;
  }
  .ls-waterfall__row {
    display: flex;
    flex-direction: column;
  }
}
</style>