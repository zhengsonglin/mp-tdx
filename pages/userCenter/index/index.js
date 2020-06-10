// pages/userCenter/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {
            AB30Count: 20,
            FAccountBalance: 188.6,
            FUserName: "18598271043",
            FInvitationCode: "14983716"
        },
        orderType: 1
    },
    //设置订单类型
    setOrderType(e) {
        this.setData({
            orderType: e.currentTarget.dataset.otype
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})