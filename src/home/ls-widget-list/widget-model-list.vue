<template>
  <div class="widget-list">
    <div class="widget-list-title flex-center f14 theme mb20">物料库</div>
    <div
      class="widget-list-item"
      v-for="item in widgetList"
      draggable="true"
      :name="item.name"
      :ref="item.name"
      @dragstart="setWidget"
    >
      <div class="widget-list-item-img mt10">
         <i class="iconfont f24 theme" :class="item.icon"></i>
      </div>
      <div class="widget-list-item-name">{{ item.label }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "widget-model-list",
  data() {
    return {
      list: [1, 2],
    };
  },
  computed: {
    ...mapGetters(["widgetList"]),
  },
  methods: {
    ...mapMutations(["setCurrentWidget", "setwidgetLocation"]),
    setWidget(e) {
      setTimeout(() => {
        let name = e.target.getAttribute("name");
        let targetRef = this.$refs[name][0];
        let left = e.clientX - targetRef.offsetLeft;
        let top = e.clientY - targetRef.offsetTop;
        let bottom = 150 - top;

        this.setCurrentWidget(name);
        this.setwidgetLocation({ left, top, bottom });
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.widget-list {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  height: 100%;
  padding: 10px;
  overflow: auto;

  .widget-list-title {
    width: 255px;
    height: 38px;
    margin: 0 auto;
    border: 1px solid #e5e9f2;
    border-radius: 20px;
  }

  .widget-list-item {
    display: flex;
    flex-direction: column;
    width: 80px;
    height: 80px;
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;
    box-shadow: 1px 0 8px rgba(0, 0, 0, 0.2);
    cursor: move;

    &:hover {
      cursor: move;
      transition: border 0.3s;
    }

    .widget-list-item-img {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      overflow: hidden;

      img {
        -webkit-user-drag: none;
        transition: all 0.5s;
      }
    }

    .widget-list-item-name {
      width: 100%;
      height: 23px;
      text-align: center;
      color: $theme-color;
      font-size: 12px;
      letter-spacing: 1px;
    }
  }
}
</style>