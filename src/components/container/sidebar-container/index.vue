<template>
  <div class="sidebar-container">
    <div class="sidebar-meau">
      <div
        class="sidebar-meau-item flex-column flex-center"
        :class="[meau.name == mValue ? 'is-active' : '']"
        v-for="(meau, index) in meaus"
        :key="index"
        @click="mValue = meau.name"
      >
        <i class="f24" :class="'iconfont ' + meau.icon"></i>
        <span class="mt10 f14 lb-1"> {{ meau.label }}</span>
      </div>
      <div
        class="sidebar-line"
        :style="{ transform: `translateY(${activeIndex * 84}px)` }"
      ></div>
    </div>
    <div class="sidebar-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar-container",
  provide() {
    return {
      sidebar: this,
    };
  },
  props: {
    value: {
      type: String,
    },
  },
  mounted() {
    let items = this.$slots.default.filter(
      (vnode) =>
        vnode.tag &&
        vnode.componentOptions &&
        vnode.componentOptions.tag == "sidebar-item-container"
    );
    this.meaus = items.map((item, i) => {
      return {
        i: i,
        label: item.data.attrs.label,
        name: item.data.attrs.name,
        icon: item.data.attrs.icon,
      };
    });
  },
  data() {
    return {
      meaus: [],
      mValue: "",
    };
  },
  computed: {
    activeIndex() {
      let active = this.meaus.filter((meau) => meau.name == this.mValue)[0];
      return active && active.i;
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        this.mValue = newValue;
      },
    },
    mValue: {
      immediate: true,
      handler(newValue, oldValue) {
        this.$emit("input", newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  display: flex;
  width: 370px;
  height: 100%;

  .sidebar-meau {
    box-sizing: border-box;
    position: relative;
    width: 64px;
    height: 100%;
    border-right: solid 2px #f3f3f3;

    .sidebar-meau-item {
      width: 100%;
      height: 84px;
      font-size: 15px;
      color: #a6a6a6;
      cursor: pointer;

      &:hover {
        color: $theme-color !important;
      }
    }

    .is-active {
      background: #fff;
      color: $theme-color !important;

      &:hover {
        color: $theme-color !important;
      }
    }

    .sidebar-line {
      position: absolute;
      top: 0;
      right: -2px;
      height: 84px;
      width: 2px;
      background: $theme-color;
      transition: transform 0.2s ease-out;
    }
  }

  .sidebar-content {
    position: relative;
    flex: 1;
    height: 100%;
    padding: 10px 10px;
    box-shadow: 6px 3px 9px rgba(0, 0, 0, 0.1);
  }
}
</style>