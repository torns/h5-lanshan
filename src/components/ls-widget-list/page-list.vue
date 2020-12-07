<template>
  <div class="page-list">
    <div
      class="page"
      :class="[page.id == widgetPage.id ? 'page-active' : '']"
      v-for="(page, index) in project.pages"
      @click="selectedPage(page.id)"
    >
      <div class="page-name">
        {{ page.name }}
      </div>
      <!-- <div class="page-operation">x</div> -->
    </div>
    <div class="page-add flex-center">
      <div class="operation-btn" @click="pushPage">新增页面</div>
      <!-- <el-button type="primary">新增页面</el-button> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "page-list",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["project", "widgetPage"]),
  },
  methods: {
    ...mapMutations(["pushPage", "selectedPage"]),
  },
};
</script>

<style lang="scss" scoped>
.page-list {
  height: 100%;
  .page {
    display: flex;
    width: 90%;
    height: 35px;
    line-height: 35px;
    padding: 0 15px;
    margin: 20px auto 0 auto;
    border: solid 1px #dddddd;
    border-radius: 5px;
    font-size: 13px;
    letter-spacing: 2px;
    cursor: pointer;

    &:hover {
      border: solid 1px $theme-color;
    }

    .page-name {
      flex: 1;
    }

    .page-operation {
      flex-basis: 30px;
    }
  }

  .page-active {
    border: solid 1px $theme-color;
  }

  .page-add {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
  }
}
</style>