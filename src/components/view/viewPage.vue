<template>
  <div class="viewPage">
    <ls-top-bar-control v-if="project.controls" :params="project.controls.topBar.params" :text="page.name" :back="true"></ls-top-bar-control>
    <grid-layout class="view-page-list" :layout.sync="cPage.list" :style="" :col-num="375" :row-height="1" :is-draggable="false" :is-mirrored="false" :is-resizable="false" :margin="[0, 0]">
      <grid-item class="view-page-item" v-for="item in cPage.list" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i">
        <component :is="item.name" :item="item" :view="true" :than="than"></component>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import { mapGetters } from "vuex";
import { adapter } from "@/utils/view.js";
import lsTopBarControl from "@/components/controls/ls-top-bar-control";

export default {
  name: "viewPage",
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    lsTopBarControl,
  },
  props: {
    page: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(["project"]),
  },
  created() {
    this.cPage = this._.cloneDeep(this.page);
    this.than = adapter(this.cPage.list);
  },
  data() {
    return {
      cPage: {},
      than: 1,
    };
  },
};
</script>


<style lang="scss" scoped>
.viewPage {
  // background: #ccc;
  width: 100%;

  .view-page-list {
    width: 100%;
    height: 100%;

    .view-page-item {
      overflow: hidden;
    }
  }
}
</style>>