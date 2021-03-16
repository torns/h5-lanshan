<template>
  <div class="ls-text swiget flex-center">
    <p :style="{
        color: params.color,
        fontSize: params.fontSize + 'px',
      }">
      {{ params.value }}
    </p>
  </div>
</template>

<script>
import config from "@/mixin/config";

export default {
  name: "ls-text",
  mixins: [config],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.ls-text {
  height: 100%;
  padding: 0 10px;
  line-height: 30px;

}
</style>