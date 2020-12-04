<template>
  <div class="material-tabs">
    <ul class="tabs">
      <li
        class="tab"
        v-for="(item, index) in list"
        :key="index"
        @click="active = index"
      >
        {{ item }}
      </li>
      <div
        class="tab-line"
        :style="{
          width: 100 / list.length + '%',
          transform: `translate(${active * 100}%, 0px)`,
        }"
      ></div>
    </ul>
    <slot :active='active'></slot>
  </div>
</template>

<script>
export default {
  name: "material-tabs",
  data() {
    return {
      list: ["类别一", "类别二", "类别三"],
      active: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.material-tabs {
  .tabs {
    position: relative;
    display: flex;
    height: 50px;

    .tab {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-bottom: solid 1px #ccc;
    }

    .tab-line {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      background: $theme-color;
      transition: transform 0.3s ease-out;
    }
  }
}
</style>