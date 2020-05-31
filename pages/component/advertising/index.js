// pages/component/advertising/index.js
Component({
    //允许组件使用全局css样式即最外层的app.wxss
    options: {
        addGlobalClass: true,
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type:String
        },
        datas: {
            type: Array,
            value: []
        },
        isAutoplay: {
            type: Boolean,
            value: true
        },
        autoplayTime: {
            type: Number,
            value: 3000,
        },
        userLeftSlot: {
            type: Boolean,
            value: false
        },
        userRightSlot: {
            type: Boolean,
            value: false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        circular: true,
        vertical: true,
        autoplay: true
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
