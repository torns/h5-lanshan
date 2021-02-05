<template>
  <div class="page-save">
    <span class="header-text" @click="save">保存</span>
    <el-dialog
      :title="config.title"
      :visible.sync="show"
      width="23%"
      :append-to-body="true"
    >
      <el-form
        :model="project"
        ref="ruleForm"
        label-width="95px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="项目名称："
          prop="name"
          :rules="{
            required: true,
            message: '名称不能为空',
            trigger: 'label',
          }"
        >
          <el-input v-model="project.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="页面封面：">          
           <Imgpond :count="1" v-model="project.cover" />
          <!-- <upload-image-container
            v-loading="loading"
            element-loading-spinner="el-icon-loading"
            :imgUrl="coverBase"
          ></upload-image-container> -->
        </el-form-item>
        <span class="lb-1 f12 theme"
          >canvas 绘图有时候会出现空白现象，如封面空白请重新打开弹窗</span
        >
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button
          type="primary"
          element-loading-spinner="el-icon-loading"
          @click="submit"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import domtoimage from "dom-to-image";
import { mapGetters, mapActions } from "vuex";
import { pageAdd, pageEdit, pageGetList, pageGetById } from "@/api/page";
import { base64ToImg } from "@/api/tool";
import { poolChange } from "@/api/pool";
import uploadImageContainer from "@/components/container/upload-image-container";

export default {
  name: "page-save",
  components: {
    uploadImageContainer,
  },
  data() {
    return {
      show: false,
      loading: false,
      config: {},
      coverBase: "",
    };
  },
  computed: {
    ...mapGetters(["project", "widgetRef", "poolData"]),
  },
  watch: {
    show: {
      immediate: true,
      handler(newValue, oldValue) {
        if (!newValue) {
          // this.page = {};
          this.coverBase = "";
          this.loading = false;
        }
      },
    },
  },
  methods: {
    ...mapActions(["resetProject"]),
    save() {
      let id = this.project.id;
      this.config = {
        title: id ? "修改页面" : "保存页面",
        type: id ? "edit" : "add",
        name: id ? this.project.name : "add",
      };
      this.show = true;
    },
    getList() {
      pageGetList().then((res) => {
        console.log(res);
      });
    },
    submit() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          this.add();
        } else {
          return false;
        }
      });
    },
    async add() {
      let result;
      // let cover = await base64ToImg({ data: this.coverBase });
      // this.$set(this.project, "cover", cover.data);
      let project = this._.cloneDeep(this.project);

      if (this.config.type == "add") {
        result = await pageAdd(project);
      } else {
        result = await pageEdit(project);
      }

      if (result.status == 10000) {
        let page = await pageGetById({ id: result.id });
        this.resetProject(page.data);
        this.$notify({
          title: "保存成功",
          message: "页面已保存成功，赶快用手机扫二维码预览吧",
          type: "success",
        });
        this.show = false;
      }
    },
    createImg() {
      this.loading = true;
      let node = this.widgetRef.page;
      setTimeout(() => {
        domtoimage
          .toPng(node)
          .then((coverBase) => {
            this.coverBase = coverBase;
            this.loading = false;
          })
          .catch(function (error) {
            console.error("oops, something went wrong!", error);
            this.$notify.error({
              title: "封面生成失败",
              message: "网络图片存在跨域，不能直接生成封面，请自行上次封面图片",
            });
            this.loading = false;
          });
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-form-item {
  display: flex;
  flex-direction: column;

  .el-form-item__content {
    margin-left: 0 !important;
  }
}
.page-save {
}
</style>