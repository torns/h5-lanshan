<template>
  <div class="test">
    <aplayer
      autoplay
      :music="{
        title: 'secret base~君がくれたもの~',
        artist: 'Silent Siren',
        src: 'http://m8.music.126.net/20201229102910/3e121146da30875345fd80ea8954e752/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3',
        pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg',
      }"
    />
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
export default {
  name: "test",
  components: {
    Aplayer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.test {
}
</style>