<template>
  <div class="test">
    <sidebar-container v-model="active">
      <sidebar-item-container icon="icon-yemian-copy" label="物料" name="material">
        物料
      </sidebar-item-container>
      <sidebar-item-container icon="icon-kongjian" label="控件" name="controls">
        控件
      </sidebar-item-container>
    </sidebar-container>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      active: "material",
    };
  },
};
</script>

<style lang="scss" scoped>
.test {
  height: 100vh;
}
</style>