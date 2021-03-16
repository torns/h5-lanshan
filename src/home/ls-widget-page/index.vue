<template>
  <div class="canvas">
    <div class="canvas-screen" ref="screen">
      <div id="pageCanvas" ref="page" class="canvas-page" :style="pageBackground" @drop="dropInPage($event)" @dragover.prevent>
        <!-- 页面插件 -->
        <controls></controls>
        <!-- 页面 -->
        <div class="page-wrapper">
          <grid-layout ref="gridLayout" class="canvas-page-list" :layout.sync="widgetPage.list" :col-num="375" :max-w="1" :row-height="1" :is-draggable="true" :is-resizable="true" :is-mirrored="false"
            :vertical-compact="true" :margin="[0, 0]" :use-css-transforms="true">
            <!-- 物料 -->
            <grid-item class="canvas-page-item" v-for="item in widgetPage.list" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i">
              <!-- 物料模板 -->
              <div class="widget-view" :id="item.i" ref="widgetList" @click="setConfig(item.i)">
                <component :ref="item.id" :is="item.name" :item="item"></component>
              </div>
              <!-- 物料操作栏 -->
              <div class="widget-operation">
                <div class="widget-operation-btns flex col-center">
                  <!-- 属性设置 -->
                  <i class="iconfont icon-caozuo" @click="setConfig(item.i)"></i>
                  <!-- 复制 -->
                  <i class="iconfont icon-copy f18" @click="copyWidget(item)"></i>
                  <!-- 删除 -->
                  <i class="iconfont icon-lajitong"></i>
                </div>
              </div>
            </grid-item>
          </grid-layout>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import { mapGetters, mapMutations } from "vuex";
import controls from "@/components/controls";

export default {
  name: "ls-widget-page",
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    controls,
  },
  mounted() {
    this.setWidgetRef(this.$refs);
  },
  data() {
    return {
      test: {
        background: "#AD3333",
      },
    };
  },
  computed: {
    ...mapGetters([
      "currentWidget",
      "widgetPage",
      "chooseWidget",
      "widgetLocation",
      "pageBackground",
    ]),
  },
  methods: {
    ...mapMutations(["pushWidgetPageList", "setChooseWidget", "setWidgetRef"]),
    // 组件拖入页面
    dropInPage(e) {
      e.preventDefault();
      let top = e.layerY - this.widgetLocation.top;
      let bottom = e.layerY + this.widgetLocation.bottom;
      let list = this.widgetPage.list;
      for (let i in list) {
        if (top < list[i].y && list[i].y < bottom) {
          // 找到要插入的位置，设置 y 为目标 y - 1，确保插入当前位置前
          this.currentWidget.y = list[i].y - 1;
          break;
        }
      }
      this.pushWidgetPageList(this.currentWidget);
    },
    // 设置物料属性
    setConfig(id) {
      let widget = this.widgetPage.list.find((item) => item.i == id);
      widget && this.setChooseWidget(widget);
    },
    // 复制物料
    copyWidget(widget) {
      this.pushWidgetPageList(widget);
    },
  },
};
</script>

<style lang="scss" scoped>
/**样式重置 */

// ::v-deep .vue-grid-item {
//   max-width: 375px !important;
// }

*::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.canvas {
  position: relative;
  flex: 1;
  height: 100%;
  background: #f5f5f5;
  overflow: auto;

  .canvas-screen {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    padding-top: 50px;

    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }

    .canvas-page {
      position: relative;
      width: 375px;
      min-height: 667px;
      margin: 0 auto;
      box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
      background-color: #fff;

      .page-wrapper {
        width: 100%;

        .canvas-page-list {
          width: 100%;
          height: 100%;

          .canvas-page-item {
            position: relative;
            width: 100%;
            height: 100%;
            max-width: 375px;
            overflow: hidden;

            &:hover {
              .widget-operation {
                // display: block;
                opacity: 1;

                .widget-operation-btns {
                  transform: translateX(0);
                }
              }
            }

            .widget-view {
              position: relative;
              width: 100%;
              height: 100%;

              &::after {
                content: "";
                box-sizing: border-box;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: solid 2px transparent;
                cursor: move;
                z-index: 2000;
                pointer-events: none;
              }

              &:hover::after {
                border: solid 2px #3080de;
              }
            }

            .widget-operation {
              // display: none;
              opacity: 0;
              position: absolute;
              top: 2px;
              right: 2px;
              width: 90px;
              height: 33px;
              z-index: 10;

              .widget-operation-btns {
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 100%;
                height: 100%;
                transform: translateX(200px);
                transition: transform 0.3s ease-out;
                border-bottom-left-radius: 10px;
                background: #fff;
                opacity: 0.7;

                i {
                  font-size: 20px;
                  cursor: pointer;

                  &:hover {
                    color: $theme-color;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>