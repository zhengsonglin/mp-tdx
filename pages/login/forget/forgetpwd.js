// pages/login/forget/forgetpwd.js
const util = require('../../../utils/util.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phone: "18598271043",
        mCode: "889933",
        pwd: "123456",
        repwd: "123456",
        validCode: {
            btnText: "获取验证码",
            isDisabled: false
        }
    },
     //input数据绑定
     updateValue(e){
        this.setData({
            [e.currentTarget.dataset.type]: e.detail.value
        })
    },
    //获取验证码
    getMessageCode: function (e) {
        if (util.checkMobilePhone(this.data.phone)) {
            let nums = 20, timer;
            this.setData({
                validCode:{
                    btnText: nums + "秒后重新获取",
                    isDisabled: true
                }
            })
         
            timer = setInterval(()=>{
                nums--;
                if (nums > 0) {
                    this.setData({
                        ['validCode.btnText']: nums + "秒后重新获取"
                    })
                } else {
                    clearInterval(timer); //清除js定时器
                    this.setData({
                        ['validCode.btnText']: "获取验证码",
                        ['validCode.isDisabled']: false
                    })
                }
                
            },1000)
        } else {
            wx.showToast({
                title: '请输入正确手机号',
                icon: 'none',
                duration: 2000
            })
        }
    },
    //注册
    doSubmit: function(){
        wx.showLoading({
            title: '请稍等...',
        })
        setTimeout(function () {
            wx.hideLoading();
            wx.showToast({
                title: '重置成功',
                icon: 'none',
                duration: 500,
                success: function(){
                    setTimeout(function () {
                        wx.navigateBack({
                        complete: (res) => {},
                        })
                    }, 500)
                }
            })
        }, 2000)
          
       
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