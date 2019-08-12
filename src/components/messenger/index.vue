<template>
  <div>
    <div>
      <h1>父子组件通信</h1>
      <div>
        <h2>1.父组件传值:</h2>
        <children :msg="msg" :show="1" ref="son"></children>
      </div>
      
      <h2>2.子组件向父组件传值</h2>
      <p>父组件接收到的内容： {{msg}}</p>
      <children @msgFunc="func" :show="2"></children>
      <h2>3.sync通信</h2>
      <p>父组件接收到的内容： {{msg}}</p>
      <children :msg.sync="msg" :show="3"></children>
    </div>
    <div>
      <h1>兄弟组件通信</h1>
      <h2>1.哥哥组件传值</h2>
      <h2>2.弟弟组件传值</h2>
      <div><router-link :to="'messenger-brother'">点击跳转到弟弟页面</router-link></div>
      <div>我是弟弟组件传回来的值： {{brother}}</div>
    </div>
    <div>
      <h1>封装组件通信</h1>
      <children :msg.sync="msg" :show="4" :inheritAttrs="inheritAttrs" @sonFunc="sonFunc"></children>
    </div>
    <div>
      <h1>model通信</h1>
      <p>子组件传递回来的内容: {{modelData}}</p>
      <children :show="5" v-model="modelData"></children>
    </div>
  </div>
</template>

<script>
import children from './children'
export default {
  components: {
    children
  },
  data () {
    return {
      msg: '我是父组件',
      brother: '还未传值',
      inheritAttrs: 'inheritAttrs',
      modelData: ''
    }
  },
  computed: {},
  created () {
    // even-bus
    console.log('even-bus', this.$eventBus)
    this.$eventBus.$on('brotherFun', (data) => {
      console.log('brother', data, this.brother)
      this.brother = 123
    })
    this.$eventBus.$off('even-bus')
  },
  mounted () {
    // 父组件访问子组件的数据
    let result = this.$children[0].childrenMsg
    console.log('children', result)
    console.log('son', this.$refs.son)
  },
  methods: {
    func (data) {
      this.msg = data
    },
    sonFunc (data) {
      console.log('son-func', data)
      alert('son-func:' + data) // son-func:inheritAttrs
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
