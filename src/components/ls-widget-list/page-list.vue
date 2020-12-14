<template>
  <div class="page-list">
    <div
      class="page"
      :class="[page.id == widgetPage.id ? 'page-active' : '']"
      v-for="(page, index) in project.pages"
      @click="selectedPage(page.id)"
    >
      <div class="page-name">
        <input class="page-input" type="text" v-model="page.name" />
        <!-- {{ page.name }} -->
      </div>
      <div class="page-operation">
        <i class="iconfont icon-caozuo f16 mr5"></i>
        <i
          v-if="page.id != '000000'"
          class="iconfont icon-lajitong f16"
          @click.stop="deletePage(page.id)"
        ></i>
      </div>
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
    ...mapMutations(["pushPage", "selectedPage", "deletePage"]),
  },
};
</script>

<style lang="scss" scoped>
.page-list {
  height: 100%;

  .page {
    display: flex;
    width: 90%;
    height: 46px;
    line-height: 46px;
    padding: 0 15px;
    margin: 20px auto 0 auto;
    background: #fafafa80;
    border: solid 1px #dddddd;
    border-radius: 5px;
    font-size: 13px;
    cursor: pointer;

    &:hover {
      .page-input {
        color: $theme-color;
      }
    }

    .page-name {
      display: flex;
      align-items: center;
      flex: 1;

      .page-input {
        width: 100px;
        height: 26px;

        &:focus {
          color: #000;
          border: 1px solid $theme-color;
          border-radius: 3px;
        }
      }
    }

    .page-operation {
      flex-basis: 30px;

      i:hover {
        color: $theme-color;
      }
    }
  }

  .page-active {
    .page-input {
      color: $theme-color;
    }
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