<template>
  <div class="ls-loading" v-show="show">
    <div class="spinner">
      <div class="cube1"></div>
      <div class="cube2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ls-loading",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.ls-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff90;

  .spinner {
    display: inline-block !important;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    transform: translate(-50%, -50%);
  }

  .cube1,
  .cube2 {
    background-color: #82aaf1;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
    animation: sk-cubemove 1.8s infinite ease-in-out;
  }

  .cube2 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  @-webkit-keyframes sk-cubemove {
    25% {
      -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
    }

    50% {
      -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
    }

    75% {
      -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
        scale(0.5);
    }

    100% {
      -webkit-transform: rotate(-360deg);
    }
  }

  @keyframes sk-cubemove {
    25% {
      transform: translateX(42px) rotate(-90deg) scale(0.5);
      -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
    }

    50% {
      transform: translateX(42px) translateY(42px) rotate(-179deg);
      -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
    }

    50.1% {
      transform: translateX(42px) translateY(42px) rotate(-180deg);
      -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
    }

    75% {
      transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
      -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
        scale(0.5);
    }

    100% {
      transform: rotate(-360deg);
      -webkit-transform: rotate(-360deg);
    }
  }
}
</style>