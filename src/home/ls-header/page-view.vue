<template>
  <div class="page-view">
    <el-popover
      placement="top-start"
      width="230"
      trigger="click"
      @show="createQr"
    >
      <img v-if="imgUrl" class="qr-img" :src="imgUrl" alt="" />
      <div v-else class="none-page flex-center">请先保存项目才能预览</div>
      <span class="header-text" slot="reference">预览</span>
    </el-popover>
  </div>
</template>

<script>
import jrQrcode from "jr-qrcode";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "page-view",
  data() {
    return {
      imgUrl: "",
    };
  },
  computed: {
    ...mapGetters(["project"]),
  },
  methods: {
    createQr() {
      let id = this.project.id;
      if (!this.project.view) {
        this.imgUrl = "";
        return;
      }
      let url = `${process.env.VUE_APP_WEB_URL}view?id=${id}`;
      console.log(url);

      let options = {
        padding: 10, // 二维码四边空白（默认为10px）
        width: 200, // 二维码图片宽度（默认为256px）
        height: 200, // 二维码图片高度（默认为256px）
        correctLevel: QRErrorCorrectLevel.H, // 二维码容错level（默认为高）
        reverse: false, // 反色二维码，二维码颜色为上层容器的背景颜色
        background: "#ffffff", // 二维码背景颜色（默认白色）
        foreground: "#000000", // 二维码颜色（默认黑色）
      };
      this.imgUrl = jrQrcode.getQrBase64(url, options);
    },
  },
};
</script>

<style lang="scss" scoped>
.none-page {
  width: 200px;
  height: 200px;
  color: #82aaf1;
  border-radius: 5px;
  box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.1);
}

.qr-img {
  box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.1);
}
</style>