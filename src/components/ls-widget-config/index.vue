<template>
  <div class="widget-config">
    <div class="widget-config-body">
      <attr-config></attr-config>
    </div>
  </div>
</template>

<script>
export default {
  name: "ls-widget-config",
  data() {
    return {
      activeName: "first",
    };
  },
};
</script>

<style lang="scss" scoped>
.widget-config {
  position: relative;
  width: 340px;
  height: 100%;
  // padding: 0 20px;
  box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.1);

  .widget-config-body {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
</style>