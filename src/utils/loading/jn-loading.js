const Loading = {}

Loading.install = function (Vue, options) {
  let $loading = {
    showTimeList: [],
    show: function (isLoading = true, text) {
      if (typeof isLoading !== 'boolean') {
        return false
      }
      let createLoading = document.getElementsByClassName('loading-img')
      if (createLoading.length < 1) {
        // 1、创建构造器，定义好提示信息的模板
        let LoadingContainer = Vue.extend({
          template: `
                      <div class="loading-container" style="width:100%;height:100%">
                        <div class="loading-box">
                          <div>
                            <p class="loading-text">${text || '正在加载...'}</p>
                          </div>
                        </div>
                      </div>
                    `
        })
        // 2、创建实例，挂载到文档以后的地方
        let loadingImg = new LoadingContainer().$mount().$el
        // 3、把创建的实例添加到body中
        document.body.appendChild(loadingImg)
      }
      // 添加注释： 多个loading的处理，其实用节流函数比较好，待更新优化
      let loadingContainer = document.getElementsByClassName('loading-container')[0]
      if (isLoading) {
        console.log('showtimelIST', this.showTimeList)
        if (this.showTimeList.length) return
        let showTime = setTimeout(() => {
          loadingContainer.style.display = 'block'
        }, 300)
        this.showTimeList.push(showTime)
      } else {
        if (this.showTimeList.length > 0) {
          clearTimeout(this.showTimeList[0])
          this.showTimeList.shift()
        }
        // loadingContainer.style.display = 'none'
        loadingContainer.parentElement.removeChild(loadingContainer)
      }
    }
  }
  Vue.prototype.$jnLoading = $loading
}
export default Loading