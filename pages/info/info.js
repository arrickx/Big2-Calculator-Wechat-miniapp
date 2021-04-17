const app = getApp()
// pages/info/info.js
Page({
  // initial the function of change language and change tabbar title
  onShow() {
    wx.setNavigationBarTitle({
      title: app.globalData.content.title,
    }),
    this.setData({
      content: app.globalData.content,
    })
  },
  // create share and add to favorites image and title
  onShareAppMessage() {
    return {
      title:'锄大D计分器',
      imageUrl:'/pages/img/logo.jpg'
    }
  },
  onAddToFavorites() {
    return {
      title:'锄大D计分器',
      imageUrl:'/pages/img/logo.jpg'
    }
  },
  onShareTimeline() {
    return {
      title:'锄大D计分器',
    }
  },
})