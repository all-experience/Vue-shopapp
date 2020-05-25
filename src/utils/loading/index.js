import LoadingComponent from './loading'
const Loading = {}
// 知识点 install、 extend
Loading.install = function (Vue) {
  // 生成一个Vue的子类 同时这个子类也就是组件
  const LoadingConstructor = Vue.extend(LoadingComponent)
  // 生成一个该子类的实例
  const instance = new LoadingConstructor()
  // 将这个实例挂载在我创建的div上
  instance.$mount(document.createElement('div'))
  // 并将此div加入全局挂载点内部
  document.body.appendChild(instance.$el)
  //注入vue的原型链  添加实例方法
  Vue.prototype.$showLoading = function ({
    text = '',
    mask = false
  } = {}) {
    instance.show = true
    instance.text = text
    instance.mask = mask
  }
  Vue.prototype.$hideLoading = function () {
    instance.show = false
  }
}

export default Loading
