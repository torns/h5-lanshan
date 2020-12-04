<template>
  <div v-if="show" ref="item" class="sidebar-item-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sidebar-item-container",
  inject: ["sidebar"],
  mounted() {
    console.log(this.$attrs.name);
  },
  data() {
    return {
      show: false,
    };
  },
  watch: {
    "sidebar.mValue": {
      immediate: true,
      handler(newValue, oldValue) {
        this.show = this.$attrs.name == newValue;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-item-container {
  flex-wrap: wrap;
}
</style>