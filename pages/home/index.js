// pages/home/index.js
const app = getApp();
Component({
    options: {
        addGlobalClass: true,
    },
    properties: {

    },
    data: {
        CustomBar: app.globalData.CustomBar,
        searchBgColor: "rgba(255,0,0,0.2)",
        inputBgColor: "rgba(255,255,255,0.2)",
        inputColor: "rgba(255,255,255,0.8)",
        inputPlaceholderColor: "color:rgba(255,255,255,0.8)",
        searchKey: "",
        advertisingList: app.globalData.advertisingList
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
        //子组件的pageScroll
        onPageScroll(e) {
            //console.log(e)
        },
        onRefresh:function(e){
            var callback = e.detail;
            setTimeout(function(){
                callback.success();
            },3000)
        },
        onLoadMore: function (e) {
            var callback = e.detail;
            setTimeout(function () {
                callback.fail();
            }, 3000)
        },
    },
    /*组件生命周期*/
    lifetimes: {
        created() {
            console.log("在组件实例刚刚被创建时执行")
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