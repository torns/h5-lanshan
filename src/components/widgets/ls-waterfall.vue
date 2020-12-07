<template>
  <div class="ls-waterfall" ref="widgetRef">
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
          @click="jump(params.jump)"
        >
          <img :src="item.url" alt class="item-img" />
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
    };
  },
  watch: {
    "params.source.id": {
      handler() {
        if (this.params.source.id) {
          this.initSourceData(this.params.source.id);
        }
      },
      immediate: true,
    },
  },
  methods: {
    ...mapMutations(["resetWidgetView"]),
    async initSourceData(id) {
      let res = await remoteGetById({ id });
      this.params.source.data = await getResultData(res.data);
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
  }
}
</style>