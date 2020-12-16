<template>
  <div class="ls-widget-list">
    <sidebar-container v-model="active">
      <sidebar-item-container
        icon="icon-yemian-copy"
        label="物料"
        name="material"
      >
        <widget-model-list></widget-model-list>
      </sidebar-item-container>
      <sidebar-item-container icon="icon-pt" label="控件" name="controls">
        <controls-list></controls-list>
      </sidebar-item-container>
      <sidebar-item-container icon="icon-yemian1" label="页面" name="page">
        <page-list></page-list>
      </sidebar-item-container>
    </sidebar-container>
  </div>
</template>

<script>
import widgetModelList from "@/home/ls-widget-list/widget-model-list";
import controlsList from "@/home/ls-widget-list/controls-list";
import pageList from "@/home/ls-widget-list/page-list";
import sidebarContainer from '@/components/container/sidebar-container'
import sidebarItemContainer from '@/components/container/sidebar-container/sidebar-item-container'

export default {
  name: "ls-widget-list",
  components: {
    widgetModelList,
    controlsList,
    pageList,
    sidebarContainer,
    sidebarItemContainer
  },
  data() {
    return {
      active: "material",
    };
  },
};
</script>

<style lang="scss" scoped>
.ls-widget-list {
}
</style>