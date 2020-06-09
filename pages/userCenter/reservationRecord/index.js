// pages/userCenter/reservationRecord/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        TabCur: 1,
        list:[],
        list2:[
            {time:"2020-04-28", fID:"2", fName:"数据线"},
            {time:"2020-04-23", fID:"1", fName:"抽纸"},
            {time:"2020-04-16", fID:"3", fName:"搅蛋器"}
        ]
    },
    tabSelect(e) {
        var data = this.data.list2,
            id = e.currentTarget.dataset.id
        this.setData({
            TabCur: id,
            list: id==1?data:[]
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            list: JSON.parse(JSON.stringify(this.data.list2))
        })
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