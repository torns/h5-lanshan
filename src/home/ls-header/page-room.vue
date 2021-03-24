<template>
  <el-dialog title="选择页面" width="45%" :visible.sync="show" :append-to-body="true">
    <el-tabs v-model="activeType" tab-position="left" style="height: 400px;">
      <el-tab-pane :label="tab.label" :name='tab.value' v-for="tab in pageType">
        <div class="page-room">
          <div class="container flex-center mb30" v-for="(item, index) in filterList" :key="index">
            <div class="page flex-column">
              <page-container :item="item" @changePage="changePage(item)" @usePageModel="usePageModel(item)" @viewPage="viewPage(item)"></page-container>
              <div class="page-title f15 theme lb-1 flex-center">
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <span slot="footer" class="dialog-footer">
      <el-button @click="show = false">取 消</el-button>
      <el-button type="primary" @click="show = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { pageGetList } from "@/api/page";
import { mapActions } from "vuex";
import pageContainer from "@/components/container/page-container";
import { pageType } from "@/config/dict";
import { mapGetters } from "vuex";

export default {
  name: "page-room",
  components: {
    pageContainer,
  },
  data() {
    return {
      pageType,
      activeType: "music",
      show: false,
      list: [],
    };
  },
  computed: {
    ...mapGetters(['userInfo']),
    filterList(){
      return this.list.filter(item=>item.type == this.activeType)
    }
  },
  methods: {
    ...mapActions(["resetProject"]),
    open() {
      this.getList()
      this.show = true;
    },
    getList() {
      pageGetList().then((res) => {
        this.show = true;
        this.list = res.list;
      });
    },
    // 修改页面
    changePage(page) {
      this.resetProject(page);
      this.show = false;
    },
    // 使用模板
    usePageModel(page) {
      delete page.id;
      delete page._id;
      delete page.name;
      delete page.userId
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
  padding-top: 20px;
  padding-bottom: 100px;

  .container {
    flex-basis: 33%;

    .page {
      width: 200px;
      box-shadow: 9px 5px 30px rgba(0, 0, 0, 0.2);

      .page-title {
        width: 210px;
        height: 45px;
      }
    }
  }
}
</style>