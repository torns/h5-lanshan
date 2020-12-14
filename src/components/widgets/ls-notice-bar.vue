<template>
  <div class="ls-notice-bar">
    <van-notice-bar
      :left-icon="params.icon"
      :scrollable="false"
      :style="styleContainer"
      :color="params.color"
    >
      <!-- <slot name="left-icon">1</slot> -->
      <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="3000"
        :show-indicators="false"
      >
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
  height: 50px;

  .notice-swipe {
    height: 50px;
    line-height: 50px;
  }

  .van-notice-bar {
    height: 50px;
    line-height: 50px;
  }

  i {
    font-size: 20px !important;
  }
}
</style>