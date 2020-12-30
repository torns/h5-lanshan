<template>
  <div class="ls-music-config">
    <el-form
      ref="form"
      :model="config"
      label-width="120px"
      label-position="left"
    >
      <el-form-item label="名称">
        <el-input v-model="config.title" size="small"></el-input>
      </el-form-item>
      <el-form-item label="主题色">
        <el-color-picker v-model="config.theme"></el-color-picker>
      </el-form-item>
      <el-form-item proos="pic" label="图片：">
        <Imgpond :count="1" v-model="config.pic" />
      </el-form-item>
      <el-form-item label="数据类型">
        <el-radio v-model="config.dataType" :label="0">静态数据</el-radio>
        <el-radio v-model="config.dataType" :label="1">接口数据</el-radio>
      </el-form-item>
      <!-- 静态数据配置 -->
      <template v-if="config.dataType == 0">
        <el-form-item proos="data" label="音频链接：">
          <el-input v-model="config.data" size="small"></el-input>
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
  </div>
</template>

<script>
import sourceList from "@/components/source/source-list";
export default {
  name: "ls-music-config",
  components: { sourceList },
  props: {
    params: {
      type: Object,
    },
  },
  data() {
    return {
      sourceShow: false,
    };
  },
  computed: {
    config() {
      return this.params;
    },
  },
  methods: {
    select(id) {
      this.config.source.id = id;
    },
  },
};
</script>

<style lang="scss" scoped>
.ls-music-config {
}
</style>