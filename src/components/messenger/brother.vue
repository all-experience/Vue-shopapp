<template>
  <div>
    <h1>我是弟弟</h1>
    <div>点击按钮：传数据给哥哥<button @click="handleClick">按钮</button></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {},
  created () {},
  methods: {
    handleClick () {
      console.log('this.',  this.$eventBus)
      this.$eventBus.$emit('brotherFun','我是弟弟的值')
      this.$router.push({name: 'vue-messenger'})
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
