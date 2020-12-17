<template>
  <div class="view">
    <viewPage v-if="page" :page="page"></viewPage>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import viewPage from "@/components/view/viewPage";

export default {
  components: {
    viewPage,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["viewProject"]),
    page() {
      let page = this.viewProject.pages && this.viewProject.pages[0];
      return page;
    },
  },
  methods: {
    ...mapMutations(["resetWidgetView"]),
  },
};
</script>

<style lang="scss" scoped>
.view {
}
</style>