<template>
  <div class="source-list">
    <el-dialog
      title="组件API列表"
      width="35%"
      :show="show"
      :visible.sync="visible"
      :append-to-body="true"
      @close="$emit('update:show', false)"
    >
      <div>
        <div class="dialog-button mb10" @click="add">
          <i class="iconfont icon-xinzeng"></i>
          <span>新增</span>
        </div>
        <div class="flex-column col-center">
          <ul class="dialog-table">
            <li
              class="dialog-table-row"
              :class="[item.id == activeId ? 'row-checked' : '']"
              v-for="(item, index) in list"
              :key="index"
              @click="activeId = item.id"
            >
              <div class="row-title">{{ item.name }}</div>
              <div class="row-tags">
                <el-tag type="info" effect="dark" size="mini">瀑布流</el-tag>
              </div>
              <div class="row-op">
                <i class="el-icon-edit" @click="edit(item.id)"></i>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex flex-center mt20">
          <div class="dialog-button" @click="select">
            <i class="iconfont icon-xuanzhong"></i>
            <span>选中</span>
          </div>
        </div>
      </div>
    </el-dialog>
    <source-edit
      v-if="editShow"
      :show.sync="editShow"
      :option="option"
    ></source-edit>
  </div>
</template>

<script>
import { remoteGetList, remoteGetById } from "@/api/remote";

export default {
  name: "source-list",
  data() {
    return {
      list: [],
      option: {},
      visible: this.show,
      editShow: false,
      activeId: this.id,
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: undefined,
    },
  },
  created() {
    this.refresh();
  },
  watch: {
    show() {
      this.visible = this.show;
    },
  },
  methods: {
    refresh() {
      remoteGetList().then((res) => {
        this.list = res.list;
      });
    },
    edit(id) {
      remoteGetById({ id }).then((res) => {
        this.option = res.data;
        this.option.type = "edit";
        console.log(this.option);

        this.editShow = true;
      });
    },
    add() {
      this.option = { type: "add", method: "get", code: "return data" };
      this.editShow = true;
    },
    select() {
      if (this.activeId) {
        this.$emit("select", this.activeId);
        this.visible = false;
      } else {
        this.$notify({
          title: "请选择数据源",
          message: "没用选中数据源",
          type: "warning",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/black-theme.scss";

.source-list {
}
</style>