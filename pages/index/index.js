//index.js
//获取应用实例
var app = getApp();
var cardTeams;

Page({
  data: {
    cardTeams: [{
      "id": "1",
      "imgsrc":"../../images/win/1.jpg",
      "price": "1245",
      "count": "显卡类别：入门级游戏独立显卡,处理器：Intel i5低功耗版",
      "name": "第六代处理图形音像游戏全套",

    }, {
      "id": "2",
        "imgsrc": "../../images/win/1.jpg",
        "price": "2345",
        "count": "显卡类别：入门级游戏独立显卡,处理器：Intel i5低功耗版",
        "name": "第六代处理图形音像游戏全套",

      }, {
        "id": "2",
        "imgsrc": "../../images/win/1.jpg",
        "price": "2345",
        "count": "显卡类别：入门级游戏独立显卡,处理器：Intel i5低功耗版",
        "name": "第六代处理图形音像游戏全套",

      }, {
        "id": "2",
        "imgsrc": "../../images/win/1.jpg",
        "price": "2345",
        "count": "显卡类别：入门级游戏独立显卡,处理器：Intel i5低功耗版",
        "name": "第六代处理图形音像游戏全套",

      }]
  },



  onLoad: function() {
    console.log('onLoad:' + app.globalData.domain)

  }
})