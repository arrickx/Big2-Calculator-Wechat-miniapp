// pages/result/result.js
const app = getApp()
Page({
  onLoad: function (options) {
    // Get data from the previous page and put it into this page's data
    var that = this
    that.setData({
      aScores:Number(options.inputValue1Data),
      bScores:Number(options.inputValue2Data),
      cScores:Number(options.inputValue3Data),
      dScores:Number(options.inputValue4Data),
      dollarValue:parseFloat(options.dollarData),
    })
    // Calculate the final score for each player
    const {aScores, bScores, cScores, dScores,dollarValue} = this.data
    that.setData({
      result1:(((bScores+cScores+dScores)-3*aScores)*dollarValue).toFixed(2),
      result2:(((aScores+cScores+dScores)-3*bScores)*dollarValue).toFixed(2),
      result3:(((aScores+bScores+dScores)-3*cScores)*dollarValue).toFixed(2),
      result4:(((aScores+bScores+cScores)-3*dScores)*dollarValue).toFixed(2),
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