<template>
  <div>
    孙子组件
    <button @click="handleClick">点击传值给爷爷</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  inheritAttrs :false,
  computed: {},
  created () {
    console.log('son-$attrs', this.$attrs)
  },
  methods: {
    handleClick () {
      // 改变inheritAttrs数据并触发爷爷组件上的事件
      this.$emit('sonFunc', this.$attrs.inheritAttrs + '-from-son')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
