<template>
  <div class="ls-video">
    <video-player
      class="video"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    ></video-player>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";
import config from "@/mixin/config";
import { mapMutations } from "vuex";
import { remoteGetById } from "@/api/remote";
import { getResultData } from "@/utils/source";

export default {
  name: "ls-video",
  mixins: [config],
  components: {
    videoPlayer,
  },
  data() {
    return {
      // 视频播放
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4", //url地址
          },
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, //当前时间和持续时间的分隔符
          durationDisplay: true, //显示持续时间
          remainingTimeDisplay: false, //是否显示剩余时间功能
          fullscreenToggle: true, //全屏按钮
        },
      },
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
          this.playerOptions.sources[0].src = this.params.data;
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
      this.playerOptions.sources[0].src = this.params.source.data.url;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .vjs-big-play-button {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ls-video {
  .video {
    margin: 0 auto;
  }
}
</style>