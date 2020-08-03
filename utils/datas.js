const advertisingList = [{
        id: "1",
        text: "全国商品免费包邮领取"
    },
    {
        id: "2",
        text: "【紧急通知】禁止吸粉"
    },
    {
        id: "3",
        text: "淘大熊商家操作教程"
    },
    {
        id: "4",
        text: "平台内测，实名认证"
    },
    {
        id: "5",
        text: "实名认证联系客服审核"
    },
    {
        id: "6",
        text: "【必读】放单节奏问题"
    }
]

const products = [{
        title: "发货一团宝宝毛线（一团一两）",
        pid: "10002",
        price: "9.8",
        task_count: 8,
        order_count: 6,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i3/3244646190/O1CN01FjPrGT1vb4G8mNeqP_!!3244646190.jpg",
        endTime: "2020-03-29 00:00:00"
    },
    {
        title: "抖音同款短袖",
        pid: "10003",
        price: "40",
        task_count: 10,
        order_count: 9,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i3/2236116767/O1CN01Mzdfu81zrKn4VqXBo_!!2236116767.jpg",
        endTime: "2020-03-29 12:20:30"
    },
    {
        title: "短袖上衣",
        pid: "10004",
        price: "55",
        task_count: 7,
        order_count: 6,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i1/1863576895/O1CN01YkBqEM20nxUHhx0B3_!!1863576895.jpg",
        endTime: "2020-03-29 12:20:50"
    },
    {
        title: "芒果1斤",
        pid: "10005",
        price: "9.8",
        task_count: 8,
        order_count: 6,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i3/2200687420292/O1CN01oQ4RwS1E1mGAmps9u_!!2200687420292.jpg",
        endTime: "2020-03-29 00:00:00"
    },
    {
        title: "皮凳子圆凳 换鞋凳",
        pid: "10006",
        price: "29.8",
        task_count: 8,
        order_count: 6,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i4/2201517549956/O1CN01pHiz2V2NPtqLP5pmU_!!2201517549956.jpg",
        endTime: "2020-04-01 00:00:00"
    },
    {
        title: "中秋节手提灯笼发光音乐电动万",
        pid: "10007",
        price: "29.8",
        task_count: 8,
        order_count: 6,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i1/2367309467/O1CN01tneMTk2Jnw9yvymVe_!!2367309467.jpg",
        endTime: "2020-04-02 00:00:00"
    },
    {
        title: "本品-大圆圈耳环欧美风饰品百搭",
        pid: "10008",
        price: "29.8",
        task_count: 8,
        order_count: 6,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i3/717744671/O1CN01PvBZoE1kNMdA8FTlg_!!717744671.jpg",
        endTime: "2020-04-03 00:00:00"
    },
    {
        title: "白色纯银樱花耳钉（只发白色）",
        pid: "10009",
        price: "32.6",
        task_count: 8,
        order_count: 7,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i1/2947157351/O1CN01YDI7IN24Ao5THXx2y_!!2947157351.jpg",
        endTime: "2020-04-04 00:00:00"
    },
    {
        title: "月饼模具",
        pid: "10010",
        price: "38.8",
        task_count: 8,
        order_count: 7,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i1/16104995/O1CN01uTRLMO1mlkwunTMSV_!!16104995.jpg",
        endTime: "2020-04-05 00:00:00"
    },
    {
        title: "燃气灶聚火防风节能罩1个装",
        pid: "10011",
        price: "78.8",
        task_count: 5,
        order_count: 3,
        is_img: -1,
        img: "https://img.alicdn.com/imgextra/i2/2201461853628/O1CN01MPmb751cffWxj0RQj_!!2201461853628.jpg",
        endTime: "2020-04-06 00:00:00"
    },
    {
        title: "秋季宝宝贝雷帽潮儿童无檐帽子",
        pid: "10012",
        price: "30.6",
        task_count: 8,
        order_count: 3,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i2/2200722366111/O1CN01dMWUQ01v0syDahB8U_!!2200722366111.jpg",
        endTime: "2020-04-07 00:00:00"
    },
    {
        title: "美甲套装7件套+随机样品",
        pid: "10013",
        price: "138.8",
        task_count: 8,
        order_count: 6,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i3/2206377044743/O1CN010rzUCW1kuL91Ypiv8_!!2206377044743.jpg",
        endTime: "2020-04-08 00:00:00"
    },
    {
        title: "秋季儿童贝雷帽宝宝英伦复古风",
        pid: "10014",
        price: "38.8",
        task_count: 8,
        order_count: 7,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i3/2200722366111/O1CN01gOVMfa1v0syH5NrmA_!!2200722366111.jpg",
        endTime: "2020-04-05 00:00:00"
    },
    {
        title: "300积分调理肠胃益生菌1盒",
        pid: "10015",
        price: "38.8",
        task_count: 8,
        order_count: 2,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i2/2136231456/O1CN01UVDOe11MctHLJKokD_!!2136231456.jpg",
        endTime: "2020-04-09 00:00:00"
    },
    {
        title: "安太医男用延时湿巾3片",
        pid: "10016",
        price: "38.8",
        task_count: 8,
        order_count: 2,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i2/2207599770596/O1CN0102EkNk1GH0et8StCB_!!2207599770596.jpg",
        endTime: "2020-04-12 00:00:00"
    },
    {
        title: "多用途万能胶*1桶",
        pid: "10017",
        price: "38.8",
        task_count: 8,
        order_count: 2,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i4/811742228/O1CN01atB2z21SKT2RBKVe6_!!811742228.png",
        endTime: "2020-04-13 00:00:00"
    },
    {
        title: "送本品轮子*1+毛巾两条",
        pid: "10018",
        price: "28.8",
        task_count: 8,
        order_count: 1,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i2/2207416718671/O1CN01NTL1k12DvMsxPAm29_!!2207416718671.jpg",
        endTime: "2020-04-14 00:00:00"
    },
    {
        title: "本品麻将一颗+积分500",
        pid: "10019",
        price: "100",
        task_count: 8,
        order_count: 2,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i4/3335310022/O1CN01nNwSBm1C27FdhtfZZ_!!3335310022.jpg",
        endTime: "2020-04-15 00:00:00"
    },
    {
        title: "本品麻将一颗+积分500",
        pid: "10020",
        price: "88",
        task_count: 8,
        order_count: 3,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i4/817042911/O1CN01CVmZ731XNHXTpBiKT_!!817042911.jpg",
        endTime: "2020-04-15 00:00:00"
    },
    {
        title: "晒图-椰壳清洁布不伤手",
        pid: "10021",
        price: "30.6",
        task_count: 8,
        order_count: 3,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i2/811742228/O1CN01q04GiB1SKT1vIJPAh_!!811742228.jpg",
        endTime: "2020-04-16 00:00:00"
    },
    {
        title: "秋季新款女宝宝画家帽儿童鸭舌",
        pid: "10022",
        price: "59.8",
        task_count: 8,
        order_count: 3,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i3/2200722366111/O1CN01I9iKfJ1v0syDaQO5B_!!2200722366111.jpg",
        endTime: "2020-04-17 00:00:00"
    },
    {
        title: "隔热垫绿色圆形1个",
        pid: "10023",
        price: "88.8",
        task_count: 8,
        order_count: 7,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i2/1058862643/O1CN01jLBTCm1VOXOsAwwrL_!!1058862643.jpg",
        endTime: "2020-04-18 00:00:00"
    },
    {
        title: "秋季宝宝帽子儿童渔夫帽冬保暖",
        pid: "10024",
        price: "78.2",
        task_count: 8,
        order_count: 7,
        is_img: 1,
        img: "https://img.alicdn.com/imgextra/i3/2200722366111/O1CN01a40TyW1v0syD482nR_!!2200722366111.jpg",
        endTime: "2020-04-18 00:00:00"
    },
]

