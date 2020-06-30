// pages/component/tabbar.js
const app = getApp()
Component({
    //允许组件使用全局css样式即最外层的app.wxss
    options: {
        addGlobalClass: true
    },
    /**
     * 组件的属性列表
     */
    properties: {
        PageCur:{
            type:String,//属性名
            value: app.globalData.tabBar//属性初始值
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        //PageCur:  app.globalData.tabBar
    },
     /**
     * 生命周期函数--监听页面初次渲染完成
     */
	ready: function () {
        //console.log(123, this.data.currBar )
    },
    /**
     * 组件的方法列表
     */
    methods: {
        //导航切换
        NavChange(e) {
            app.globalData.tabBar = e.currentTarget.dataset.cur
            this.setData({
                "PageCur": e.currentTarget.dataset.cur
            })
            this.triggerEvent('trigerNavChange', e.currentTarget.dataset.cur) //这里的myEvent是自己自定义的事件名字，需要父组件中通过他来接受，
        },
    }
})