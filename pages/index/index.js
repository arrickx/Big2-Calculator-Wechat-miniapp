// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    inputValue1:'',
    inputValue2:'',
    inputValue3:'',
    inputValue4:'',
    array: ['Penny', 'Nickle', 'Dime', 'Quarter', 'Half-Dollar', 'Dollar'],
    objectArray: [
      {
        id: 0,
        name: 'Penny'
      },
      {
        id: 1,
        name: 'Nickle'
      },
      {
        id: 2,
        name: 'Dime'
      },
      {
        id: 3,
        name: 'Quarter'
      },
      {
        id: 4,
        name: 'Half-Dollar'
      },
      {
        id: 5,
        name: 'Dollar'
      }
    ],
    index: 3,
  },
  input1: function (e) {
    this.setData({
      inputValue1:e.detail.value
    })
  },
  input2: function (e) {
    this.setData({
      inputValue2:e.detail.value
    })
  },
  input3: function (e) {
    this.setData({
      inputValue3:e.detail.value
    })
  },
  input4: function (e) {
    this.setData({
      inputValue4:e.detail.value
    })
  },
  clearNumbers: function () {
    this.setData({
      inputValue1:'',
      inputValue2:'',
      inputValue3:'',
      inputValue4:'',
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  calculateFinal: function () {
    var that = this
    wx.navigateTo({
      url:'/pages/result/result?inputValue1Data=' + that.data.inputValue1 + '&inputValue2Data=' + that.data.inputValue2 + '&inputValue3Data=' + that.data.inputValue3 + '&inputValue4Data=' + that.data.inputValue4 + '&indexData=' + that.data.index
    })
  },
})