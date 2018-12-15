
var app = getApp()
Page({
  data: {
    user: {},
  },

  onShow: function (options) {

    console.log()

    var that = this;

    wx.request({
      url: "http://localhost:8081/wpDeboServer/wx/" + app.globalData.openid + ".do",
      method: 'GET',
      header: {
        'Content-type': 'application/json'
      },
      success: function (res) {
        that.setData({ user: res.data });
      }
    });

  }




})
