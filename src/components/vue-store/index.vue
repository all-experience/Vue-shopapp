<template>
  <div>
    <h1>vue-store</h1>
    <div>{{getVueStore}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'getVueStore'
      // ...
    ])
  },
  created () {
  },
  mounted () {
    console.log('a', this.getVueStore)
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
</style>
