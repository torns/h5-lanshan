<template>
  <div class="ls-top-bar">
    <div class="top-bar-container flex-center" :style="styleContainer">
      <i class="iconfont icon-fanhui back" :style="styleContent"></i>
      <span :style="styleContent"> {{ params.text }}</span>
    </div>
  </div>
</template>

<script>
import config from "@/mixin/config";
import {
  fontStyleChannel,
  widgetBackgroundChannel,
} from "@/utils/styleChannel";

export default {
  name: "ls-top-bar",
  mixins: [config],
  computed: {
    styleContainer() {
      return {
        ...widgetBackgroundChannel(this.params.backgroundStyle),
      };
    },
    styleContent() {
      return {
        ...fontStyleChannel(this.params.fontStyle),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.ls-top-bar {
  // position: sticky;
  // top: 0;
  height: 48px;
  .top-bar-container {
    position: relative;
    width: 100%;
    height: 48px;

    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 46px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .back {
      font-size: 17px;
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>