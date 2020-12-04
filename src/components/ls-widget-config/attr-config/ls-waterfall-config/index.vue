<template>
  <div class="ls-waterfall-config">
    <el-form
      ref="form"
      :model="config"
      label-width="100px"
      label-position="left"
    >
      <el-form-item label="列数：">
        <el-slider v-model="config.column" :min="1" :max="3"></el-slider>
      </el-form-item>
      <el-form-item label="间隔：">
        <el-slider v-model="config.gutter" :min="1" :max="20"></el-slider>
      </el-form-item>
      <el-form-item label="自定义字段">
        <operation-list v-model="config.info" @edit="editOpen" @add="addAttr()">
          <template v-slot="{ item }">
            <div class="flex pt5 pb5 f13 f-bold lb-1">
              <div class="flex-1 flex-center">{{ item.name }}</div>
              <div class="flex-1 flex-center">{{ item.attr }}</div>
            </div>
          </template>
        </operation-list>
        <waterfall-config-attr ref="attr"></waterfall-config-attr>
      </el-form-item>
      <el-form-item label="数据类型">
        <el-radio v-model="config.dataType" :label="0">静态数据</el-radio>
        <el-radio v-model="config.dataType" :label="1">接口数据</el-radio>
      </el-form-item>
      <!-- 静态数据配置 -->
      <template v-if="!config.dataType">
        <el-form-item label="瀑布流列表">
          <operation-list v-model="config.list" @edit="open" @add="add">
            <template v-slot="{ item }">
              <div class="pt5 pb5 f13 f-bold lb-1">
                {{ item.name || "轮播图" }}
              </div>
            </template>
          </operation-list>
        </el-form-item>
      </template>
      <!-- 接口数据配置 -->
      <template v-else>
        <div class="conf-btn" @click="sourceShow = true">配置接口数据</div>
        <source-list
          v-if="sourceShow"
          :show.sync="sourceShow"
          :id="config.source.id"
          @select="select"
        ></source-list>
      </template>
    </el-form>

    <!-- 编译 -->
    <el-dialog width="25%" :visible.sync="show" :close-on-click-modal="false">
      <div slot="title" class="dialog-title">编辑数据源</div>
      <el-form
        :model="cloneData"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="名字" prop="name">
          <el-input
            v-model="cloneData.name"
            size="small"
            style="width: 250px"
          ></el-input>
        </el-form-item>
        <el-form-item label="跳转地址" prop="path">
          <el-input
            v-model="cloneData.path"
            size="small"
            style="width: 250px"
          ></el-input>
        </el-form-item>
        <el-form-item label="图片地址" prop="url">
          <material-upload v-model="cloneData.url"></material-upload>
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
import { getRandomCode } from "@/utils/tools";

export default {
  name: "ls-waterfall-config",
  props: {
    params: {
      type: Object,
    },
  },
  data() {
    return {
      editIndex: 0,
      cloneData: {},
      show: false,
      sourceShow: false,
    };
  },
  computed: {
    config() {
      return this.params;
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
    add() {
      if (this.config.list.length == 20) {
        this.$notify({
          message: "最多只能添加20张图片哦",
          type: "warning",
          offset: 100,
          duration: 1000,
        });
        return;
      }
      this.config.list.push({});
    },
    addAttr() {
      if (this.config.info.length == 5) {
        this.$notify({
          message: "最多只能添加5列信息哦",
          type: "warning",
          offset: 100,
          duration: 1000,
        });
        return;
      }
      this.$refs["attr"].open("add", this.config);
    },
    editOpen(i) {
      this.$refs["attr"].open("edit", this.config, i);
    },
    select(id) {
      this.config.source.id = id;
    },
  },
};
</script>

<style lang="scss" scoped>
.ls-waterfall-config {
}
</style>