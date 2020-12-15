<template>
  <div class="ls-top-bar-control">
    <div class="location"></div>
    <div class="bar-content flex-center" :style="styleContainer">
      <i
        v-if="back"
        class="iconfont icon-fanhui back"
        :style="styleContent"
        @click="$router.go(-1)"
      ></i>
      <span :style="styleContent">{{ text }}</span>
    </div>
  </div>
</template>

<script>
import {
  gradientChannel,
  fontStyleChannel,
  widgetBackgroundChannel,
} from "@/utils/styleChannel";

export default {
  name: "ls-top-bar-control",
  props: {
    text: {
      type: String,
    },
    params: {
      type: Object,
    },
    back: {
      type: Boolean,
      default: false,
    },
  },
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
.ls-top-bar-control {
  .location {
    width: 100%;
    height: 48px;
  }

  .bar-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 48px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #eee;
    z-index: 100;

    .back {
      font-size: 17px;
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
    }

    span {
      font-size: 17px;
    }
  }
}
</style>