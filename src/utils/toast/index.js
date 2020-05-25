import toastComponent from '@/utils/toast/toast'
const toast = {}
const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function(...args) {
    console.log('timeoutId', timeoutId)
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args)
    }, ms);
    console.log('timeoutId2', timeoutId)
  };
};
toast.install = function (Vue) {
  // 创建一个构造器
  const toastConstructor = Vue.extend(toastComponent)
  // 生成构造器的实例
  const instance = new toastConstructor()
  // 将这个实例挂载到新的元素上
  instance.$mount(document.createElement('div'))
  // 将这个新的原色挂载到body层
  document.body.appendChild(instance.$el)
  // 一个定时器的标识
  let timeId
  // 添加实例方法
  Vue.prototype.$showToast = function ({ duration = 1500 } = {}) {
    console.log('showToast', duration)
    instance.show = true
    // 避免出现多个定时器， 多次触发，只以最后一次触发作为延时。
    // 第一次 执行， 第二次，重新执行定时器
    let b = debounce(() => {
      instance.show = false
    }, duration)
    b()
    // 完美
    // clearTimeout(timeId)
    // timeId = setTimeout(() => {
    //   console.log('close')
    //   instance.show = false
    //   clearTimeout(timeId)
    // }, duration)
  }
  Vue.prototype.$hideToast = function () {
    // 强制关闭先清除定时器
    clearTimeout(timeId)
    timeId = ''
    instance.show = false
  }
}

export default toast
