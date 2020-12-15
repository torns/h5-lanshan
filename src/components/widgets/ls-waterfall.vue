<template>
  <div class="ls-waterfall" ref="widgetRef" v-loading="loading">
    <material-waterfall
      v-if="show"
      :value="params.dataType == 1 ? params.source.data : params.list"
      :column="params.column"
      :gutter="params.gutter"
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
            onerror="this.src = 'http://pic.soutu123.cn/element_origin_min_pic/16/12/20/b956c5dbba7221df44f281882d5ac80b.jpg'"
            :src="item.url"
          />
          <div v-if="params.info.length > 0" class="item-info">
            <div
              class="item-info-message"
              :class="'ellipsis-' + d.rows"
              v-for="d in params.info"
              :key="item.id"
              :style="{ fontSize: d.fontSize + 'px', color: d.color }"
            >
              {{ item[d.attr] }}
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

export default {
  name: "ls-waterfall",
  mixins: [config],
  data() {
    return {
      show: true,
      loading: false,
    };
  },
  created() {
    if (this.params.source.id) {
      this.params.source.data = [];
      this.initSourceData(this.params.source.id);
    }
  },
  methods: {
    ...mapMutations(["resetWidgetView", "setPoolData"]),
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
          value: data.pool_value,
        });
      }
      this.jump(this.params.jump);
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