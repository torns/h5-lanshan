<template>
  <div class="widget-config">
    <div
      class="widget-config-body"
      :class="showConfig ? 'widget-config-body-active' : ''"
    >
      <attr-config v-if="showConfig"></attr-config>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ls-widget-config",
  data() {
    return {
      activeName: "first",
    };
  },
  computed: {
    ...mapGetters(["showConfig"]),
  },
};
</script>

<style lang="scss" scoped>
.widget-config {
  position: relative;
  width: 340px;
  height: 100%;
  background: #f5f5f5;
  // padding: 0 20px;
  overflow: hidden;

  .widget-config-body {
    position: absolute;
    top: 0;
    transform: translateX(100%) ;
    z-index: 10;
    transition: 0.5s;
    width: 99%;
    height: 100%;
    overflow: auto;
    box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.1);
  }

  .widget-config-body-active {
    transform: translateX(1%);
  }
}
</style>