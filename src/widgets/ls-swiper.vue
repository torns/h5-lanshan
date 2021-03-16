<template>
  <div class="ls-swiper">
    <material-swiper
      v-if="show"
      ref="customSwiper"
      imgKey="url"
      :list="params.dataType == 1 ? params.source.data : params.list"
      :autoplay="params.autoplay"
      :imgRadius="params.imgRadius"
      :loop="params.loop"
      :crown="params.crown"
      :center="params.center"
      :pagination="params.pagination"
      :imgWidth="params.imgWidth"
      :imgHeight="params.imgHeight"
      :spaceBetween="params.spaceBetween"
      @clickItem="clickItem"
    />
  </div>
</template>

<script>
import config from "@/mixin/config";
import { mapMutations } from "vuex";
import { getResultData } from "@/utils/source";
import materialSwiper from "@/components/material/material-swiper";

export default {
  name: "ls-swiper",
  mixins: [config],
  components: {
    materialSwiper,
  },
  data() {
    return {
      show: true,
    };
  },
  watch: {
    params: {
      handler(val) {
        if (!this.view) {
          this.show = false;
          setTimeout(() => {
            this.show = true;
          }, 0);
        }
      },
      deep: true,
    },
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
    ...mapMutations(["resetWidgetView", "setPoolData"]),
    async initSourceData(id) {
      this.params.source.data = await getResultData(id);
      console.log(this.params.source);
    },
    clickItem(data) {
      // 是否绑定数据池数据
      if (this.params.pool_property) {
        this.setPoolData({
          id: this.params.pool_property,
          value: data.id,
        });
      }
      // 跳转
      if (this.params.dataType == 0) {
        this.jump(data.jump);
      } else {
        this.jump(this.params.jump);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ls-swiper {
  width: 100%;
}
</style>