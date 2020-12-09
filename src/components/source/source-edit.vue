<template>
  <div class="source-edit">
    <el-dialog
      title="API"
      width="80%"
      :show="show"
      :visible.sync="visible"
      :close-on-click-modal="false"
      :append-to-body="true"
      @close="$emit('update:show', false)"
    >
      <div class="flex">
        <div class="flex-1 pr20">
          <div class="dialog-title">API配置</div>
          <el-form :model="form" ref="form" label-width="80px">
            <el-form-item
              label="名称"
              prop="name"
              :rules="{
                required: true,
                message: '不能为空',
                trigger: 'blur',
              }"
            >
              <el-input v-model="form.name" size="small"></el-input>
            </el-form-item>
            <el-form-item
              label="请求方式"
              prop="method"
              :rules="{
                required: true,
                message: '不能为空',
                trigger: 'blur',
              }"
            >
              <el-select
                v-model="form.method"
                placeholder="请选择"
                size="small"
              >
                <el-option label="GET" value="get"> </el-option>
                <el-option label="POST" value="post"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label="URL"
              prop="url"
              :rules="{
                required: true,
                message: '不能为空',
                trigger: 'blur',
              }"
            >
              <el-input
                v-model="form.url"
                size="small"
                type="textarea"
                :rows="2"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="Headers"
              prop="headers"
              :rules="{
                required: true,
                message: '不能为空',
                trigger: 'blur',
              }"
            >
              <el-input
                v-model="form.headers"
                size="small"
                type="textarea"
                :rows="1"
              ></el-input>
            </el-form-item>
            <el-form-item label="参数列表" prop="params">
              <params-list v-model="form.params"></params-list>
            </el-form-item>
          </el-form>
        </div>
        <div class="flex-1">
          <!--  接口返回结果 -->
          <div class="dialog-title">接口返回</div>
          <div class="dialog-info">返回接口全部数据</div>
          <div
            class="dialog-button mt10 mb15"
            @click="$refs['sourceCode'].getData()"
          >
            <i class="iconfont icon-chakan"></i>
            <span>预览数据</span>
          </div>
          <div class="dialog-screnn">
            <code-view ref="sourceCode" :option="form"></code-view>
          </div>

          <!-- 数据过滤器 -->
          <div class="dialog-title mt30">数据过滤器</div>
          <div class="dialog-info">
            如接口数据不符合组件数据结构,可自定义数据过滤方法，处理数据
          </div>
          <div class="dialog-button mt10 mb35" @click="filterVisible = true">
            <i class="iconfont icon-guolv"></i>
            <span>数据过滤</span>
          </div>
          <code-filter
            v-if="filterVisible"
            :show.sync="filterVisible"
            :option="form"
            @save="save"
          ></code-filter>

          <!-- 最终返回结果 -->
          <div class="dialog-title">结果</div>
          <div class="dialog-info">注意：返回结果应满足组件的数据结构</div>
          <div
            class="dialog-button mt10 mb15"
            @click="$refs['resultCode'].getFiltersData(form.code)"
          >
            <i class="iconfont icon-chakan"></i>
            <span>预览数据</span>
          </div>
          <div class="dialog-screnn">
            <code-view ref="resultCode" :option="form"></code-view>
          </div>
          <div class="dialog-button mt35 mb35" @click="submit">
            <i class="iconfont icon-baocun"></i>
            <span>保存</span>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { remoteAdd, remoteEdit } from "@/api/remote";

export default {
  name: "source-edit",
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
      filterVisible: false,
      visible: this.show,
      form: this._.cloneDeep(this.option),
    };
  },
  watch: {
    show() {
      this.visible = this.show;
    },
  },
  methods: {
    save(code) {
      this.form.code = code;
    },
    submit() {
      if (this.option.type == "add") {
        remoteAdd(this.form).then((res) => {
          console.log(res);
          this.$parent.refresh();
          this.visible = false;
        });
      } else {
        remoteEdit(this.form).then((res) => {
          console.log(res);
          this.$parent.refresh();
          this.visible = false;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/black-theme.scss";

.source-edit {
}
</style>