<template>
  <div>
    <div>
      <h3>I am Vue</h3>
      <ul>
        <!-- 1.template的图片引用 -->
        <li>
          <img src="@/assets/img/loading.gif">
        </li>
        <!-- 2.css中的背景图引用 -->
        <li class="background-img">
        </li>
        <!-- 3.script标签中的图片引用 -->
        <li>
          <img :src="imgUrl">
        </li>
      </ul>
    </div>
    <div><children></children></div>
  </div>
</template>

<script>
import children from '@/components/vue-lazy/vue-lazy-children'

export default {
  components: {
    children
  },
  data () {
    return {
      imgUrl: require('@/assets/img/loading.gif')
    }
  },
  computed: {},
  created () {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.background-img{
  width:100px;
  height: 100px;
  background: url('~@/assets/img/loading.gif') no-repeat;
}
</style>
