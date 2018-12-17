# 微信小程序从零开始开发步骤（三）底部导航栏
上一章节，我们分享了如何创建一个新的页面和设置页面的标题，这一章我们来聊聊**底部导航栏**是如何实现的。即点击底部的导航，会实现不同对应页面之间的切换。

我们先来看个我们要实现的底部导航栏的效果图：（三个导航图标示例，微信小程序最多能加5个）
![图片.png](https://upload-images.jianshu.io/upload_images/5640239-7c621b395f6a0f12.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



## 1\. 图标准备

阿里图标库  [http://www.iconfont.cn/collections/show/29](http://www.iconfont.cn/collections/show/29) 

在这个网站上下载一些自己要用到的图标，比如人员头像，home主页等一些常用的图标，直接点击下载保存到本地，修改一下命名。也可以使用UI准备好的图标。

![](https://upload-images.jianshu.io/upload_images/5640239-85d2bd68c96f9036.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



回到项目里，新建一个images文件夹，将刚刚下载好的图标放在文件夹底下备用，将上述起好名字的图标 保存到 小程序 项目目录中 新创建的 images 文件夹中，准备工作就做好了。
![](https://upload-images.jianshu.io/upload_images/5640239-1c7a2440d125cc53.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/5640239-413fd426ec70f475.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 2\. 添加配置文件

我们找到项目根目录中的配置文件 app.json 加入如下配置信息（app.json文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。）

       "tabBar": {
      "color": "#a9b7b7",
      "selectedColor": "#11cd6e",
      "borderStyle": "white",
      "list": [
        {
          "selectedIconPath": "images/1.png",
          "iconPath": "images/2.png",
          "pagePath": "pages/index/index",
          "text": "首页"
        },
        {
          "selectedIconPath": "images/1.png",
          "iconPath": "images/2.png",
          "pagePath": "pages/logs/logs",
          "text": "日志"
        },
        {
          "selectedIconPath": "images/1.png",
          "iconPath": "images/2.png",
          "pagePath": "pages/test/test",
          "text": "测试"
        }
      ]
    }

![](https://upload-images.jianshu.io/upload_images/5640239-1a2eb9736c019cce.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)











以上只是基础的部分，当然了小程序的官方文档提供了更多的丰富的组件和样式
参考文档：
[https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html#tabBar](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html#tabBar) 

OK，结束，保存 编译  就可以实现小程序的经典的底部导航效果了
