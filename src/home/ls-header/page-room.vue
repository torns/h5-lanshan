<template>
  <div>
    <span class="header-text" @click="getList">页面库</span>
    <el-dialog
      title="选择页面"
      width="40%"
      :visible.sync="show"
      :append-to-body="true"
    >
      <div class="page-room">
        <div
          class="container felx-center mb15"
          v-for="(item, index) in list"
          :key="index"
        >
          <div class="page flex-column">
            <page-container
              :item="item"
              @changePage="changePage(item)"
              @usePageModel="usePageModel(item)"
              @viewPage="viewPage(item)"
            ></page-container>
            <div class="page-title f15 theme lb-1 flex-center">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="show = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { pageAdd, pageEdit, pageGetList } from "@/api/page";
import { mapGetters, mapActions } from "vuex";
import pageContainer from "@/components/container/page-container";

export default {
  name: "page-room",
  components: {
    pageContainer,
  },
  data() {
    return {
      show: false,
      list: [],
    };
  },
  methods: {
    ...mapActions(["resetProject"]),
    getList() {
      pageGetList().then((res) => {
        this.show = true;
        console.log(res);
        this.list = res.list;
      });
    },
    changePage(page) {
      this.resetProject(page);
      this.show = false;
    },
    usePageModel(page) {
      delete page.id;
      delete page.name;
      this.resetProject(page);
      this.show = false;
    },
    viewPage(page) {
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.page-room {
  display: flex;
  flex-wrap: wrap;
  max-height: 500px;
  overflow: auto;

  .container {
    flex-basis: 33%;

    .page {
      .page-title {
        width: 210px;
        height: 45px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>