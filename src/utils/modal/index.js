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
    content = ''
   } = {}) {
    instance.show = true
  }
}

export default modal
