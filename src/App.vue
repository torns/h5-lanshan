<template>
  <div id="app" class="h-100">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    // 隐藏加载Loading
    document.getElementById("appLoading").style.display = "none";
  },
};
</script>

<style lang="scss">

</style>
