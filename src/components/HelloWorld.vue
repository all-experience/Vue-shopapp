<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Demo</h2>
    <ul>
      <li><router-link :to="'vue-lazy'">vue-lazy</router-link></li>
      <li><router-link :to="'vue-env'">env-test</router-link></li>
      <li><router-link :to="'vue-css'">vue-css</router-link></li>
      <li>
        <router-link :to="'vue-store'">vue-store</router-link>
      </li>
      <li>
        <router-link :to="'vue-messenger'">Vue组件的通信</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
