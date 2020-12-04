<template>
  <div class="view">
    <!-- {{ viewData }} -->
    <grid-layout
      class="view-page-list"
      :layout.sync="viewData.list"
      :style=""
      :col-num="375"
      :row-height="1"
      :is-draggable="false"
      :is-mirrored="false"
      :is-resizable="false"
      :margin="[0, 0]"
    >
      <grid-item
        class="view-page-item"
        v-for="item in viewData.list"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >
        <component
          :is="item.name"
          :item="item"
          :view="true"
          :contraction="contraction"
        ></component>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import { pageGetById } from "@/api/page";
import VueGridLayout from "vue-grid-layout";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  data() {
    return {
      viewData: {
        list: [],
      },
      contraction: 1,
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      let list = [];
      let id = this.$route.query.id;

      let res = await pageGetById({ id });

      if (res.status == "10000") {
        this.viewData = res.list;
        this.adapter();
      }
    },
    // 适配
    adapter(list) {
      if (document.body.clientWidth <= 540) {
        this.contraction = document.body.clientWidth / 375;

        this.viewData.list.map((item) => {
          item.h = item.h * this.contraction;
          item.y = item.y * this.contraction;
          return item;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.view {
  // background: #ccc;

  .view-page-list {
    width: 100%;
    height: 100%;

    .view-page-item {
      overflow: hidden;
    }
  }
}
</style>