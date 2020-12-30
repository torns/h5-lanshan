<template>
  <div class="material-upload">
    <el-upload
      class="avatar-uploader"
      :action="action"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <upload-image-container
        v-if="imageUrl"
        :imgUrl="imageUrl"
      ></upload-image-container>
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    {{ imgTransform }}
  </div>
</template>

<script>
import uploadImageContainer from "@/components/container/upload-image-container";

export default {
  name: "material-upload",
  components: {
    uploadImageContainer,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  model: {
    prop: "value",
    event: "change",
  },
  data() {
    return {
      action: process.env.VUE_APP_BASE_URL + "upload",
      imageUrl: "",
      imgStyle: {},
    };
  },
  computed: {
    imgTransform() {
      console.log(this.$refs);
      return this.$refs["img"];
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        this.imageUrl = newValue;
      },
    },
    imageUrl: {
      immediate: true,
      handler(newValue, oldValue) {
        this.$emit("change", newValue);
      },
    },
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log(file.raw);
      
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === "image/png/jpg";
      const isLt1M = file.size / 1024 / 1024 < 1;

      // if (!isJPG) {
      //   this.$message.error("上传图片只能是 PNG 格式!");
      // }
      if (!isLt1M) {
        this.$message.error("上传图片大小不能超过 1MB!");
      }
      return isLt1M;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .avatar-uploader .el-upload {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}
</style>