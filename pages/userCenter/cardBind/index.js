// pages/userCenter/cardBind/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bankIndex: null,
        bankPickerOptions: [
            {name:"中国农业银行", id:"10806310"},
            {name:"中国工商银行", id:"10806311"},
            {name:"中国银行", id:"10806312"},
            {name:"交通银行", id:"10806313"},
            {name:"招商银行", id:"10806325"},
        ],
        region: ['广东省', '广州市', '海珠区']
    },
    bankPickerChange(e) {
        console.log(e);
        this.setData({
            bankIndex: e.detail.value
        })
    },
    RegionChange: function(e) {
        this.setData({
          region: e.detail.value
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