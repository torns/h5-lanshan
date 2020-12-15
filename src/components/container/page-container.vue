<template>
  <div class="page-container">
    <img
      :src="item.cover"
      alt=""
      ref="img"
      onerror="this.src = 'http://116.62.142.85:8090/baseImg/page-default.jpg'"
    />
    <div class="obscuration"></div>
    <div class="operation flex row-between">
      <!-- 修改页面 -->
      <div class="operation-item" title="修改页面" @click="$emit('changePage')">
        <i class="iconfont icon-xuanzhongmoren"></i>
      </div>
      <!-- 二维码预览 -->
      <div class="operation-item" title="扫码浏览" @click="$emit('viewPage')">
        <el-popover placement="top" width="150" trigger="hover">
          <img class="qr-img" :src="qr" alt="" />
          <i
            class="iconfont icon-saoyisaoerweimasaomasaomiao"
            slot="reference"
          ></i>
        </el-popover>
      </div>
      <!-- 使用模板 -->
      <div
        class="operation-item"
        title="使用页面模板"
        @click="$emit('usePageModel')"
      >
        <i class="iconfont icon-copy"></i>
      </div>
    </div>
  </div>
</template>

<script>
import jrQrcode from "jr-qrcode";
export default {
  name: "page-container",
  props: ["item"],
  data() {
    return {};
  },
  computed: {
    qr() {
      let url = `${process.env.VUE_APP_WEB_URL}viewMain?id=${this.item.id}`;

      let options = {
        padding: 10, // 二维码四边空白（默认为10px）
        width: 130, // 二维码图片宽度（默认为256px）
        height: 130, // 二维码图片高度（默认为256px）
        correctLevel: QRErrorCorrectLevel.H, // 二维码容错level（默认为高）
        reverse: false, // 反色二维码，二维码颜色为上层容器的背景颜色
        background: "#ffffff", // 二维码背景颜色（默认白色）
        foreground: "#000000", // 二维码颜色（默认黑色）
      };
      return jrQrcode.getQrBase64(url, options);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  position: relative;
  max-height: 300px;
  width: 200px;
  overflow-y: auto;
  overflow: hidden;

  &:hover {
    img {
      transform: translateY(-100%) translateY(290px);
    }

    .obscuration {
      opacity: 0.5;
    }

    .operation {
      opacity: 1;
    }
  }

  img {
    transition: 2s;
    transform: translateY(0);
    width: 100%;
  }

  .obscuration {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    background: #fff;
  }

  .operation {
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 50px;
    border-radius: 3px;
    opacity: 0;

    .operation-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: #fff;
      cursor: pointer;

      i {
        font-size: 18px;
      }
    }
  }
}
</style>