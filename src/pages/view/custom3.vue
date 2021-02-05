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
    ...mapGetters(["project"]),
    page() {
      return this.project.pages[3];
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