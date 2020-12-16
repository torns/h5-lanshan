<template>
  <div class="test">
    <img
      alt
      class="item-img"
      src="http://116.62.142.85:8090/flow-4.jpg"
      onerror="this.src = 'https://st-gdx.dancf.com/gaodingx/0/uxms/design/20200408-165620-bd6c.png'"
    />
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