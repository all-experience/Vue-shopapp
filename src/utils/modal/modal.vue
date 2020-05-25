<template>
  <div v-if="show">
    <div class="mask">123</div>
    <div class="modal">
      <span>我是标题</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  computed: {},
  created () {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.mask{
  position: fixed;
  z-index: 0;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
.modal{
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
</style>
