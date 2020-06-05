import modalComponent from '@/utils/modal/modal'
const modal = {}
modal.install = function (Vue) {
  // 创建一个构造器
  const modalConstructor = Vue.extend(modalComponent)
  // 生成构造器的实例
  const instance = new modalConstructor()
  // 将这个实例挂载到新的元素上
  instance.$mount(document.createElement('div'))
  // 将这个新的原色挂载到body层
  document.body.appendChild(instance.$el)
  // 添加实例方法
  Vue.prototype.$showModal = function ({ 
    title = '',
    content = '',
    showCancel = true,
    cancelText = '取消',
    cancelColor = '',
    confirmText = '确定',
    confirmColor = '',
    cancelClick = function () {},
    confirmClick = function () {}
   } = {}) {
    instance.show = true
    let options = {
      title, // 标题
      content, // 内容
      showCancel, // 是否展示取消按钮
      cancelText, // 取消文本
      cancelColor, // 取消的字体颜色
      confirmText, // 确认文本
      confirmColor, // 确认的字体颜色
      cancelClick, // 取消的回调
      confirmClick // 确认的回调
    }
    // 赋值给子组件
    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        instance[key] = options[key]
      }
    }
  }
}

export default modal
