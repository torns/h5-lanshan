<template>
  <div class="ls-title">
    <span :style="styleContent"> {{ params.value }} </span>
  </div>
</template>

<script>
import config from "@/mixin/config";
import {
  gradientChannel,
  fontStyleChannel,
  widgetBackgroundChannel,
} from "@/utils/styleChannel";

export default {
  name: "ls-title",
  mixins: [config],
  data() {
    return {};
  },
  computed: {
    styleContent() {
      return {
        ...fontStyleChannel(this.params.fontStyle),
        marginLeft:this.params.indentation + 'px'
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.ls-title {
  padding: 5px 0;
}
</style>