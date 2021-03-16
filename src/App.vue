<template>
  <div id="app">
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
