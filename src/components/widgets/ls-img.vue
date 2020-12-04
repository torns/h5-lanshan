<template>
  <div  class="ls-img swiget" ref="widgetRef">
    <img
      class="img"
      :style="{
        borderRadius: params.radius + 'px',
      }"
      :src="params.url"
      alt=""
    />
  </div>
</template>

<script>
import config from "@/mixin/config";
export default {
  name: "ls-img",
  mixins: [config],
};
</script>

<style lang="scss" scoped>
.ls-img {
  .img {
    width: 100%;
  }
}
</style>