const category = [{
        "id": 19,
        "short_name": "居家",
        "long_name": "居家用品",
        "products": [{
                "img": "https://img.alicdn.com/imgextra/i4/811742228/O1CN01da3dZI1SKT2l6OGA2_!!811742228.png",
                "pa_id": 859974,
                "activity_type": 1,
                "title": "晒图*2-本品内衣洗衣液1瓶",
                "task_number": 12,
                "shop_type": "1",
                "price": 29.9,
                "t_id": 1506202,
                "current_price": 0,
                "order_count": 1,
                "task_count": 2,
                "is_img": 1,
                "is_remote": -1,
                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i2/2206676603700/O1CN01wlBfIr1dCe10JkS7d_!!2206676603700.jpg",
                "pa_id": 859974,
                "activity_type": 1,
                "title": "晒图*2-本品电脑支架",
                "task_number": 12,
                "shop_type": "1",
                "price": 29.9,
                "t_id": 1506202,
                "current_price": 0,
                "order_count": 1,
                "task_count": 2,
                "is_img": 1,
                "is_remote": -1,
                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i3/2208206851690/O1CN01c1a0EG1OM3xc1u6VA_!!2208206851690.jpg",
                "pa_id": 859399,

                "activity_type": 1,
                "title": "晒图2张-厨房挂式垃圾桶*1",
                "task_number": 15,
                "shop_type": "2",
                "price": 28.4,
                "t_id": 1505061,
                "current_price": 0,
                "order_count": 1,
                "task_count": 3,
                "is_img": 1,
                "is_remote": -1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i4/811742228/O1CN01atB2z21SKT2RBKVe6_!!811742228.png",
                "pa_id": 859303,
                "activity_type": 1,
                "title": "5张晒图(视频）-本品洁厕",
                "task_number": 10,
                "shop_type": "1",
                "price": 9.9,
                "t_id": 1504850,
                "current_price": 0,
                "order_count": 1,
                "task_count": 4,
                "is_img": 1,
                "is_remote": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i4/2604100874/O1CN01d4Geba1IKKlmaT4Al_!!2604100874.jpg",
                "pa_id": 858833,
                "activity_type": 1,
                "title": "三层加厚医用外科无菌口罩10个",
                "task_number": 6,
                "shop_type": "2",
                "price": 13.8,
                "t_id": 1503836,
                "current_price": 0,
                "order_count": 2,
                "task_count": 3,
                "is_img": 1,
                "is_remote": -1,


            },
            {
                "img": "https://img.alicdn.com/imgextra/i1/897792365/O1CN01ymxNRF1TLDJBNtCWb_!!897792365.jpg",
                "pa_id": 858835,

                "activity_type": 1,
                "title": "发5卷医用橡皮膏",
                "task_number": 4,
                "shop_type": "2",
                "price": 13.8,
                "t_id": 1503829,
                "current_price": 0,
                "order_count": 2,
                "task_count": 5,
                "is_img": 1,
                "is_remote": -1,


            }
        ]
    },
    {
        "id": 17,
        "short_name": "母婴",
        "long_name": "母婴用品",
        "products": [{
                "img": "https://img.alicdn.com/imgextra/i3/3326244235/O1CN012oTqhh1h9fx0GDPWb_!!3326244235.jpg",
                "pa_id": 860051,

                "activity_type": 1,
                "title": "儿童夏季短袖",
                "task_number": 6,
                "shop_type": "1",
                "price": 30,
                "t_id": 1506368,
                "current_price": 0,
                "order_count": 1,
                "task_count": 3,
                "is_img": -1,
                "is_remote": -1,

                "sell_type": 2
            },
            {
                "img": "https://img.alicdn.com/imgextra/i4/2171442715/O1CN01aVI96T1VvVviLLgql_!!2171442715.jpg",
                "pa_id": 859218,

                "activity_type": 1,
                "title": "马克杯一个+随机样品 ",
                "task_number": 1,
                "shop_type": "1",
                "price": 51,
                "t_id": 1504672,
                "current_price": 0,
                "order_count": 2,
                "task_count": 5,
                "is_img": -1,
                "is_remote": -1,

                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i3/3326244235/O1CN012oTqhh1h9fx0GDPWb_!!3326244235.jpg",
                "pa_id": 859529,

                "activity_type": 1,
                "title": "儿童夏季短袖",
                "task_number": 6,
                "shop_type": "1",
                "price": 30,
                "t_id": 1505311,
                "current_price": 0,
                "order_count": 1,
                "task_count": 2,
                "is_img": -1,
                "is_remote": -1,


            },
            {
                "img": "https://img.alicdn.com/imgextra/i1/2200724987085/O1CN010wDoKB22Cyjtbsutm_!!2200724987085.png",
                "pa_id": 859926,

                "activity_type": 1,
                "title": "美甲7件套+随机样品 ",
                "task_number": 1,
                "shop_type": "1",
                "price": 25,
                "t_id": 1506126,
                "current_price": 0,
                "order_count": 6,
                "task_count": 10,
                "is_img": -1,
                "is_remote": -1,

                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i4/702310225/O1CN01fRh1T01DX5hTPajjU_!!702310225.jpg",
                "pa_id": 860276,

                "activity_type": 1,
                "title": "正品84消毒液500ml",
                "task_number": 8,
                "shop_type": "1",
                "price": 18.9,
                "t_id": 1506923,
                "current_price": 0,
                "order_count": 1,
                "task_count": 2,
                "is_img": 1,
                "is_remote": -1,

                "sell_type": 1
            }
        ]
    },
    {
        "id": 21,
        "short_name": "美食",
        "long_name": "美食生鲜",
        "products": [{
                "img": "https://img.alicdn.com/bao/uploaded/i1/3247223599/O1CN01nGA6HF1cSO2HPi8MA_!!3247223599-0-lubanu-s.jpg",
                "pa_id": 859983,

                "activity_type": 1,
                "title": "晒图本品DIY饼皮月饼预拌粉",
                "task_number": 1,
                "shop_type": "1",
                "price": 6.8,
                "t_id": 1506225,
                "current_price": 0,
                "order_count": 1,
                "task_count": 100,
                "is_img": 1,
                "is_remote": -1,

                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i3/3301060590/O1CN014bZLb31GEGI2VlTS4_!!3301060590.jpg",
                "pa_id": 860039,

                "activity_type": 1,
                "title": "蛋黄酥1盒",
                "task_number": 5,
                "shop_type": "1",
                "price": 29.9,
                "t_id": 1506352,
                "current_price": 0,
                "order_count": 1,
                "task_count": 6,
                "is_img": 1,
                "is_remote": -1,


            },
            {
                "img": "https://img.alicdn.com/imgextra/i3/811742228/O1CN01UQEjD11SKT2iyIRgH_!!811742228.png",
                "pa_id": 860079,

                "activity_type": 1,
                "title": "晒图5张冲泡本品豆奶粉一袋",
                "task_number": 12,
                "shop_type": "1",
                "price": 19.9,
                "t_id": 1506454,
                "current_price": 0,
                "order_count": 1,
                "task_count": 7,
                "is_img": 1,
                "is_remote": -1,


            },
            {
                "img": "https://img.alicdn.com/imgextra/i1/2200551781395/O1CN0124oZqW1MAx7ZwR6cN_!!2200551781395.jpg",
                "pa_id": 860199,

                "activity_type": 1,
                "title": "本品蜜薯2斤",
                "task_number": 12,
                "shop_type": "1",
                "price": 28.8,
                "t_id": 1506690,
                "current_price": 0,
                "order_count": 1,
                "task_count": 2,
                "is_img": -1,
                "is_remote": -1,

                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i2/921654724/O1CN014qfIZ31kldcPGvymA_!!921654724.jpg",
                "pa_id": 860202,

                "activity_type": 1,
                "title": "3套芝麻酱套装（热干面套装）",
                "task_number": 3,
                "shop_type": "2",
                "price": 26.8,
                "t_id": 1506703,
                "current_price": 0,
                "order_count": 7,
                "task_count": 10,
                "is_img": -1,
                "is_remote": -1,

                "sell_type": 1
            }
        ]
    },
    {
        "id": 14,
        "short_name": "女装",
        "long_name": "时尚女装",
        "products": [{
                "img": "https://img.alicdn.com/imgextra/i2/2200685271546/O1CN01LLn8Ky1NI6vhe5Ylk_!!2200685271546.jpg",
                "pa_id": 859087,
                "activity_type": 1,
                "title": "抖音同款短袖",
                "task_number": 3,
                "shop_type": "2",
                "price": 35,
                "t_id": 1504353,
                "current_price": 0,
                "order_count": 6,
                "task_count": 7,
                "is_img": -1,
                "is_remote": -1,
            },
            {
                "img": "https://img.alicdn.com/imgextra/i3/2236116767/O1CN01Mzdfu81zrKn4VqXBo_!!2236116767.jpg",
                "pa_id": 859097,
                "activity_type": 1,
                "title": "抖音同款短袖", 
                "task_number": 3,
                "shop_type": "2",
                "price": 35.5,
                "t_id": 1504323,
                "current_price": 9.9,
                "order_count": 6,
                "task_count": 7,
                "is_img": -1,
                "is_remote": -1,
            },
            {
                "img": "https://img.alicdn.com/imgextra/i2/2200806668913/O1CN01lAL8XP2FiCkE4dTmB_!!2200806668913.jpg",
                "pa_id": 860053,

                "activity_type": 1,
                "title": "晒图5张-防夹手安全门挡*1",
                "task_number": 3,
                "shop_type": "1",
                "price": 45,
                "t_id": 1506376,
                "current_price": 0,
                "order_count": 1,
                "task_count": 2,
                "is_img": 1,
                "is_remote": 1,

                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i3/690156596/O1CN01xNNdj11yb13FJureo_!!690156596.jpg",
                "pa_id": 859868,

                "activity_type": 1,
                "title": "晒图本品＋400积分",
                "task_number": 1,
                "shop_type": "2",
                "price": 72,
                "t_id": 1506010,
                "current_price": 0,
                "order_count": 1,
                "task_count": 1,
                "is_img": -1,
                "is_remote": -1,
                "integral": 400,
                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i1/2206610809334/O1CN01SFJnxA2Ip1UKLC2us_!!2206610809334.jpg",
                "pa_id": 859135,

                "activity_type": 1,
                "title": "舒适短袖",
                "task_number": 7,
                "shop_type": "1",
                "price": 35,
                "t_id": 1504469,
                "current_price": 0,
                "order_count": 1,
                "task_count": 2,
                "is_img": -1,
                "is_remote": -1,


            },
            {
                "img": "https://img.alicdn.com/imgextra/i2/2201422459993/O1CN01NRzNhm2NgqSRJtABO_!!2201422459993.jpg",
                "pa_id": 859935,

                "activity_type": 1,
                "title": "如图  1罐野生黑枸杞",
                "task_number": 3,
                "shop_type": "1",
                "price": 392,
                "t_id": 1506137,
                "current_price": 0,
                "order_count": 3,
                "task_count": 4,
                "is_img": -1,
                "is_remote": -1,

                "sell_type": 1
            }
        ]
    },
    {
        "id": 15,
        "short_name": "男装",
        "long_name": "精品男装",
        "products": [{
                "img": "https://img.alicdn.com/imgextra/i1/3243367340/O1CN015E5i5w245ljcj81dl_!!3243367340.jpg",
                "pa_id": 858427,

                "activity_type": 1,
                "title": "过滤毒素竹子水烟筒1个",
                "task_number": 7,
                "shop_type": "2",
                "price": 5.5,
                "t_id": 1503130,
                "current_price": 0,
                "order_count": 8,
                "task_count": 9,
                "is_img": -1,
                "is_remote": -1,

                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i1/3243367340/O1CN015E5i5w245ljcj81dl_!!3243367340.jpg",
                "pa_id": 859812,

                "activity_type": 1,
                "title": "过滤毒素竹子水烟筒1个",
                "task_number": 8,
                "shop_type": "2",
                "price": 5.5,
                "t_id": 1505839,
                "current_price": 0,
                "order_count": 9,
                "task_count": 10,
                "is_img": -1,
                "is_remote": -1,

                "sell_type": 2
            }
        ]
    },
    {
        "id": 16,
        "short_name": "内衣",
        "long_name": "内衣裤袜",
        "products": [{
                "img": "https://img.alicdn.com/imgextra/i4/2247067269/O1CN01yk251623ZFc2P6h1G_!!2247067269.jpg",
                "pa_id": 860343,
                "activity_type": 1,
                "title": "单件纯黑小吊带内衣",
                "task_number": 1,
                "shop_type": "2",
                "price": 132,
                "t_id": 1506969,
                "current_price": 0,
                "order_count": 7,
                "task_count": 10,
                "is_img": -1,
                "is_remote": -1,

                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i4/2247067269/O1CN01yk251623ZFc2P6h1G_!!2247067269.jpg",
                "pa_id": 860345,
                "activity_type": 1,
                "title": "单件黑色小吊带内衣",
                "task_number": 1,
                "shop_type": "2",
                "price": 117,
                "t_id": 1506971,
                "current_price": 0,
                "order_count": 3,
                "task_count": 10,
                "is_img": -1,
                "is_remote": -1,
                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i4/2247067269/O1CN01yk251623ZFc2P6h1G_!!2247067269.jpg",
                "pa_id": 860346,
                "activity_type": 1,
                "title": "单件黑色小吊带内衣",
                "task_number": 1,
                "shop_type": "2",
                "price": 78,
                "t_id": 1506972,
                "current_price": 0,
                "order_count": 5,
                "task_count": 6,
                "is_img": -1,
                "is_remote": -1,
                "sell_type": 1
            },
            {
                "img": "https://gd2.alicdn.com/imgextra/i2/2208414191569/O1CN01P21Cm51NSe2KrudKn_!!2208414191569.jpg_400x400.jpg",
                "pa_id": 860186,
                "activity_type": 1,
                "title": "晒图5张-本品内裤*1",
                "task_number": 2,
                "shop_type": "2",
                "price": 16.9,
                "t_id": 1506667,
                "current_price": 0,
                "order_count": 5,
                "task_count": 7,
                "is_img": 1,
                "is_remote": -1,
                "sell_type": 2
            },
            {
                "img": "https://gd2.alicdn.com/imgextra/i2/2208414191569/O1CN01P21Cm51NSe2KrudKn_!!2208414191569.jpg_400x400.jpg",
                "pa_id": 860188,
                "activity_type": 1,
                "title": "晒图5张-本品内裤*1",
                "task_number": 2,
                "shop_type": "2",
                "price": 16.9,
                "t_id": 1506670,
                "current_price": 0,
                "order_count": 4,
                "task_count": 4,
                "is_img": 1,
                "is_remote": -1,
                "sell_type": 2
            }
        ]
    },
    {
        "id": 18,
        "short_name": "护肤",
        "long_name": "护肤彩妆",
        "products": [{
                "img": "https://img.alicdn.com/imgextra/i1/267904596/O1CN01pMVWCj1jp0vXdUDYf_!!267904596.jpg",
                "pa_id": 858956,

                "activity_type": 1,
                "title": "1片泡泡面膜+500积分",
                "task_number": 1,
                "shop_type": "2",
                "price": 12.9,
                "t_id": 1504054,
                "current_price": 0,
                "order_count": 6,
                "task_count": 50,
                "is_img": 1,
                "is_remote": -1,
                "integral": 500,
                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i4/13846824/O1CN0120HRE6xTtHVND5u_!!13846824.jpg",
                "pa_id": 854958,

                "activity_type": 1,
                "title": "晒图本品-简装化妆刷10支套装",
                "task_number": 16,
                "shop_type": "2",
                "price": 163,
                "t_id": 1496121,
                "current_price": 0,
                "order_count": 1,
                "task_count": 1,
                "is_img": -1,
                "is_remote": -1,


            },
            {
                "img": "https://img.alicdn.com/imgextra/i2/2207946083013/O1CN0147zHND1Y7zwPpjzV0_!!2207946083013.png",
                "pa_id": 857734,

                "activity_type": 1,
                "title": "U2B优图碧紧致记忆眼霜小样",
                "task_number": 1,
                "shop_type": "1",
                "price": 17.9,
                "t_id": 1501849,
                "current_price": 0,
                "order_count": 2,
                "task_count": 3,
                "is_img": -1,
                "is_remote": 1,

                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i2/2206528937774/O1CN01K7TYOb27IXcxYP8ey_!!2206528937774.jpg",
                "pa_id": 860275,

                "activity_type": 1,
                "title": "锦春堂益韵油全身通用按摩肩颈",
                "task_number": 3,
                "shop_type": "1",
                "price": 118,
                "t_id": 1506843,
                "current_price": 0,
                "order_count": 3,
                "task_count": 4,
                "is_img": 1,
                "is_remote": -1,

                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i2/1807644923/O1CN01qc8atQ1mEmRLA7WWy_!!1807644923.jpg",
                "pa_id": 859838,

                "activity_type": 1,
                "title": "防晒喷雾1支",
                "task_number": 5,
                "shop_type": "2",
                "price": 29,
                "t_id": 1505956,
                "current_price": 0,
                "order_count": 1,
                "task_count": 3,
                "is_img": -1,
                "is_remote": -1,

                "sell_type": 1
            }
        ]
    },
    {
        "id": 20,
        "short_name": "鞋包",
        "long_name": "鞋包配饰",
        "products": [{
                "img": "https://img.alicdn.com/imgextra/i3/717744671/O1CN01PvBZoE1kNMdA8FTlg_!!717744671.jpg",
                "pa_id": 859946,

                "activity_type": 1,
                "title": "本品-大圆圈耳环欧美风饰品百搭",
                "task_number": 1,
                "shop_type": "2",
                "price": 14.9,
                "t_id": 1506149,
                "current_price": 0,
                "order_count": 1,
                "task_count": 2,
                "is_img": -1,
                "is_remote": -1,

                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i2/2067340088/O1CN01c1HtLX1CWLSo2gkyW_!!2067340088.jpg",
                "pa_id": 859288,

                "activity_type": 1,
                "title": "蝴蝶戒指 颜色随机",
                "task_number": 1,
                "shop_type": "2",
                "price": 12,
                "t_id": 1504821,
                "current_price": 0,
                "order_count": 4,
                "task_count": 7,
                "is_img": -1,
                "is_remote": -1,

                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i1/2947157351/O1CN01YDI7IN24Ao5THXx2y_!!2947157351.jpg",
                "pa_id": 859811,

                "activity_type": 1,
                "title": "白色纯银樱花耳钉（只发白色）",
                "task_number": 3,
                "shop_type": "2",
                "price": 12,
                "t_id": 1505837,
                "current_price": 0,
                "order_count": 1,
                "task_count": 1,
                "is_img": -1,
                "is_remote": -1,


            },
            {
                "img": "https://img.alicdn.com/imgextra/i2/3635289785/O1CN014f7jPe2M9a6YSpAQD_!!3635289785.jpg",
                "pa_id": 859883,

                "activity_type": 1,
                "title": "鹿王羊绒线一团颜色随机",
                "task_number": 1,
                "shop_type": "2",
                "price": 50,
                "t_id": 1506029,
                "current_price": 0,
                "order_count": 1,
                "task_count": 2,
                "is_img": -1,
                "is_remote": -1,

                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i1/3635289785/O1CN01TOWABV2M9a6Me5sDk_!!3635289785.jpg",
                "pa_id": 859886,

                "activity_type": 1,
                "title": "赠送鹿王羊绒线一团颜色随机",
                "task_number": 1,
                "shop_type": "2",
                "price": 54,
                "t_id": 1506035,
                "current_price": 0,
                "order_count": 1,
                "task_count": 1,
                "is_img": -1,
                "is_remote": -1,

                "sell_type": 1
            }
        ]
    },
    {
        "id": 22,
        "short_name": "车品",
        "long_name": "文体车品",
        "products": [{
                "img": "https://img.alicdn.com/imgextra/i4/811742228/O1CN01sjTJev1SKT2AYcgjT_!!811742228.jpg",
                "pa_id": 859873,

                "activity_type": 1,
                "title": "晒图-签字笔4支",
                "task_number": 3,
                "shop_type": "2",
                "price": 12,
                "t_id": 1506015,
                "current_price": 0,
                "order_count": 1,
                "task_count": 2,
                "is_img": 1,
                "is_remote": 1,

                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i2/2279030001/O1CN01ocqc0e1BsV07J09Rs_!!2279030001.jpg",
                "pa_id": 860147,

                "activity_type": 1,
                "title": "400张草稿纸3支荧光笔",
                "task_number": 1,
                "shop_type": "1",
                "price": 8.5,
                "t_id": 1506578,
                "current_price": 0,
                "order_count": 13,
                "task_count": 20,
                "is_img": 1,
                "is_remote": -1,

                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i1/3116567345/O1CN01br4ENd2483hgRHdF6_!!3116567345.jpg",
                "pa_id": 859650,

                "activity_type": 1,
                "title": "不需要晒图＋500积分",
                "task_number": 1,
                "shop_type": "2",
                "price": 97,
                "t_id": 1505567,
                "current_price": 0,
                "order_count": 1,
                "task_count": 1,
                "is_img": -1,
                "is_remote": 1,
                "integral": 500,
                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i3/690156596/O1CN01xNNdj11yb13FJureo_!!690156596.jpg",
                "pa_id": 859867,

                "activity_type": 1,
                "title": "晒图本品＋400积分",
                "task_number": 1,
                "shop_type": "2",
                "price": 88,
                "t_id": 1506009,
                "current_price": 0,
                "order_count": 1,
                "task_count": 1,
                "is_img": -1,
                "is_remote": -1,
                "integral": 400,
                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i2/2465086808/O1CN017gVMxr20A6xfdliyO_!!2465086808.jpg",
                "pa_id": 859870,

                "activity_type": 1,
                "title": "晒图本品一颗＋500积分",
                "task_number": 1,
                "shop_type": "2",
                "price": 75,
                "t_id": 1506012,
                "current_price": 0,
                "order_count": 1,
                "task_count": 5,
                "is_img": 1,
                "is_remote": 1,
                "integral": 500,
                "sell_type": 1
            }
        ]
    },
    {
        "id": 23,
        "short_name": "数码",
        "long_name": "数码家电",
        "products": [{
                "img": "https://img.alicdn.com/imgextra/i2/629523806/O1CN01sTrpft1dzC1xBFg8R_!!629523806.jpg",
                "pa_id": 860131,

                "activity_type": 1,
                "title": "maxcare计时器",
                "task_number": 1,
                "shop_type": "2",
                "price": 20,
                "t_id": 1506560,
                "current_price": 0,
                "order_count": 1,
                "task_count": 1,
                "is_img": -1,
                "is_remote": 1,


            },
            {
                "img": "https://img.alicdn.com/imgextra/i2/629523806/O1CN01sTrpft1dzC1xBFg8R_!!629523806.jpg",
                "pa_id": 860133,

                "activity_type": 1,
                "title": "maxcare计时器",
                "task_number": 1,
                "shop_type": "2",
                "price": 20,
                "t_id": 1506562,
                "current_price": 0,
                "order_count": 3,
                "task_count": 5,
                "is_img": -1,
                "is_remote": 1,


            },
            {
                "img": "https://img.alicdn.com/imgextra/i2/629523806/O1CN01sTrpft1dzC1xBFg8R_!!629523806.jpg",
                "pa_id": 860134,

                "activity_type": 1,
                "title": "maxcare计时器",
                "task_number": 1,
                "shop_type": "2",
                "price": 20,
                "t_id": 1506563,
                "current_price": 0,
                "order_count": 2,
                "task_count": 5,
                "is_img": -1,
                "is_remote": 1,


            }
        ]
    },
    {
        "id": 24,
        "short_name": "其他",
        "long_name": "其他商品",
        "products": [{
                "img": "https://gd3.alicdn.com/imgextra/i3/431497884/O1CN016PqAJ7286v9wFTcQC_!!431497884.jpg",
                "pa_id": 857680,

                "activity_type": 1,
                "title": "晒图5张-300积分+标识牌*1",
                "task_number": 3,
                "shop_type": "2",
                "price": 17.5,
                "t_id": 1501738,
                "current_price": 0,
                "order_count": 4,
                "task_count": 5,
                "is_img": 1,
                "is_remote": -1,
                "integral": 300,
                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i2/4254333799/O1CN01krAzV41dvzDLjS5n9_!!4254333799.jpg",
                "pa_id": 859282,

                "activity_type": 1,
                "title": "无火香薰精油家用卧室",
                "task_number": 1,
                "shop_type": "1",
                "price": 49.9,
                "t_id": 1504806,
                "current_price": 0,
                "order_count": 5,
                "task_count": 5,
                "is_img": -1,
                "is_remote": 1,

                "sell_type": 1
            },
            {
                "img": "https://gd3.alicdn.com/imgextra/i3/3245166678/O1CN01gVqhQ01zCZRXVcq3C_!!3245166678.jpg",
                "pa_id": 859720,

                "activity_type": 1,
                "title": "晒图-700积分+密封条",
                "task_number": 1,
                "shop_type": "2",
                "price": 9.74,
                "t_id": 1505681,
                "current_price": 0,
                "order_count": 1,
                "task_count": 1,
                "is_img": 1,
                "is_remote": -1,
                "integral": 700,
                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i1/3245166678/O1CN01FC6svH1zCZTNyizYP_!!3245166678.gif",
                "pa_id": 859731,

                "activity_type": 1,
                "title": "晒图-700积分+密封条",
                "task_number": 1,
                "shop_type": "2",
                "price": 13,
                "t_id": 1505704,
                "current_price": 0,
                "order_count": 4,
                "task_count": 7,
                "is_img": 1,
                "is_remote": -1,
                "integral": 700,
                "sell_type": 1
            },
            {
                "img": "https://img.alicdn.com/imgextra/i4/3245166678/O1CN01mzlDAg1zCZT4TEePy_!!3245166678.jpg",
                "pa_id": 859734,

                "activity_type": 1,
                "title": "晒图-700积分+密封条",
                "task_number": 1,
                "shop_type": "2",
                "price": 9.8,
                "t_id": 1505709,
                "current_price": 0,
                "order_count": 7,
                "task_count": 8,
                "is_img": 1,
                "is_remote": -1,
                "integral": 700,
                "sell_type": 1
            }
        ]
    }
]

