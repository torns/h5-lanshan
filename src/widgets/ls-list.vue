<template>
  <div class="ls-list" ref="widgetRef" v-ls-loading="loading">
    <div
      v-for="item in params.dataType == 1 ? params.source.data : params.list"
      class="list-item"
      :style="{
        marginTop: params.distance + 'px',
        marginBottom: params.distance + 'px',
      }"
      element-loading-spinner="el-icon-loading"
      @click="clickItem(item)"
    >
      <img
        alt
        class="item-img"
        onerror="this.src = 'http://116.62.142.85:8090/baseImg/img-err.jpg'"
        :src="item.url"
        :style="{
          width: params.imgSize + 'px',
          height: params.imgSize + 'px',
          borderRadius: params.imgType == 'default' ? '5px' : '50%',
        }"
      />
      <div class="item-info">
        <!-- 左侧信息 -->
        <div class="info-left" :style="{ width: `${params.proportion}%` }">
          <div
            v-for="(d, dIndex) in params.info"
            v-if="d.location == 'left'"
            :key="dIndex"
            class="item-info-message"
            :class="'ellipsis-' + d.rows"
            :style="{
              color: d.color,
              marginTop: d.space + 'px',
              fontSize: d.fontSize + 'px',
              letterSpacing: d.letterSpacing + 'px',
            }"
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
        <!-- 右侧信息 -->
        <div
          class="info-right"
          :style="{ width: `${100 - params.proportion}%` }"
        >
          <div
            v-for="(d, dIndex) in params.info"
            v-if="d.location == 'right'"
            :key="dIndex"
            class="item-info-message"
            :class="'ellipsis-' + d.rows"
            :style="{
              color: d.color,
              marginTop: d.space + 'px',
              fontSize: d.fontSize + 'px',
              letterSpacing: d.letterSpacing + 'px',
            }"
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
        <!-- <div class="item-info-line"></div> -->
      </div>
    </div>
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
  name: "ls-list",
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
.ls-list {
  overflow: hidden;
  min-height: 100px;

  .list-item {
    display: flex;
    padding: 5px 10px;

    //  隐藏最后一条线
    &:last-child {
      .item-info-line {
        display: none;
      }
    }

    .item-img {
      margin-right: 15px;
      border-radius: 5px;
    }

    .item-info {
      position: relative;
      width: 100%;

      .item-info-line {
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 100%;
        height: 1px;
        background-color: #e4e4e4;
        transform: scaleY(0.5);
      }

      .info-left {
        display: inline-block;
        vertical-align: top;
      }

      .info-right {
        display: inline-block;
        vertical-align: top;
      }
    }
  }
}
</style>