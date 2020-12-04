<template>
  <div class="image-container">
    <img
      :class="[imgFixed ? 'img-fixed' : '']"
      :src="imgUrl"
      alt=""
      ref="img"
    />
  </div>
</template>

<script>
export default {
  name: "upload-image-container",
  props: ["imgUrl"],
  data() {
    return {
      imgFixed: true,
    };
  },
  computed: {},
  watch: {
    imgUrl: {
      immediate: true,
      deep: true,
      handler() {
        console.log("触发");
        setTimeout(()=>{
          this.imgFixed = this.$refs["img"].offsetHeight < 150;

        })

        // this.$nextTick(() => {
        //   console.log(this.$refs["img"].offsetHeight);
          
        // });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.image-container {
  max-height: 150px;
  width: 150px;
  overflow-y: auto;
  box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &:hover {
    img {
      transform: translateY(-100%) translateY(150px);
    }
  }

  img {
    transition: 1s;
    transform: translateY(0);
    width: 100%;
  }

  .img-fixed {
    transform: translateY(0) !important;
  }
}
</style>