const orders = [
    {state:"2", name:"已领取", num:2, data:[
        {
            id:21, shop_name:"匠石独韵", state:1, stateText:"已领取", title :"秋季宝宝贝雷帽潮儿童无檐帽子", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i2/2200722366111/O1CN01dMWUQ01v0syDahB8U_!!2200722366111.jpg"
        },
        {
            id:22, shop_name:"匠石独韵", state:1, stateText:"已领取", title :"秋季新款女宝宝画家帽儿童鸭舌", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i3/2200722366111/O1CN01I9iKfJ1v0syDaQO5B_!!2200722366111.jpg"
        },
        {
            id:23, shop_name:"匠石独韵", state:1, stateText:"已领取", title :"秋季儿童贝雷帽宝宝英伦复古风", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i3/2200722366111/O1CN01gOVMfa1v0syH5NrmA_!!2200722366111.jpg"
        },
        {
            id:24, shop_name:"匠石独韵", state:1, stateText:"已领取", title :"秋季宝宝帽子儿童渔夫帽冬保暖", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i3/2200722366111/O1CN01a40TyW1v0syD482nR_!!2200722366111.jpg"
        },
        {
            id:25, shop_name:"匠石独韵", state:1, stateText:"已领取", title :"视频晒图5张+29元雨伞", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://gd3.alicdn.com/imgextra/i3/2779037368/O1CN01DA80t824IalgEZfqX_!!2779037368.jpg_400x400.jpg"
        },
    ]},
    {state:"3", name:"已提交", num:3, data:[
        {
            id:31, shop_name:"匠石独韵", state:1, stateText:"已提交", title :"10包抽纸-限时抢购", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i3/931057900/O1CN01Wj7Sac28EFTwOMLx4_!!931057900.jpg"
        },
        {
            id:32, shop_name:"匠石独韵", state:1, stateText:"已提交", title :"简易折叠写字桌", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i4/1087692074/O1CN01ZNwFlF1RBw0ghBQhc_!!1087692074.jpg"
        },
        {
            id:33, shop_name:"匠石独韵", state:1, stateText:"已提交", title :"六神花露水-限时抢购", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i4/1037143081/O1CN01MsseCw1Yd8nanBztW_!!1037143081.jpg"
        },
        {
            id:34, shop_name:"匠石独韵", state:1, stateText:"已提交", title :"一次性纸碗-限时抢购", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i1/2203204267741/O1CN01x9ZTQu273QVYzD6nH_!!2203204267741.jpg"
        },
        {
            id:35, shop_name:"匠石独韵", state:1, stateText:"已提交", title :"精品毛巾2条-限时抢购", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i4/645273380/O1CN01qgN3QK1aq5HbA4uhC_!!645273380.jpg"
        },
        {
            id:36, shop_name:"匠石独韵", state:1, stateText:"已提交", title :"10个家用衣架-限时抢购", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i3/3370777002/O1CN01NblG6321axq9G1Bim_!!3370777002.jpg"
        },
        {
            id:7, shop_name:"匠石独韵", state:1, stateText:"已提交", title :"芒果1斤-限时抢购", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i3/2200687420292/O1CN01oQ4RwS1E1mGAmps9u_!!2200687420292.jpg"
        },
    ]},
    {state:"4", name:"待审核", num:4, data:[
        {
            id:41, shop_name:"匠石独韵", state:1, stateText:"待审核", title :"抖音同款短袖", orderNo:"1052622083563417922", price: 57, actPrice: 48.8, create_time: "2020-04-07 12:21", finish_time: "2020-04-10 12:48", url:"https://img.alicdn.com/imgextra/i3/2236116767/O1CN01Mzdfu81zrKn4VqXBo_!!2236116767.jpg"
        },
        {
            id:42, shop_name:"匠石独韵", state:1, stateText:"待审核", title :"晒图5张-防夹手安全门挡*1", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i2/2200806668913/O1CN01lAL8XP2FiCkE4dTmB_!!2200806668913.jpg"
        },
        {
            id:43, shop_name:"匠石独韵", state:1, stateText:"待审核", title :"空军一号supreme鞋贴纸", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i4/2100050759/O1CN01XOB4VQ1HTfDT06zRE_!!2100050759.jpg"
        },
        {
            id:44, shop_name:"匠石独韵", state:1, stateText:"待审核", title :"抖音同款短袖", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i3/2236116767/O1CN01ICOTCw1zrKn5hkVY0_!!2236116767.jpg"
        },
    ]},
    {state:"5", name:"已完成", num:5, data:[
        {
            id:51, shop_name:"匠石独韵", state:1, stateText:"已完成", title :"小花戒指 颜色随机", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i1/2067340088/O1CN01jcxSvQ1CWLStpR85m_!!2067340088.jpg"
        },
        {
            id:52, shop_name:"匠石独韵", state:1, stateText:"已完成", title :"maxcare计时器", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i2/629523806/O1CN01sTrpft1dzC1xBFg8R_!!629523806.jpg"
        },
        {
            id:53, shop_name:"匠石独韵", state:1, stateText:"已完成", title :"过滤毒素竹子水烟筒1个", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i1/3243367340/O1CN015E5i5w245ljcj81dl_!!3243367340.jpg"
        },
        {
            id:54, shop_name:"匠石独韵", state:1, stateText:"已完成", title :"猕猴桃1斤", orderNo:"1052622083563417922", price: 177, actPrice: 168, create_time: "2020-04-06 12:21", finish_time: "2020-04-06 12:28", url:"https://img.alicdn.com/imgextra/i3/2200687420292/O1CN01ADgZpl1E1mGRZxEgU_!!2200687420292.jpg"
        }
    ]}
]
module.exports = {
    "advertisingList": advertisingList,
    "products": products,
    "category": category,
    "orders": orders
}