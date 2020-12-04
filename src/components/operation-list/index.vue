<template>
  <div class="operation-list">
    <vuedraggable ghostClass="ghost" v-model="list">
      <transition-group>
        <div v-for="(item, index) in list" :key="index" class="operation-item">
          <div class="operation-btns">
            <i class="el-icon-edit" @click="$emit('edit', index)"></i>
            <i v-if="!hiddenDel" class="el-icon-remove-outline" @click="deleteItem(index)"></i>
          </div>
          <slot :item="item"></slot>
        </div>
      </transition-group>
    </vuedraggable>
    <div v-if="!hiddenAdd" class="operation-add" @click="$emit('add')">
      添加
    </div>
  </div>
</template>

<script>
import vuedraggable from "vuedraggable";

export default {
  name: "operation-list",
  components: { vuedraggable },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    hiddenAdd: {
      type: Boolean,
      default: false,
    },
    hiddenDel: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      list: [],
    };
  },
  watch: {
    value: {
      handler() {
        this.list = this.value;
      },
      deep: true,
      immediate: true,
    },
    list: {
      handler() {
        this.$emit("input", this.list);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    deleteItem(i) {
      // if (this.list.length == 1) {
      //   this.$notify({
      //     message: "已经是最后一条了，不能再删啦",
      //     type: "warning",
      //     offset: 100,
      //     duration: 1000,
      //   });
      //   return;
      // }
      this.list.splice(i, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.ghost {
  position: relative;

  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffcccc !important;
  }
}

.operation-list {
  border: solid 1px #e4e4e4;
  padding: 10px 10px 0 10px;

  .operation-item {
    position: relative;
    width: 100%;
    text-align: right;
    line-height: 14px;
    padding: 8px 0;
    border-bottom: solid 1px #e4e4e4;
    cursor: move;

    &:hover .operation-btns {
      opacity: 1;
    }

    .operation-btns {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      height: 100%;
      opacity: 0;
      background: #fff;
      cursor: pointer;
      transition: 0.3s;

      i {
        font-size: 16px;
        margin-right: 10px;
      }
    }
  }

  .operation-add {
    height: 30px;
    line-height: 30px;
    margin: 10px auto;
    text-align: center;
    color: #fff;
    background: $theme-color;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
}
</style>