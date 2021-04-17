// pages/result/result.js
const app = getApp()
Page({
  onLoad: function (options) {
    // Get data from the previous page and put it into this page's data
    var that = this
    that.setData({
      inputValue1:Number(options.inputValue1Data),
      inputValue2:Number(options.inputValue2Data),
      inputValue3:Number(options.inputValue3Data),
      inputValue4:Number(options.inputValue4Data),
      dollarValue:parseFloat(options.dollarData),
    })
    // Calculate the final score for each player
    const {inputValue1, inputValue2, inputValue3, inputValue4,dollarValue} = this.data
    that.setData({
      result1:(((inputValue2-inputValue1)+(inputValue3-inputValue1)+(inputValue4-inputValue1))*dollarValue).toFixed(2),
      result2:(((inputValue1-inputValue2)+(inputValue3-inputValue2)+(inputValue4-inputValue2))*dollarValue).toFixed(2),
      result3:(((inputValue1-inputValue3)+(inputValue2-inputValue3)+(inputValue4-inputValue3))*dollarValue).toFixed(2),
      result4:(((inputValue1-inputValue4)+(inputValue2-inputValue4)+(inputValue3-inputValue4))*dollarValue).toFixed(2),
    })
  },
  // initial the language data from content. also update the navigation bar title
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