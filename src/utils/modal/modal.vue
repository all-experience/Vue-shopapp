<template>
  <div v-if="show">
    <div class="mask"></div>
    <div class="modal">
      <div class="modal-title">{{title}}</div>
      <div class="modal-content">{{content}}</div>
      <div class="modal-btn">
        <div class="cancel-btn" @click="cancel" v-if="showCancel" :style="{'color': cancelColor}">{{cancelText}}</div>
        <div class="comfirm-btn" @click="comfirm"  :style="{'color': confirmColor}">{{confirmText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      title: '我是标题',
      content: '我是模板内容',
      showCancel: false
    }
  },
  computed: {},
  created () {},
  methods: {
    cancel () {
      this.show = false
      this.cancelClick()
    },
    comfirm () {
      this.show = false
      this.confirmClick()
    }
  }
}
</script>
<style lang="scss" scoped>
.mask{
  position: fixed;
  z-index: 0;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
.modal{
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 400px;
  height: 200px;
  background-color: #FFFFFF;
  border-radius: 20px;
}
.modal-title{
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.modal-content{
  height: 80px;
  padding: 10px 20px 10px 20px;
  text-align: center;
}
.modal-btn{
  height: 60px;
  width: 100%;
  display: flex;
  border-top: 1px solid #ccc;
  .cancel-btn{
    flex: 1;
    line-height: 60px;
    text-align: center;
    border-right: 1px solid #ccc;
  }
  .comfirm-btn{
    flex: 1;
    line-height: 60px;
    text-align: center;
  }
}
</style>
