<template>
  <div>
    <div>
      <h1>子组件内容</h1>
    </div>
    <div v-if="show === 1">{{show}}.子组件内容:{{msg}} </div>
    <div v-if="show === 2 || show === 3">{{show}}.点击传值给父组件<button @click="handleClick">按钮</button></div>
    <div v-if="show === 5">
      <input
      ref="input"
      :value="value"
      @input="$emit('inputEvent', $event.target.value)"
      >
    </div>
    <div v-if="show === 4">
      <h1>孙子组件内容</h1>
      <grandchildren v-on="$listeners" v-bind="$attrs"></grandchildren>
    </div>
  </div>
</template>

<script>
import grandchildren from './grandchildren'
export default {
  components: {
    grandchildren
  },
  props: {
    msg: {
      type: String
    },
    show: {
      type: Number
    },
    value: {
      type: String
    }
  },
  model: {
    prop: 'value',
    event: 'inputEvent'
  },
  inheritAttrs :false, // 是否显示非prop识别的属性
  data () {
    return {
      childrenMsg: '我是子组件'
    }
  },
  computed: {},
  created () {},
  mounted () {
    // 子组件访问父组件的数据
    console.log('parent', this.$parent.msg)
    console.log('$attrs', this.$attrs) // 存放父组件没有被prop识别的属性
  },
  methods: {
    handleClick () {
      // 2 
      this.$emit('msgFunc', '我是子组件-emit')
      // 3
      this.$emit('update:msg', '我是子组件-sync')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
