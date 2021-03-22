<template>
  <div class="home">
    <ls-header></ls-header>
    <div class="content">
      <ls-widget-list></ls-widget-list>
      <ls-widget-page></ls-widget-page>
      <ls-widget-config></ls-widget-config>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import lsHeader from "@/home/ls-header";
import lsWidgetList from "@/home/ls-widget-list";
import lsWidgetPage from "@/home/ls-widget-page";
import lsWidgetConfig from "@/home/ls-widget-config";

export default {
  name: "home",
  components: { lsHeader, lsWidgetList, lsWidgetPage, lsWidgetConfig },
  created() {
    this.resetProject();
  },
  methods: {
    ...mapMutations(["resetPage"]),
    ...mapActions(["resetProject"]),
  },
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  height: calc(100vh - 56px);
}
</style>
