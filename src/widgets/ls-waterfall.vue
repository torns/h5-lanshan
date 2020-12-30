<template>
  <div class="ls-waterfall" ref="widgetRef" v-ls-loading="loading">
    <material-waterfall
      v-if="show"
      :value="params.dataType == 1 ? params.source.data : params.list"
      :column="params.column"
      :gutter="params.gutter"
      @end="end"
    >
      <template v-slot="{ item }">
        <div
          class="waterfall-item"
          :class="[params.info.length > 0 ? 'waterfall-item-active' : '']"
          @click="clickItem(item)"
          element-loading-spinner="el-icon-loading"
        >
          <img
            alt
            class="item-img"
            onerror="this.src = 'http://116.62.142.85:8090/baseImg/img-err.jpg'"
            :src="item.url"
          />
          <div v-if="params.info.length > 0" class="item-info">
            <div
              class="item-info-message"
              :class="'ellipsis-' + d.rows"
              v-for="(d,dIndex) in params.info"
              :key="dIndex"
              :style="{ fontSize: d.fontSize + 'px', color: d.color }"
            >
              <i
                v-if="d.icon"
                class="iconfont mr1"
                :class="d.icon"
                :style="{ fontSize: d.fontSize + 'px' }"
              ></i>
              <span>{{ item[d.attr] }}</span>
            </div>
          </div>
        </div>
      </template>
    </material-waterfall>
  </div>
</template>

<script>
import config from "@/mixin/config";
import { mapMutations } from "vuex";
import { remoteGetById } from "@/api/remote";
import { getResultData } from "@/utils/source";
import materialWaterfall from "@/components/material/material-waterfall";
import { iconList } from "@/config/initData";

export default {
  name: "ls-waterfall",
  mixins: [config],
  components: {
    materialWaterfall,
  },
  data() {
    return {
      show: true,
      loading: false,
      iconList: iconList,
    };
  },
  created() {
    if (this.params.source.id) {
      this.params.source.data = [];
      this.initSourceData(this.params.source.id);
    }
  },
  methods: {
    ...mapMutations(["resetWidgetView", "setPoolData", "resetView"]),
    async initSourceData(id) {
      this.loading = true;
      let res = await remoteGetById({ id });

      this.params.source.data = await getResultData(res.data);
      this.loading = false;
    },
    clickItem(data) {
      // 是否绑定数据池数据
      if (this.params.pool_property) {
        this.setPoolData({
          id: this.params.pool_property,
          value: data.id,
        });
      }
      this.jump(this.params.jump);
    },
    end() {
      // 预览模式自适应瀑布流高度（瀑布流可以调用异步数据，高度不定）
      if (this.view) {
        let height = this.$refs["widgetRef"].offsetHeight;
        this.item.h = height;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ls-waterfall {
  overflow: hidden;
  min-height: 100px;

  .waterfall-item-active {
    border-radius: 6px;
    overflow: hidden;
  }

  .waterfall-item {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .item-info {
      padding: 10px;
      width: 100%;

      .item-info-message {
        margin-bottom: 6px;
      }
    }
  }

  .item-img {
    width: 100%;
    min-height: 50px;
  }
}
</style>