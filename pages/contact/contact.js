const app = getApp()
// pages/contact/contact.js
Page({
  // handle the contact bar, for user that can comeback and check for reply
  handleContact (e) {
    console.log(e.detail.path)
    console.log(e.detail.query)
  },
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