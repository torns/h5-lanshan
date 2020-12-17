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
      return this.viewProject.pages[1];
    },
  },
};
</script>

<style lang="scss" scoped>
.view {
}
</style>