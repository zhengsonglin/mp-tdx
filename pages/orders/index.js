// pages/orders/index.js
const app = getApp();
Component({
    options: {
        addGlobalClass: true
    },
    properties: {

    },
    /**
     * 页面的初始数据
     */
    data: {
        CustomBar: app.globalData.CustomBar
    },
    methods: {
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
            }, 5000)
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
        ready() {
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