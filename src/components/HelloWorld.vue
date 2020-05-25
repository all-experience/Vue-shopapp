<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Demo</h2>
    <ul>
      <li v-for="(item, index) in demos" :key="index">
        <router-link :to="item.route">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => {
    return {
      demos: [{
        title: 'vue-lazy',
        route: 'vue-lazy'
      }, {
        title: 'env-test',
        route: 'vue-env'
      }, {
        title: 'vue-css',
        route: 'vue-css'
      }, {
        title: 'vue-store',
        route: 'vue-store'
      }, {
        title: 'Vue组件的通信',
        route: 'vue-messenger'
      }, {
        title: 'vue-loading',
        route: 'loading'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
