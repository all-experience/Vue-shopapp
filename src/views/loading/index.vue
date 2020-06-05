<template>
  <div>
    <div>
      <h1>loading</h1>
      <div><button @click="showLoadingOne">点击显示jn-loading</button></div>
      <div><button @click="showLoadingTwo">点击显示loading2</button></div>
    </div>
    <div>
      <h1>toast</h1>
      <div><button @click="showToast">点击显示ToasT</button></div>
      <div><button @click="hideToast">强制隐藏toast</button></div>
    </div>
    <div>
      <h1>comfirm</h1>
      <div><button @click="showComfirm">点击显示comfirm</button></div>
    </div>
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
    // loading
    showLoadingOne () {
      this.$jnLoading.show()
      setTimeout(() => {
        this.$jnLoading.show(false)
      }, 3000)
    },
    showLoadingTwo () {
      this.$showLoading({
        text: '测试传入的数据',
        mask: true
      })
      setTimeout(() => {
        this.$hideLoading()
      }, 3000)
    },
    // toast
    showToast () {
      this.$showToast({
        duration: 5000
      })
    },
    hideToast () {
      this.$hideToast()
    },
    // comfirm
    showComfirm () {
      this.$showModal({
        title: 'i am modal',
        content: 'i am content',
        confirmClick: () => {
          console.log('comfirm')
        },
        cancelClick: () => {
          console.log('cancel')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
