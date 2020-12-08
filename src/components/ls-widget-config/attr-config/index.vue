<template>
  <div class="attr-config">
    <div class="config-title">
      <span
        class="config-title-span flex-center"
        :class="[page == 0 ? 'config-title-active' : '']"
        @click="page = 0"
        >组件配置</span
      >
      <span
        class="config-title-span flex-center"
        :class="[page == 1 ? 'config-title-active' : '']"
        @click="page = 1"
        >页面配置</span
      >
    </div>
    <!-- 组件配置 -->
    <div v-if="page == 0" class="config-body">
      <component
        v-if="isConfig && chooseWidget"
        :is="configName"
        :params="chooseWidget.params"
      ></component>
      <!-- 未找到组件 -->
      <div v-else class="config-empty flex-column row-center">
        <img src="@/assets/base/empty.jpg" alt="" />
        <span class="config-empty-title">没有选中组件</span>
        <span class="config-empty-info">拖拽组件来配置你的页面吧!</span>
      </div>
      <!-- 按钮列 -->
      <div
        v-if="isConfig && chooseWidget"
        class="config-operation flex row-around"
      >
        <el-popover class="item" trigger="hover" content="视图高度自适应">
          <div
            class="config-operation-btn flex-center"
            style="background: #82aaf1"
            slot="reference"
            @click="resetWidgetView(chooseWidget.i)"
          >
            <i class="iconfont icon-shitu"></i>
          </div>
        </el-popover>
        <el-popover class="item" trigger="hover" content="数据池赋值">
          <div
            class="config-operation-btn flex-center"
            style="background: #82aaf1"
            slot="reference"
            @click="$refs['pool'].open()"
          >
            <i class="iconfont icon-shuju"></i>
          </div>
        </el-popover>
        <el-popover class="item" trigger="hover" content="删除">
          <div
            class="config-operation-btn flex-center"
            style="background: #ee98a2"
            slot="reference"
            @click="deleteWidget(chooseWidget.i)"
          >
            <i class="iconfont icon-delete"></i>
          </div>
        </el-popover>
      </div>
    </div>
    <div v-if="page == 1">
      <page-config></page-config>
    </div>
    <data-pool ref="pool" v-model="chooseWidget.params.pool_property"></data-pool>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "attr-config",
  data() {
    return {
      page: 0,
    };
  },
  computed: {
    ...mapGetters(["chooseWidget"]),
    isConfig() {
      return typeof this.chooseWidget.name == "string";
    },
    configName() {
      return this.chooseWidget.name + "-config";
    },
  },
  watch: {
    chooseWidget: {
      handler(val) {
        this.page = 0;
      },
    },
  },
  methods: {
    ...mapMutations(["deleteWidget", "resetWidgetView"]),
  },
};
</script>

<style lang="scss" scoped>
.attr-config {

  .config-title {
    display: flex;
    height: 40px;
    font-size: 16px;
    margin-bottom: 10px;
    letter-spacing: 4px;

    .config-title-span {
      flex: 1;
      cursor: pointer;
    }

    .config-title-active {
      color: #fff;
      background: $theme-color;
    }
  }

  .config-body {
    padding: 20px 20px 0 20px;
    // margin-bottom: 80px;
    max-height: 800px;
    overflow: auto;

    .config-empty {

      img {
        width: 250px;
        height: 250px;
        margin-top: 150px;
      }

      .config-empty-title {
        margin-top: 15px;
        font-size: 24px;
        letter-spacing: 1px;
        color: $theme-color;
      }

      .config-empty-info {
        margin-top: 15px;
        font-size: 14px;
        letter-spacing: 1px;
        color: #ababab;
      }
    }

    .config-operation {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 1001;
      width: 100%;
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
      background: #fff;

      .config-operation-btn {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        box-shadow: 0 6px 10px rgba(0, 10, 20, 0.2);
        cursor: pointer;

        i {
          color: #fff;
        }
      }
    }
  }
}
</style>