// app.js
//导入两个字典
import cn from '/utils/cn'
import en from '/utils/en'

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    //每次启动小程序都重新获取所选语言的文本
    this.updateContent()
  },
  updateContent() {
    let lastLanguage = wx.getStorageSync('language')//获取当前语言
    if (lastLanguage == 'en') {
      this.globalData.content = en.content//根据当前系统语言获取对应文本
      wx.setStorageSync('language', 'en')//把当前语言保存在本地
    } else {//中文为默认语言
      this.globalData.content = cn.content
      wx.setStorageSync('language', 'cn')
    }
  },
  changeLanguage() {
    let language = wx.getStorageSync('language')//获取当前语言
    if (language == "cn") {
      wx.setStorageSync('language', 'en')//切换语言并保存在本地
    } else {
      wx.setStorageSync('language', 'cn')
    }
    this.updateContent()//拿修改后语言获取对应文本
  },
  globalData: {
    userInfo: null,
    language: wx.getStorageSync('language'),
  }
})
