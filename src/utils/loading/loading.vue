<template>
  <div v-show="show">
    <div class="container">
      <div class="loading"></div>
      <div class="text">{{text}}</div>
    </div>
    <div class="mask" v-if="mask"></div>
  </div>
</template>

<script>
export default {
  name: "loading",
  data() {
    return {
      show: false,
      text: '正在加载',
      mask: false
    }
  },
  computed: {},
  created () {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.loading {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 5px #ffffff solid;
  border-right-color: #87CEEB;
  animation: loading 1s linear infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.mask{
  position: fixed;
  background-color: #ccc;
  width: 100%;
  height: 100%;
  opacity: 0.2;
}
</style>
