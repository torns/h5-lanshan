<template>
  <div class="jump">
    <el-dialog
      title="设置跳转"
      width="30%"
      :visible.sync="show"
      :append-to-body="true"
    >
      <!-- {{ jump }} -->
      <div class="tab"></div>
      <el-radio-group v-model="type">
        <el-radio-button :label="1">站外链接</el-radio-button>
        <el-radio-button :label="2">内部小程序</el-radio-button>
      </el-radio-group>
      <div class="mt20">
        <el-form
          :model="jump"
          ref="jumpForm"
          label-width="95px"
          class="demo-ruleForm"
        >
          <template v-if="type == 1">
            <el-form-item
              label="网页地址"
              prop="webPath"
              :rules="{
                required: true,
                message: '不能为空',
                trigger: 'label',
              }"
            >
              <el-input v-model="jump.webPath" size="small"></el-input>
            </el-form-item>
          </template>
          <template v-if="type == 2">
            <div class="theme lb-2">
              小程序官方不支持外部H5直接跳转小程序，浏览页面需要小程序web-view内置
            </div>
            <el-form-item
              label="小程序路径"
              prop="wechatPath"
              :rules="{
                required: true,
                message: '不能为空',
                trigger: 'label',
              }"
            >
              <el-input v-model="jump.wechatPath" size="small"></el-input>
            </el-form-item>
          </template>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "jump",
  props: ["webPath", "wechatPath"],
  data() {
    return {
      show: false,
      type: undefined,
      jump: {},
    };
  },
  watch: {
    show: {
      immediate: true,
      handler(newVal, oldVal) {
        if (!newVal) {
          this.jump = {};
          this.type = undefined;
        } else {
          this.type = this.webPath ? 1 : this.wechatPath ? 2 : 1;
          this.jump = {
            webPath: this.webPath,
            wechatPath: this.wechatPath,
          };
        }
      },
    },
  },
  methods: {
    open(data) {
      console.log("open");
      this.show = true;
    },
    submit() {
      this.$refs["jumpForm"].validate((valid) => {
        if (valid) {
          if (this.type == 1) {
            this.$emit("update:webPath", this.jump.webPath);
            this.$emit("update:wechatPath", "");
          } else if (this.type == 2) {
            this.$emit("update:webPath", "");
            this.$emit("update:wechatPath", this.jump.wechatPath);
          }
          this.show = false;
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.jump {
}
</style>