// pages/userCenter/index.js
const app = getApp();
Component({
    options: {
        addGlobalClass: true
    },
    properties: {

    },
    /**
     * 页面的初始数据
     */
    data: {
        CustomBar: app.globalData.CustomBar,
        userInfo: {
            AB30Count: 20,
            FAccountBalance: 188.6,
            FUserName: "18598271043",
            FInvitationCode: "14983716"
        },
        triggered: false,
        orderType: 1
    },
    methods: {
        //设置订单类型
        setOrderType(e) {
            this.setData({
                orderType: e.currentTarget.dataset.otype
            })
        },
        //跳转到相应订单
        switchTab: function (e) {    
            app.globalData.tabBar = "order"
            //console.log("e", e.currentTarget.dataset.state)       
            this.triggerEvent('trigerTabChange', {PageCur: "order", state: e.currentTarget.dataset.state}) 
        },
        //退出
        logout: function (e) {    
            wx.navigateTo({
            url: '/pages/login/index/login',
            })
        },
        //下拉刷新操作
        onRefresherrefresh(e){
            console.log(e)
            if (this._freshing) return
            this._freshing = true
            setTimeout(() => {
                this.setData({
                    triggered: false,
                })
                this._freshing = false
                wx.showToast({
                title: '刷新成功',
                })
            }, 1000)
        },
    },    
    /*组件生命周期*/
    lifetimes: {
        created() {
            console.log("在组件实例刚刚被创建时执行");
        },
        attached() {
            console.log("在组件实例进入页面节点树时执行")
        },
        ready() {
            console.log("在组件在视图层布局完成后执行")
        },
        moved() {
            console.log("在组件实例被移动到节点树另一个位置时执行")
        },
        detached() {
            console.log("在组件实例被从页面节点树移除时执行")
        },
        error() {
            console.log("每当组件方法抛出错误时执行")
        },
    },
    /*组件所在页面的生命周期 */
    pageLifetimes: {
        show: function () {
            // 页面被展示
            console.log("页面被展示")
        },
        hide: function () {
            // 页面被隐藏
            console.log("页面被隐藏")
        },
        resize: function (size) {
            // 页面尺寸变化
            console.log("页面尺寸变化")
        }
    }
})