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
    dollarValue:0.25,
    array: ['Penny', 'Nickle', 'Dime', 'Quarter', 'Half-Dollar', 'Dollar'],
    objectArray: [
      {
        id: 0,
        name: 'Penny',
        value: 0.01
      },
      {
        id: 1,
        name: 'Nickle',
        value: 0.05
      },
      {
        id: 2,
        name: 'Dime',
        value: 0.10
      },
      {
        id: 3,
        name: 'Quarter',
        value: 0.25
      },
      {
        id: 4,
        name: 'Half-Dollar'
        ,
        value: 0.5
      },
      {
        id: 5,
        name: 'Dollar',
        value: 1.00
      }
    ],
    index: 3,
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
  // create a function to clear the input value and index
  clearNumbers: function () {
    this.setData({
      inputValue1:'',
      inputValue2:'',
      inputValue3:'',
      inputValue4:'',
      index:3
    })
    this.isEmpty()
  },
  // create a functon to change display of picker and value of dollarValue
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
    this.setData({
      dollarValue: this.data.objectArray[e.detail.value].value
    })
  },
  // navigate to the result page and send the necessary data to the next page for calculation
  calculateFinal: function () {
    var that = this
    wx.navigateTo({
      url:'/pages/result/result?inputValue1Data=' + that.data.inputValue1 + '&inputValue2Data=' + that.data.inputValue2 + '&inputValue3Data=' + that.data.inputValue3 + '&inputValue4Data=' + that.data.inputValue4 + '&dollarData=' + that.data.dollarValue
    })
  },
  isEmpty: function() {
    if (this.data.inputValue1!='' || this.data.inputValue2!='' || this.data.inputValue3!='' || this.data.inputValue4!='') {
      this.setData({
        clsStatus: false
      })
    } else {
      this.setData({
        clsStatus: true
      })
    }
    if (this.data.inputValue1!='' && this.data.inputValue2!='' && this.data.inputValue3!='' && this.data.inputValue4!='') {
      this.setData({
        calStatus: false
      })
    } else {
      this.setData({
        calStatus: true
      })
    }
  },
})