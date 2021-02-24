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
      <el-radio-group v-model="jump.type" @change="jump.pathData = ''">
        <el-radio-button :label="0">无</el-radio-button>
        <el-radio-button :label="1">站外链接</el-radio-button>
        <el-radio-button :label="2">内部链接</el-radio-button>
        <!-- <el-radio-button :label="3">内部小程序</el-radio-button> -->
      </el-radio-group>
      <div class="mt20">
        <el-form
          :model="jump"
          ref="jumpForm"
          label-width="95px"
          class="demo-ruleForm"
        >
         <template v-if="jump.type == 0">
           不跳转
         </template>
          <template v-if="jump.type == 1">
            <el-form-item
              label="网页地址"
              prop="pathData"
              :rules="{
                required: true,
                message: '不能为空',
                trigger: 'label',
              }"
            >
              <el-input v-model="jump.pathData" size="small"></el-input>
            </el-form-item>
          </template>
          <template v-if="jump.type == 2">
            <el-select v-model="jump.pathData" placeholder="请选择页面">
              <el-option
                v-for="item in project.pages"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </template>
          <template v-if="jump.type == 3">
            <div class="theme lb-2">
              小程序官方不支持外部H5直接跳转小程序，浏览页面需要小程序web-view内置
            </div>
            <el-form-item
              label="小程序路径"
              prop="pathData"
              :rules="{
                required: true,
                message: '不能为空',
                trigger: 'label',
              }"
            >
              <el-input v-model="jump.pathData" size="small"></el-input>
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
import { mapGetters, mapMutations } from "vuex";
import { jumpData } from "@/config/initData";

export default {
  name: "jump",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: Object,
    },
  },
  data() {
    return {
      show: false,
      jump: {
        type: 1,
      },
    };
  },
  computed: {
    ...mapGetters(["project"]),
  },
  watch: {
    show: {
      immediate: true,
      handler(newVal, oldVal) {
        if (!newVal) {
          this.jump = jumpData;
        } else {
        }
      },
    },
    value: {
      immediate: true,
      handler(newVal, oldVal) {
        this.jump = newVal;
      },
    },
  },
  methods: {
    open(data) {
      this.show = true;
    },
    submit() {
      this.$refs["jumpForm"].validate((valid) => {
        if (valid) {
          this.$emit("change", this.jump);
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