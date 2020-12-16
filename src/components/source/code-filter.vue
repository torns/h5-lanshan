<template>
  <div class="code-filter">
    <el-dialog
      title="数据过滤器"
      width="60%"
      :show="show"
      :visible.sync="visible"
      :append-to-body="true"
      :close-on-click-modal="false"
      @close="$emit('update:show', false)"
      append-to-body
    >
      <div class="flex">
        <div class="flex-1 pr20">
          <div class="dialog-title">过滤器输入数据</div>
          <div class="dialog-screnn">
            <code-view ref="result" :option="option"></code-view>
          </div>
          <div class="dialog-title mt10">过滤器输出数据</div>
          <div class="dialog-screnn">
            <code-view ref="filter" :option="option"></code-view>
          </div>
        </div>
        <div class="flex-1">
          <div class="dialog-title">过滤器代码</div>
          <div class="code-container">
            <div class="code-row">
              <span class="row-fun"> function </span>
              <span class="row-text">{{ `filter ( data ) { ` }}</span>
            </div>
            <codemirror
              ref="myEditor"
              v-model="filterCode"
              @change="changeCode"
              :options="cmOptions"
            ></codemirror>
            <div class="code-row"><span class="row-text">}</span></div>
          </div>
          <div class="dialog-button mt10 mb35" @click="perform">
            <i class="iconfont icon-shuaxin"></i>
            <span>刷新</span>
          </div>
          <div class="dialog-button mt10 mb35" @click="save">
            <i class="iconfont icon-baocun"></i>
            <span>保存</span>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror-lite";
import { filterData, filterTrading } from "@/utils/source";
import codeView from "@/components/source/code-view";

// 主题样式
import "codemirror/theme/ayu-dark.css";

// require htmlmixed mode
require("codemirror/mode/vue/vue.js");
require("codemirror/mode/javascript/javascript.js");

// require hint addon for javacript
require("codemirror/addon/hint/show-hint.js");
require("codemirror/addon/hint/show-hint.css");
require("codemirror/addon/hint/javascript-hint.js");

export default {
  name: "code-filter",
  components: { codemirror, codeView },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    option: {
      type: Object,
    },
  },
  data() {
    return {
      visible: this.show,
      filterCode: this.option.code,
      cmOptions: {
        mode: "text/javascript",
        theme: "ayu-dark",
        tabSize: 2,
        lineNumbers: true,
        lineWrapping: true,
        extraKeys: { "Ctrl-Space": "autocomplete" },
      },
    };
  },
  watch: {
    show() {
      this.visible = this.show;
    },
  },
  computed: {
    editor() {
      return this.$refs.myEditor.editor;
    },
  },
  methods: {
    changeCode() {
      this.editor.focus();
    },
    // 刷新
    async perform() {
      let value = this.editor.doc.getValue();
      await this.$refs["result"].getData();
      await this.$refs["filter"].getFiltersData(value);
    },
    // 保存
    save() {
      this.perform().then(() => {
        let value = this.editor.doc.getValue();
        let result = this.$refs["filter"].resCode;
        console.log(result);

        if (result && result.length > 0) {
          this.$emit("save", value);
          this.visible = false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/black-theme.scss";

.code-filter {
}
</style>