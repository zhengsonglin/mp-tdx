// pages/home/index.js
const util = require('../../../utils/util.js')

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
        datas: [...app.globalData.products],
        isLoadingMore: true,
        triggered: false
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
        //滚动到底部时
        onScrollBottom(e){
            let {isLoadingMore, datas} = this.data
            let random = datas.slice(0,datas.length), addData = util.getRandomFromArray(random, 10, false)
 
            if(isLoadingMore){
                let newDatas = datas.concat(addData), newDatasLen = newDatas.length, maxCount = 100
              
                setTimeout(()=>{
                    this.setData({
                        "datas": newDatasLen>=maxCount?newDatas.slice(0,maxCount):newDatas,
                        "isLoadingMore": !(newDatasLen>=maxCount)
                    })

                },1500)
                
            }
        },
        //下拉刷新操作
        onRefresherrefresh(e){
            console.log(e)
            if (this._freshing) return
            this._freshing = true
            setTimeout(() => {
                this.setData({
                    triggered: false,
                })
                this._freshing = false
                wx.showToast({
                  title: '刷新成功',
                })
            }, 1000)
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
})