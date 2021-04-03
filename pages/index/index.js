// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
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
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
})