const app = getApp()
Page({
    data: {
        CustomBar: app.globalData.CustomBar,
        TabCur: 19,
        MainCur: 19,
        VerticalNavTop: 0,
        category:[
            //{"id":0,"short_name":"全部","long_name":"全部商品"},
            ...app.globalData.category
        ],
        load: true
    },
    onLoad() {
        wx.showLoading({
            title: '加载中...',
            mask: true
        });
    },
    onReady() {
        wx.hideLoading()
    },
    tabSelect(e) {
        this.setData({
            TabCur: e.currentTarget.dataset.id,
            MainCur: e.currentTarget.dataset.id,
            VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
        })
    },
    VerticalMain(e){
        let that = this;
        let category = this.data.category;
        let tabHeight = 0;
        if (this.data.load) {
            category.forEach((item, i)=>{
                let view = wx.createSelectorQuery().select("#main-" + item.id);
                view.fields({
                    size: true
                }, data => {
                    item.top = tabHeight;
                    tabHeight = tabHeight + data.height;
                    item.bottom = tabHeight;
                }).exec();
            })
            that.setData({
                load: false,
                category: category
            })
        }
        let scrollTop = e.detail.scrollTop + 20;
        category.forEach((item, i)=>{
            if (scrollTop > item.top && scrollTop < item.bottom) {
                that.setData({
                    VerticalNavTop: (item.id - 1) * 50,
                    TabCur: item.id
                })
                return false
            }
        })
    },
    toDetal(e){
        console.log(e.currentTarget.dataset.item)
        wx.navigateTo({
          url: '/pages/home/productDetail/index?item='+JSON.stringify(e.currentTarget.dataset.item),
        })
    }
})