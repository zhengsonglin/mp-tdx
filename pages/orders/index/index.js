// pages/orders/index.js
const app = getApp();
Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        state:{
            type:null,//属性名
            value: 0,//属性初始值
            observer: function(newVal, oldVal) {
                // 属性值变化时执行
                //console.log(newVal, oldVal)
                if(newVal && newVal != oldVal){
                    var index = this.data.navTabList.filter((item)=> item.state == newVal)[0].num - 1;
                    this.setData({
                        tabIndex: index || 0
                    })
                }
            }
        }
    },
    /**
     * 页面的初始数据
     */
    data: {
        CustomBar: app.globalData.CustomBar,
        tabIndex: 0,
        navTabList: [
            {state:"1", name:"全部", num:1},
            {state:"2", name:"已领取", num:2},
            {state:"3", name:"已提交", num:3},
            {state:"4", name:"待审核", num:4},
            {state:"5", name:"已完成", num:5},   
        ],
        datas:[
            {
                id:1, shop_name:"匠石独韵", state:1, stateText:"已领取", title :"10包抽纸-限时抢购", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i3/931057900/O1CN01Wj7Sac28EFTwOMLx4_!!931057900.jpg"
            },
            {
                id:2, shop_name:"匠石独韵", state:1, stateText:"已领取", title :"10包抽纸-限时抢购", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i4/1087692074/O1CN01ZNwFlF1RBw0ghBQhc_!!1087692074.jpg"
            },
            {
                id:3, shop_name:"匠石独韵", state:1, stateText:"已领取", title :"10包抽纸-限时抢购", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i4/1037143081/O1CN01MsseCw1Yd8nanBztW_!!1037143081.jpg"
            },
            {
                id:4, shop_name:"匠石独韵", state:1, stateText:"已领取", title :"10包抽纸-限时抢购", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i1/2203204267741/O1CN01x9ZTQu273QVYzD6nH_!!2203204267741.jpg"
            },
            {
                id:5, shop_name:"匠石独韵", state:1, stateText:"已领取", title :"10包抽纸-限时抢购", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i4/645273380/O1CN01qgN3QK1aq5HbA4uhC_!!645273380.jpg"
            },
            {
                id:6, shop_name:"匠石独韵", state:1, stateText:"已领取", title :"10包抽纸-限时抢购", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i3/3370777002/O1CN01NblG6321axq9G1Bim_!!3370777002.jpg"
            },
            {
                id:7, shop_name:"匠石独韵", state:1, stateText:"已领取", title :"10包抽纸-限时抢购", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i3/931057900/O1CN01Wj7Sac28EFTwOMLx4_!!931057900.jpg"
            },
        ],
        showProductDialog: false,
        productItem: {},
        showRemarkDialog: false
    },
    methods: {
        navTabSelect: function (e) {
            console.log(e)
            wx.showLoading({
                title: '加载中',
                mask: true,
            })
            /**/
            this.setData({
                tabIndex: e.currentTarget.dataset.id
            }) 
            
              
            setTimeout(function () {
                wx.hideLoading()
            }, 1000)
            
        },
        //显示商品信息
        showGoodsInfo: function (e) {
            var item = e.target.dataset.item
            this.setData({
                showProductDialog: true,
                productItem: item
            })
        },
        //隐藏商品信息
        hideProductDialog: function (e) {
            this.setData({
                showProductDialog: false,
                productItem: {}
            })
        },
        //显示商家备注
        showRemarkDialog: function (e){
            this.setData({
                showRemarkDialog: true,
            })
        },
        //隐藏商家备注
        hideRemarkDialog: function (e){
            this.setData({
                showRemarkDialog: false,
            })
        },
        //申请售后
        toRefundDetail: function(e){
           // var item = e.target.dataset.item
            wx.navigateTo({
              url: '/pages/orders/refundDetial/index?item='+JSON.stringify(e.target.dataset.item),
            })
        },
        uploadScreenShot: function(e){
            // var item = e.target.dataset.item
             wx.navigateTo({
               url: '/pages/orders/uploadScreenShot/index?item='+JSON.stringify(e.target.dataset.item),
             })
         },
        
        //触摸开始
        handletouchstart: function (event) {
            this.refreshView.handletouchstart(event)
        },
        //触摸移动
        handletouchmove: function (event) {
            this.refreshView.handletouchmove(event)
        },
        //触摸结束
        handletouchend: function (event) {
            this.refreshView.handletouchend(event)
        },
        //触摸取消
        handletouchcancel: function (event) {
            this.refreshView.handletouchcancel(event)
        },
        //页面滚动
        onPageScroll: function (event) {
            this.refreshView.onPageScroll(event)
        },
        onPullDownRefresh: function () {
            setTimeout(() => {
                this.refreshView.stopPullRefresh()
            }, 1500)
        },
        //下拉过程触发
        _pullState(e){
            //console.log(e)
        }
    },
    /*组件生命周期*/
    lifetimes: {
        created() {
            console.log("在组件实例刚刚被创建时执行");
        },
        attached() {
            console.log("在组件实例进入页面节点树时执行")
        },
        ready(e) {
            console.log(e)
            console.log("在组件在视图层布局完成后执行")
            // 刷新组件
            this.refreshView = this.selectComponent("#refreshView")
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

    }
})