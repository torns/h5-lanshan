<template>
  <div class="ls-notice-bar-config">
    <el-form
      ref="form"
      :model="config"
      label-width="90px"
      label-position="left"
    >
      <el-form-item props="color" label="通知样式：">
        <div class="flex">
          <div
            class="w50 h30 f24 pointer"
            v-for="(icon, i) in icons"
            @click="config.icon = icon"
          >
            <van-icon :name="icon" />
          </div>
        </div>
      </el-form-item>
      <el-form-item props="color" label="字体颜色：">
        <el-color-picker v-model="config.color"></el-color-picker>
      </el-form-item>
      <el-form-item props="color" label="通知列表">
        <operation-list v-model="config.list" @edit="open" @add="add">
          <template v-slot="{ item }">
            <div class="pt5 pb5 f13 f-bold lb-1">
              {{ item.text | fontLimit }}
            </div>
          </template>
        </operation-list>
      </el-form-item>
      <!-- 背景样式 -->
      <background-form v-model="config.backgroundStyle"></background-form>
    </el-form>

    <!-- 编译 -->
    <el-dialog width="25%" :visible.sync="show" :append-to-body="true">
      <div slot="title" class="dialog-title">编辑数据源</div>
      <!-- {{ cloneData }} -->
      <el-form
        :model="cloneData"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="内容" prop="text">
          <el-input
            v-model="cloneData.text"
            size="small"
            style="width: 250px"
            maxlength="20"
            show-word-limit
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
import operationList from "@/components/operation-list";
import backgroundForm from "@/components/form/background-form";

export default {
  name: "ls-notice-bar-config",
  components: {
    operationList,
    backgroundForm
  },
  props: {
    params: {
      type: Object,
    },
  },
  data() {
    return {
      cloneData: {},
      show: false,
      icons: ["fire-o", "point-gift-o", "volume-o", "diamond-o"],
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
      if (this.config.list.length == 5) {
        this.$notify({
          message: "最多只能添加5条哦",
          type: "warning",
          offset: 100,
          duration: 1000,
        });
        return;
      }
      this.config.list.push({
        text: "请写入通知内容",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.ls-notice-bar-config {
}
</style>