// index.js
// 获取应用实例
const app = getApp()

Page({
  data: { 
    imgSrc: '../../resources/5.png'
  }, 
  onLoad() {
    
  }, 
  onShareAppMessage(){

  },
  freeTell(){
    wx.makePhoneCall({
      phoneNumber: '15317965929',
    })
  }

})
