<template>
  <div>
    <h2>环境变量的测试</h2>
  </div>
</template>

<script>
import {testApi} from '@/api'
export default {
  data () {
    return {
    }
  },
  computed: {},
  created () {
    console.log('testApi', testApi()) // http://api.dev.jnfresh.cntest.com
    console.log('vue-cli-env', process.env) // http://api.dev.jnfresh.cntest.com
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>