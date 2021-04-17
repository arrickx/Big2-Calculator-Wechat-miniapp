// index.js
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
  input1(e) {
    this.checkInput(e,'inputValue1')
  },
  input2(e) {
    this.checkInput(e,'inputValue2')
  },
  input3(e) {
    this.checkInput(e,'inputValue3')
  },
  input4(e) {
    this.checkInput(e,'inputValue4')
  },
  inputAmt(e) {
    this.checkInput(e,'dollarValue')
  },
  // create a function to clear the input value and index
  clearNumbers() {
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
  calculateFinal() {
    const {inputValue1, inputValue2, inputValue3, inputValue4,dollarValue} = this.data
    wx.navigateTo({
      url:'/pages/result/result?inputValue1Data=' + inputValue1 + '&inputValue2Data=' + inputValue2 + '&inputValue3Data=' + inputValue3 + '&inputValue4Data=' + inputValue4 + '&dollarData=' + dollarValue
    })
  },
  // 1. check if any of the input is empty 2. check if all the input is empty. 
  isEmpty() {
    const {inputValue1, inputValue2, inputValue3, inputValue4,dollarValue} = this.data
    this.setData({
       clsStatus: !(inputValue1 || inputValue2 || inputValue3 || inputValue4 || dollarValue)
    })
    this.setData({
      calStatus: !(inputValue1 && inputValue2 && inputValue3 && inputValue4 && dollarValue)
    })
  },
  // clear all the inputed number if user use pull down refresh
  onPullDownRefresh() {
    this.clearNumbers();
    wx.stopPullDownRefresh()
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
  // initial the function of change language and change tabbar title
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
  // initial the language data from content. also update the navigation bar title
  onShow() {
    wx.setNavigationBarTitle({
      title: app.globalData.content.title,
    }),
    this.setData({
      content: app.globalData.content,
    })
  },
  // check if the input is valid (numbers and dots, only 1 dot allow)
  checkInput(e,input){
    let reg = /^[0-9]*\.?[0-9]*$/
    if (!reg.test(e.detail.value)) {
      this.setData({
        [input]: ''
      })
      return ''
    } else {
      this.setData({
        [input]:e.detail.value
      })
    }
    this.isEmpty()
  },
})