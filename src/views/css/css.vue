<template>
  <div>
    <h2>css的测试</h2>
    <h3>一般盒子</h3>
    <div class="box"></div>
    <h3>vw单位的盒子</h3>
    <div class="box-rem"></div>
    <h3>jn-1-px的盒子</h3>
    <div class="box-1px jn-1px-all"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {},
  created () {
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/base.scss';
.box{
  width: 200px;
  height: 200px;
  background-color: blue;
}
.box-rem{
  width: rem(200);
  height: rem(200);
  background-color: red;
  // vw的垂直居中
  margin: rem(100) auto;
}
.box-1px{
  width: rem(200);
  height: rem(200);
  background-color: white;
}
</style>
