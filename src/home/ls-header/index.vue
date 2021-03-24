<template>
  <div class="haeder">
    <!-- h5-lanshan -->
    <div class="haeder-left"></div>
    <div class="header-main flex-center flex-1">
      <span class="header-text" @click="openRoom">页面库</span>
      <page-save></page-save>
      <page-view></page-view>
      <div class="header-text" @click="resetProject()">重置</div>
      <div class="header-text" @click="test()">测试</div>
    </div>
    <div class="header-right"></div>
    <page-room ref="room"></page-room>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import pageRoom from "@/home/ls-header/page-room";
import pageSave from "@/home/ls-header/page-save";
import pageView from "@/home/ls-header/page-view";
import { test } from "@/api/user";

export default {
  name: "ls-header",
  components: { pageRoom, pageSave, pageView },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["widgetPage"]),
  },
  methods: {
    ...mapActions(["resetProject"]),
    openRoom(){
      this.$refs['room'].open()
    },
    test() {
      test().then((res) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.haeder {
  display: flex;
  position: relative;
  z-index: 10;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  height: 56px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .haeder-left {
    flex-basis: 200px;
  }

  .header-main {
    span {
      color: $theme-color;
      margin: 0 10px;
      color: #82aaf1;
      font-size: 15px;
      letter-spacing: 2px;
      cursor: pointer;

      &:hover {
        color: #437fea;
      }
    }
  }

  .header-right {
    flex-basis: 200px;
  }
}
</style>