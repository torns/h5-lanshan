<template>
  <div class="form-container">
    <h3 class="title">{{ title || "标题" }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "form-container",
  props: ["title"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  .title {
    color: $theme-color;
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
  }
}
</style>