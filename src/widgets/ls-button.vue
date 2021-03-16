<template>
  <div class="ls-button flex-center" :style="styleContainer">
    <span :style="styleContent"> {{ params.value }} </span>
  </div>
</template>

<script>
import config from "@/mixin/config";
import {
  fontStyleChannel,
  widgetBackgroundChannel,
} from "@/utils/styleChannel";

export default {
  name: "ls-button",
  mixins: [config],
  data() {
    return {};
  },
  computed: {
    styleContainer() {
      return {
        width: `${this.params.width}%`,
        height: `${this.params.height * this.than}px`,
        borderRadius: `${this.params.radius}px`,
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
.ls-button {
}
</style>