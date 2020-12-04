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
import { mapMutations } from "vuex";
import { getLocalStorage } from "@/utils/storage";

export default {
  name: "Home",
  created() {
    this.resetPage(getLocalStorage("page"));
  },
  methods: {
    ...mapMutations(["resetPage"]),
  },
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  height: calc(100vh - 56px);
}
</style>
