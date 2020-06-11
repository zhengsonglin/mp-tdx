// pages/userCenter/baseUserInfo/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        sexArray: ['男', '女'],
        sexIndex: null,
        age: null,
        qq: null,
        email: null,
        inputDialog: {
            show: false,
            type: "1",   //1年龄，2QQ，3邮箱
            inputValue: ""
        },
        marryIndex: null,
        marryArray: ['已婚', '未婚'], 
        eduIndex: null,
        eduArray: ['初中', '高中', '中专', '大专', '本科', '研究生', '博士'],
        jobIndex: null,
        jobArray: ['宝妈', '全职太太', '上班', '房产', '事业单位', '医疗单位', '白领', '自主经营'],
        region: ['广东省', '广州市', '海珠区']
    },
    //选择性别、婚姻状况、教育程度、所属人群
    pickerChange(e){
        let {picktype} = e.currentTarget.dataset;
        let value = e.detail.value
        if(picktype== "sex"){
            this.setData({
                sexIndex: value
            })
        }else if(picktype== "marry"){
            this.setData({
                marryIndex: value
            })
        }else if(picktype== "edu"){
            this.setData({
                eduIndex: value
            })
        }else if(picktype== "job"){
            this.setData({
                jobIndex: value
            })
        }
    },
    //marryPickerChange eduPickerChange
    //inputDialog.inputValue值
    setInputValue: function (e) {      
        this.setData({  
            ['inputDialog.inputValue']: e.detail.value     
        })
        console.log(this.data.inputDialog)
    },
    RegionChange: function(e) {
        this.setData({
          region: e.detail.value
        })
      },
    showInputModal(e){
        let {type} = e.currentTarget.dataset
        let {age, qq, email} =  this.data
        let lastValue = type==1?age:(type==2?qq:email)
       
        this.setData({
            ['inputDialog.type']: type,
            ['inputDialog.show']: true,
            ['inputDialog.inputValue']: lastValue
        })
    },
    cancleAgeModal(){
        this.setData({
            ['inputDialog.show']: false
        })
    },
    confirmAgeModal(){
        let {type, inputValue}  = this.data.inputDialog
        if(type=='1'){
            this.setData({
                age: inputValue,
                ['inputDialog.show']: false
            })
        }else if(type=='2'){
            this.setData({
                qq: inputValue,
                ['inputDialog.show']: false
            })
        }else if(type=='3'){
            this.setData({
                email: inputValue,
                ['inputDialog.show']: false
            })
        }
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