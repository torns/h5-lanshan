<template>
  <div class="waterfall-config-attr">
    <el-dialog title="字段设置" :visible.sync="show" width="30%">
      <el-form :model="form" ref="form" label-width="120px">
        <el-form-item
          label="字段名"
          prop="name"
          :rules="{
            required: true,
            message: '不能为空',
            trigger: 'label',
          }"
        >
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
        <el-form-item
          label="属性"
          prop="attr"
          :rules="{
            required: true,
            message: '不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="form.attr" size="small"></el-input>
        </el-form-item>
        <el-form-item
          label="默认值"
          prop="value"
          :rules="{
            required: true,
            message: '不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="form.value" size="small"></el-input>
        </el-form-item>
        <el-form-item
          label="颜色"
          prop="color"
          :rules="{
            required: true,
            message: '不能为空',
            trigger: 'blur',
          }"
        >
          <el-color-picker v-model="form.color"></el-color-picker>
        </el-form-item>
        <el-form-item
          label="文字大小："
          prop="fontSize"
          :rules="{
            required: true,
            message: '不能为空',
            trigger: 'blur',
          }"
        >
          <el-input-number
            v-model="form.fontSize"
            controls-position="right"
            size="small"
            :min="10"
            :max="24"
          ></el-input-number>
        </el-form-item>
        <el-form-item
          label="最多显示行数"
          prop="rows"
          :rules="{
            required: true,
            message: '不能为空',
            trigger: 'blur',
          }"
        >
          <el-input-number
            v-model="form.rows"
            controls-position="right"
            size="small"
            :min="1"
            :max="4"
          ></el-input-number>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "waterfall-config-attr",
  data() {
    return {
      show: false,
      form: {},
      type: "",
      config: {},
      i: undefined,
    };
  },
  watch: {
    show: {
      handler() {
        if (!this.show) {
        }
      },
    },
  },
  methods: {
    open(type, config, i) {
      this.type = type;
      this.config = config;
      this.i = i;
      if (type == "add") {
        this.form = {
          color: "#000",
          fontSize: 12,
          rows: 1,
        };
      } else {
        this.form = this._.cloneDeep(this.config.info[i]);
      }
      this.show = true;
    },
    submit() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          if (this.type == "add") {
            if (!this.validateAttr()) {
              return;
            }

            this.config.info.push(this.form);
            this.config.list.map(
              (item) => (item[this.form.attr] = this.form.value)
            );
          } else {
            this.config.info.splice(this.i, 1, this.form);
          }
          this.show = false;
        } else {
          return false;
        }
      });
    },
    validateAttr() {
      let attrs = ["name", "url", ...this.config.info.map((item) => item.attr)];
      if (attrs.includes(this.form.attr)) {
        this.$notify({
          title: "此属性已定义",
          message: "此属性已定义，不能重复定义（包括默认name、url属性）",
          type: "warning",
        });
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-form-item {
  margin-bottom: 22px !important;
}

.waterfall-config-attr {
}
</style>