// pages/home/index.js
const app = getApp();
let pageStart = 0;

Component({
    options: {
        addGlobalClass: true
    },
    properties: {

    },
    data: {
        CustomBar: app.globalData.CustomBar,
        searchBgColor: "rgba(255,0,0,0.2)",
        swiperHeight: "220px",
        inputBgColor: "rgba(255,255,255,0.2)",
        inputColor: "rgba(255,255,255,1)",
        inputPlaceholderColor: "color:rgba(255,255,255,1)",
        searchKey: "",
        advertisingList: app.globalData.advertisingList,
        datas: [
            {title:"多用途万能胶*1桶", pid:"10010", price: "38.8", task_count:8, order_count:7, is_img:1, img:"https://img.alicdn.com/imgextra/i4/811742228/O1CN01atB2z21SKT2RBKVe6_!!811742228.png", endTime:"2020-04-05 00:00:00"},
            {title:"燃气灶聚火防风节能罩1个装", pid:"10011", price: "78.8", task_count:5, order_count:3, is_img:-1, img:"https://img.alicdn.com/imgextra/i2/2201461853628/O1CN01MPmb751cffWxj0RQj_!!2201461853628.jpg", endTime:"2020-04-0600:00:00"},
            {title:"晒图-椰壳清洁布不伤手", pid:"10012", price: "30.6", task_count:8, order_count:3, is_img:1, img:"https://img.alicdn.com/imgextra/i2/811742228/O1CN01q04GiB1SKT1vIJPAh_!!811742228.jpg", endTime:"2020-04-07 00:00:00"},
            {title:"美甲套装7件套+随机样品", pid:"10013", price: "138.8", task_count:8, order_count:6, is_img:1, img:"https://img.alicdn.com/imgextra/i3/2206377044743/O1CN010rzUCW1kuL91Ypiv8_!!2206377044743.jpg", endTime:"2020-04-08 00:00:00"},
            {title:"隔热垫绿色圆形1个", pid:"10014", price: "38.8", task_count:8, order_count:7, is_img:1, img:"https://img.alicdn.com/imgextra/i2/1058862643/O1CN01jLBTCm1VOXOsAwwrL_!!1058862643.jpg", endTime:"2020-04-05 00:00:00"},
            {title:"多用途万能胶*1桶", pid:"10015", price: "38.8", task_count:8, order_count:2, is_img:1, img:"https://img.alicdn.com/imgextra/i4/811742228/O1CN01atB2z21SKT2RBKVe6_!!811742228.png", endTime:"2020-04-09 00:00:00"},
            {title:"安太医男用延时湿巾3片", pid:"10016", price: "38.8", task_count:8, order_count:2, is_img:1, img:"https://img.alicdn.com/imgextra/i2/2207599770596/O1CN0102EkNk1GH0et8StCB_!!2207599770596.jpg", endTime:"2020-04-12 00:00:00"},
            {title:"多用途万能胶*1桶", pid:"10017", price: "38.8", task_count:8, order_count:2, is_img:1, img:"https://img.alicdn.com/imgextra/i4/811742228/O1CN01atB2z21SKT2RBKVe6_!!811742228.png", endTime:"2020-04-13 00:00:00"},
        ]
        
    },
    methods: {
        //搜索input发生change事件
        onInputChange(e) {
            this.setData({
                searchKey: e.detail.value
            })
        },
        //清空搜索关键词
        onCleanSearchKey() {
            this.setData({
                searchKey: ""
            })
        },
        //回车搜索
        onSearch(e) {
            console.log(e)
        },
        //子组件的pageScroll, //页面滚动
        onPageScroll(e) {
            var scrollTop = e.detail.scrollTop,
                c = 255,
                swiperHeight = Number(this.data.swiperHeight.replace("px", "")),
                ratio = parseFloat((scrollTop / swiperHeight).toFixed(2)),
                ratio = ratio > 1 ? 1 : ratio,
                c = parseInt(255 * (1 - ratio));
            if (ratio < 0.2) {
                ratio = 0.2;
            } else if (ratio > 0.9) {
                ratio = 0.9;
            }
            //console.log(scrollTop, ratio, c)
            //console.log(c)
            this.setData({
                searchBgColor: "rgba(255,0,0, " + ratio + ")",
                inputBgColor: "rgba(255,255,255, " + ratio + ")",
                inputColor: "rgba(" + c + ", " + c + ", " + c + ", 1)",
                inputPlaceholderColor: "color:rgba(" + c + ", " + c + ", " + c + ", 1)",
            })
        },
        toDetal(e){
            console.log(e.currentTarget.dataset.item)
            wx.navigateTo({
              url: '/pages/home/productDetail/index?item='+JSON.stringify(e.currentTarget.dataset.item),
            })
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