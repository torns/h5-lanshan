<template>
  <div class="ls-sudoku-config">
    <el-form
      ref="form"
      :model="config"
      label-width="100px"
      label-position="left"
    >
      <el-form-item proos="width" label="宽度：">
        <el-slider v-model="config.width" :min="50" :max="100"></el-slider>
      </el-form-item>
      <el-form-item proos="gutter" label="间隔">
        <el-slider v-model="config.gutter" :min="0" :max="20"></el-slider>
      </el-form-item>
      <el-form-item proos="radius" label="原角：">
        <el-slider v-model="config.radius" :min="0" :max="10"></el-slider>
      </el-form-item>
      <el-form-item proos="padding" label="内部间距：">
        <el-slider v-model="config.padding" :min="0" :max="10"></el-slider>
      </el-form-item>
      <el-form-item proos="radius" label="阴影：">
        <el-switch v-model="config.shadow"> </el-switch>
      </el-form-item>
      <el-form-item proos="layouts" label="布局：">
        <sudoku-config-layout v-model="config.layouts"></sudoku-config-layout>
      </el-form-item>
      <!-- 数据源 -->
      <el-form-item proos="radius" label="数据源：">
        <operation-list
          v-model="config.list"
          :hiddenAdd="true"
          :hiddenDel="true"
          @edit="open"
        >
          <template v-slot="{ item }">
            <div class="pt5 pb5 f13 f-bold lb-1">
              {{ item.title || "数据" }}
            </div>
          </template>
        </operation-list>
      </el-form-item>
      <!-- 字体样式 -->
      <font-form v-model="config.fontStyle"></font-form>
      <!-- 背景样式 -->
      <background-form v-model="config.backgroundStyle"></background-form>
    </el-form>

    <!-- 编译 -->
    <el-dialog
      width="25%"
      :visible.sync="show"
      :close-on-click-modal="false"
      :append-to-body="true"
    >
      <div slot="title" class="dialog-title">编辑数据源</div>
      <el-form
        :model="cloneData"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="标题" prop="title">
          <el-input
            v-model="cloneData.title"
            size="small"
            style="width: 250px"
          ></el-input>
        </el-form-item>
        <el-form-item label="跳转" prop="jump">
          <i
            class="iconfont icon-tiaozhuan f20 pointer"
            @click="$refs['jump'].open()"
          ></i>
        </el-form-item>
        <jump ref="jump" v-model="cloneData.jump"></jump>
        <el-form-item label="图标" prop="url">
          <material-upload v-model="cloneData.url"></material-upload>
        </el-form-item>
        <el-form-item label="背景图" prop="background">
          <material-upload v-model="cloneData.background"></material-upload>
        </el-form-item>

        <el-form-item
          v-for="(d, i) in config.info"
          :key="i"
          :label="d.name"
          :prop="d.attr"
        >
          <el-input
            v-model="cloneData[d.attr]"
            size="small"
            style="width: 250px"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import jump from "@/components/jump";
import fontForm from "@/components/form/font-form";
import operationList from "@/components/operation-list";
import materialUpload from "@/components/material/material-upload";
import backgroundForm from "@/components/form/background-form";

export default {
  name: "ls-sudoku-config",
  components: {
    jump,
    fontForm,
    operationList,
    materialUpload,
    backgroundForm,
  },
  props: {
    params: {
      type: Object,
      default: () => ({
        type: 0,
        pathData: "",
      }),
    },
  },
  data() {
    return {
      editIndex: 0,
      cloneData: {},
      show: false,
    };
  },
  computed: {
    config() {
      return this.params;
    },
  },
  watch: {
    "config.layouts": {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        let curtLen = this.params.list.length;
        let targetLen = this.params.layouts.reduce((pre, cur) => {
          return pre + cur;
        });

        // 新增行
        if (curtLen < targetLen) {
          let poor = targetLen - curtLen;
          this.$set(
            this.params,
            "list",
            this.params.list.concat(
              new Array(poor).fill({
                title: "菜单",
                url: "https://s3.ax1x.com/2020/11/19/DuQAIg.png",
              })
            )
          );
          // 删除行
        } else if (curtLen > targetLen) {
          let poor = curtLen - targetLen;
          this.params.list.splice(targetLen, poor);
        }
      },
    },
  },
  methods: {
    open(i) {
      this.editIndex = i;
      this.cloneData = this._.cloneDeep(this.config.list[i]);
      this.show = true;
    },
    submit() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          this.$set(this.config.list, this.editIndex, this.cloneData);
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
.ls-sudoku-config {
}
</style>