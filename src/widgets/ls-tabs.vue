<template>
  <div class="ls-tabs">
    <material-tabs>
      <template v-slot="{ active }">
          {{active}}
      </template>
    </material-tabs>
  </div>
</template>
<script>
import config from "@/mixin/config";

export default {
  name: "ls-tabs",
  mixins: [config],
  data() {
    return {
      active: 2,
    };
  },
};
</script>

<style lang="scss" scoped>
.ls-tabs {
}
</style>