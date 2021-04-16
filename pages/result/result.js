// pages/result/result.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.setNavigationBarTitle({
      title: app.globalData.content.title,
    }),
    this.setData({
      content: app.globalData.content,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})