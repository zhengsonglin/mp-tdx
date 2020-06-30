//    https://developers.weixin.qq.com/miniprogram/dev/extended/weui/quickstart.html
//     通过在app.json中配置如下代码，就可以无需增加代码体积情况下直接使用weiui组件库(基于原生小程序拓展组件库)
//     "useExtendedLib": {
//         "weui": true
//     }

const util = require('./utils/util.js')
//app.js
App({
    onLaunch: function () {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
        // 获取系统状态栏信息
        wx.getSystemInfo({
            success: e => {
                this.globalData.StatusBar = e.statusBarHeight;  //系统状态栏高度, 属性单位px
                let capsule = wx.getMenuButtonBoundingClientRect(); //胶囊按钮属性, 属性单位px
                //console.log(capsule, e.statusBarHeight)
                if (capsule) {
                    this.globalData.Custom = capsule;
                    this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight+2;
                } else {
                    this.globalData.CustomBar = e.statusBarHeight + 50;
                }
            }
        })

    },
    globalData: {
        userInfo: null,
        tabBar: 'home',
        advertisingList: [{
                id: "1",
                text: "全国商品免费包邮领取"
            },
            {
                id: "2",
                text: "【紧急通知】禁止吸粉"
            },
            {
                id: "3",
                text: "淘大熊商家操作教程"
            },
            {
                id: "4",
                text: "平台内测，实名认证"
            },
            {
                id: "5",
                text: "实名认证联系客服审核"
            },
            {
                id: "6",
                text: "【必读】放单节奏问题"
            },
        ]
    },
    //数字转百分比保留n位小数
    percent(point, n){
        return utils.percent(point, n)
    }
})