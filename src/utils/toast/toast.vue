<template>
  <div v-if="show">
    <div class="toast">
      <div class="title">我是一个小吐司</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  computed: {},
  created () {},
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.toast{
  width: 200px;
  height: 30px;
  border-radius: 20px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 10px;
}
.title{
  color: white
}
</style>
