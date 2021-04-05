// pages/result/result.js
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
      scores:[Number(options.inputValue1Data),Number(options.inputValue2Data),Number(options.inputValue3Data),Number(options.inputValue4Data)]
    })
    // Sort the data by accessding order for easier calculation
    this.data.scores.sort(function(a, b){return a-b});
    console.log("原始数据")
    console.log(this.data.scores)
    // Minus the numbers by the lowest number to keep the best player's score as 0
    that.setData({
      processedScore:[this.data.scores[0]-this.data.scores[0],this.data.scores[1]-this.data.scores[0],this.data.scores[2]-this.data.scores[0],this.data.scores[3]-this.data.scores[0]]
    })
    console.log("处理后数据")
    console.log(this.data.processedScore)
    that.setData({
      winner1:(this.data.processedScore[0]+this.data.processedScore[1]+this.data.processedScore[2]+this.data.processedScore[3])*this.data.dollarValue,
      winner2:(this.data.processedScore[3]-this.data.processedScore[1]+this.data.processedScore[2]-this.data.processedScore[1]-this.data.processedScore[1])*this.data.dollarValue,
      loser1:(this.data.processedScore[2]+this.data.processedScore[2]-this.data.processedScore[3]-this.data.processedScore[1]+this.data.processedScore[2])*this.data.dollarValue,
      loser2:(this.data.processedScore[3]+this.data.processedScore[3]-this.data.processedScore[1]+this.data.processedScore[3]-this.data.processedScore[2])*this.data.dollarValue,
    })
    console.log("最终赢家")
    console.log(this.data.winner1)
    console.log("第二赢家")
    console.log(this.data.winner2)
    console.log("第二输家")
    console.log(this.data.loser1)
    console.log("最终输家")
    console.log(this.data.loser2)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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