<template>
  <div class="view" :style="backgroundFun(page.config)">
    <viewPage v-if="page" :page="page"></viewPage>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import viewPage from "@/components/view/viewPage";
import { pageBackgroundChannel } from "@/utils/styleChannel";

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
      return this.viewProject.pages[5];
    },
  },
  methods: {
    backgroundFun(config) {
      return pageBackgroundChannel(config);
    },
  },
};
</script>

<style lang="scss" scoped>
.view {
}
</style>