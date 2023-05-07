// 此处代码为路由跳转封装。如果有错误或者需要优化的地方，请联系作者(您完全可不用此处功能函数，因为有时候会涉及到传参数的情况)。
export default {
  // 关闭所有页面，打开到应用内的某个页面
  reLaunch(url) {
    return uni.reLaunch({
      url: url
    })
  },
  // 跳转到tabBar页面，并关闭其他所有非tabBar页面
  switchTab(url) {
    return uni.switchTab({
      url: url
    })
  },
  // 关闭当前页面，跳转到应用内的某个页面
  redirectTo(url) {
    return uni.redirectTo({
      url: url
    })
  },
  // 保留当前页面，跳转到应用内的某个页面
  navigateTo(url) {
    return uni.navigateTo({
      url: url
    })
  },
  // 关闭当前页面，返回上一页面或多级页面
  navigateBack() {
    return uni.navigateBack()
  }
}
