<template>
  <div class="ls-music">
    <aplayer
      :style="{ backgroundColor: params.theme }"
      autoplay
      :music="{
        title: params.title,
        artist: ' ',
        src: url,
        pic: params.pic,
      }"
    />
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
import config from "@/mixin/config";
import { mapMutations } from "vuex";
import { remoteGetById } from "@/api/remote";
import { getResultData } from "@/utils/source";

export default {
  name: "ls-music",
  mixins: [config],
  components: {
    Aplayer,
  },
  data() {
    return {
      url:
        "http://m7.music.126.net/20201229135542/a5742a110ed46a3d2fd768e7c57390c1/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3",
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
    "params.data": {
      handler() {
        if (this.params.dataType == 0) {
          // 设置静态数据返回播放地址
          this.url = this.params.data;
        }
      },
      immediate: true,
    },
  },
  methods: {
    ...mapMutations(["resetWidgetView", "setPoolData"]),
    async initSourceData(id) {
      let res = await remoteGetById({ id });
      this.params.source.data = await getResultData(res.data);
      // 设置远程数据返回播放地址
      this.url = this.params.source.data.url;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .aplayer {
  margin: 0;
  color: #8a8c88;
}

.ls-music {
}
</style>