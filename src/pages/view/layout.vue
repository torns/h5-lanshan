<template>
  <div class="viewLayout">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { pageGetById } from "@/api/page";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "viewLayout",
  data() {
    return {
      loading: false,
    };
  },
  created() {
    this.init();
  },
  computed: {
    ...mapGetters(["viewProject", "viewPage"]),
  },
  methods: {
    ...mapActions(["initView"]),
    async init() {
      this.loading = true;
      let id = this.$route.query.id;
      let res = await pageGetById({ id });
      if (res.status == "10000") {
        this.initView(res.data);
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.viewLayout {
}
</style>