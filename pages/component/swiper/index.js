// pages/component/swiper/index.js
var imgArr = [
    'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
    'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d',
    'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870'
]
/*
imgArr = [
    'http://localhost:8080/img/s-1.jpg',
    'http://localhost:8080/img/s-2.jpg',
    'http://localhost:8080/img/s-3.jpg',
    'http://localhost:8080/img/s-4.jpg'
]
*/
Component({
    //允许组件使用全局css样式即最外层的app.wxss
    options: {
        addGlobalClass: true
    },
    /**
     * 组件的属性列表
     */
    properties: {
        indicatorDots: {
            type: [Boolean, String],
            value: true
        },
        indicatorColor: {
            type: String,
            value: 'rgba(255,255,255, .3)'
        },
        isAutoplay: {
            type: [Boolean, String],
            value: true
        },
        indicatorActColor: {
            type: String,
            value: '#fff'
        },
        autoplayTime: {
            type: [Number],
            value: 3000,
        },
        circular: {
            type: [Boolean],
            value: true
        },
        isVertical: {
            type: [Boolean],
            value: false
        },
        height: {
            type: [String],
            value: "160px"
        },
        datas: {
            type: Array,
            //value: ['/img/s-1.jpg','/img/s-2.jpg','/img/s-3.jpg','/img/s-4.jpg'],
            value: [...imgArr],
            default:()=> [//这是错误写法，默认值用value属性
                ...imgArr
            ]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        index: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        swiperChange(e) {//current当前索引，source代表swiper触发方式(autoplay自动轮播，touch手势触发)
            let {current, source} = e.detail
            //console.log(current, source)
        }
    }
})