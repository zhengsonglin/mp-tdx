// pages/home/skillProduct/index.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        CustomBar: app.globalData.CustomBar,
        TabCur: 0,
        scrollLeft:0,
        category:[
            {"id":0,"short_name":"全部","long_name":"全部商品",products:[]},
            ...app.globalData.category
        ],
        curProducts:[]
    },
    tabSelect(e) {
        wx.showLoading({
            title: '加载中...',
            mask: true
        });

        let {id, index} = e.currentTarget.dataset
        let {category} = this.data
        let curProducts = [];
        if(index){
            curProducts = [...category[index].products]
        }else{
            category.forEach((item)=>{
                curProducts.push(...item.products)
            })
        }
        
        setTimeout(()=>{
            this.setData({
                TabCur: id,
                scrollLeft: (index-1)*60,
                curProducts
            })
            wx.hideLoading()
        },200)
    },
    toDetal(e){
        console.log(e.currentTarget.dataset.item)
        wx.navigateTo({
          url: '/pages/home/productDetail/index?item='+JSON.stringify(e.currentTarget.dataset.item),
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let {category} = this.data
        let curProducts = [];
        category.forEach((item)=>{
            curProducts.push(...item.products)
        })
        this.setData({
            curProducts
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