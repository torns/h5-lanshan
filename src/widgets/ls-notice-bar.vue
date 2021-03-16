<template>
  <div class="ls-notice-bar" :style="styleHeight">
    <van-notice-bar :left-icon="params.icon" :scrollable="false" :style="styleContainer" :color="params.color">
      <van-swipe vertical class="notice-swipe" :style="styleHeight" :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="item in params.list">{{
          item.text
        }}</van-swipe-item>
      </van-swipe>
    </van-notice-bar>
  </div>
</template>

<script>
import config from "@/mixin/config";
import { gradientChannel, widgetBackgroundChannel } from "@/utils/styleChannel";

export default {
  name: "ls-notice-bar",
  mixins: [config],
  computed: {
    styleContainer() {
      return {
        ...widgetBackgroundChannel(this.params.backgroundStyle),
        ...this.styleHeight
      };
    },
    styleHeight() {
      return {
        height: `${50 * this.than}px !important`,
        lineHeight: `${50 * this.than}px !important`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .van-notice-bar__wrap {
  position: relative;
  padding-left: 5px;
}

.ls-notice-bar {
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);

  i {
    font-size: 20px !important;
  }
}
</style>