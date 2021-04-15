// index.js
// 获取应用实例
const app = getApp()
Page({
  // initialize the data
  data: {
    inputValue1:'',
    inputValue2:'',
    inputValue3:'',
    inputValue4:'',
    calStatus:true,
    clsStatus:true,
    dollarValue:'',
  },
  // create a function to change the data value to the input value
  input1: function (e) {
    if (Math.abs(e.detail.value.length - this.data.inputValue1.length) != 1) {
      this.setData({
        inputValue1: ''
      })
      return ''
    } else {
      let reg = /^[0-9]*$/
      if (!reg.test(e.detail.value)) {
        this.setData({
          inputValue1: ''
        })
        return ''
      } else {
        this.setData({
          inputValue1:e.detail.value
        })
      }
    }
    this.isEmpty()
  },
  input2: function (e) {
    if (Math.abs(e.detail.value.length - this.data.inputValue2.length) != 1) {
      this.setData({
        inputValue2: ''
      })
      return ''
    } else {
      let reg = /^[0-9]*$/
      if (!reg.test(e.detail.value)) {
        this.setData({
          inputValue2: ''
        })
        return ''
      } else {
        this.setData({
          inputValue2:e.detail.value
        })
      }
    }
    this.isEmpty()
  },
  input3: function (e) {
    if (Math.abs(e.detail.value.length - this.data.inputValue3.length) != 1) {
      this.setData({
        inputValue3: ''
      })
      return ''
    } else {
      let reg = /^[0-9]*$/
      if (!reg.test(e.detail.value)) {
        this.setData({
          inputValue3: ''
        })
        return ''
      } else {
        this.setData({
          inputValue3:e.detail.value
        })
      }
    }
    this.isEmpty()
  },
  input4: function (e) {
    if (Math.abs(e.detail.value.length - this.data.inputValue4.length) != 1) {
      this.setData({
        inputValue4: ''
      })
      return ''
    } else {
      let reg = /^[0-9]*$/
      if (!reg.test(e.detail.value)) {
        this.setData({
          inputValue4: ''
        })
        return ''
      } else {
        this.setData({
          inputValue4:e.detail.value
        })
      }
    }
    this.isEmpty()
  },
  inputAmt: function (e) {
    if (Math.abs(e.detail.value.length - this.data.dollarValue.length) != 1) {
      this.setData({
        dollarValue: ''
      })
      return ''
    } else {
      let reg = /^[0-9]*\.?[0-9]*$/
      if (!reg.test(e.detail.value)) {
        this.setData({
          dollarValue: ''
        })
        return ''
      } else {
        this.setData({
          dollarValue:e.detail.value
        })
      }
    }
    this.isEmpty()
  },
  // create a function to clear the input value and index
  clearNumbers: function () {
    this.setData({
      inputValue1:'',
      inputValue2:'',
      inputValue3:'',
      inputValue4:'',
      dollarValue:'',
    })
    this.isEmpty()
  },
  // navigate to the result page and send the necessary data to the next page for calculation
  calculateFinal: function () {
    var that = this
    wx.navigateTo({
      url:'/pages/result/result?inputValue1Data=' + that.data.inputValue1 + '&inputValue2Data=' + that.data.inputValue2 + '&inputValue3Data=' + that.data.inputValue3 + '&inputValue4Data=' + that.data.inputValue4 + '&dollarData=' + that.data.dollarValue
    })
  },
  isEmpty: function() {
    const {inputValue1, inputValue2, inputValue3, inputValue4,dollarValue} = this.data
    this.setData({
       clsStatus: !(inputValue1 || inputValue2 || inputValue3 || inputValue4 || dollarValue)
    })
    this.setData({
      calStatus: !(inputValue1 && inputValue2 && inputValue3 && inputValue4 && dollarValue)
    })
  },
  onPullDownRefresh: function () {
    this.clearNumbers();
    wx.stopPullDownRefresh()
  },
  onShareAppMessage: function () {
    return {
      title:'锄大D计分器',
      imageUrl:'/pages/img/logo.jpg'
    }
  },
  onAddToFavorites(res) {
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
  changeLanguage() {
    app.changeLanguage()
    wx.setTabBarItem({
      index: 0,
      text:app.globalData.content.home,
    })
    wx.setTabBarItem({
      index: 1,
      text:app.globalData.content.info,
    })
    wx.setTabBarItem({
      index: 2,
      text:app.globalData.content.contact,
    })
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },
  onShow() {
    this.setData({
      content: app.globalData.content,
    })
  },
})