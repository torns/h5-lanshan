<template>
  <div class="controls-list">
    <div class="controls-item">
      <div>
        <i class="iconfont icon-control-open theme mr7 f14"></i>
        <!-- <i class="iconfont icon-control-close pointer grey mr7 f14"></i> -->
        <span class="f14 lb-2">{{ cuur.topBar.label }}</span>
      </div>
      <div>
        <i class="iconfont icon-caozuo pointer" @click="setChooseWidget(cuur.topBar)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "controls-list",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["project"]),
    cuur() {
      return this.project.controls;
    },
  },
  methods: {
    ...mapMutations(['setChooseWidget'])
  }
};
</script>

<style lang="scss" scoped>
.controls-list {
  .controls-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 280px;
    height: 45px;
    padding: 0 10px;
    margin: 12px auto;
    border: 1px solid #e8eae9;
    border-radius: 4px;
    background-color: #fafafa;
  }
}
</style>