<template>
  <div class="controls">
    <ls-top-bar-control
      :params="params"
      :text="widgetPage.name"
    ></ls-top-bar-control>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    view: {
      type: Boolean,
      default: false,
    },
  },
  name: "controls",
  computed: {
    ...mapGetters(["project", "widgetPage"]),
    params() {
      return this.project.controls.topBar.params;
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.controls {
}
</style>