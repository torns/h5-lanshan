<template>
  <div class="ls-text swiget">
    <p
      :style="{
        color: params.color,
        fontSize: params.fontSize + 'px',
      }"
    >
      {{ params.text }}
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
  padding: 0 10px;
  line-height: 30px;
}
</style>