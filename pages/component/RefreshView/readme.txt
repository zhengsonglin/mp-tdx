1.demo地址 https://blog.csdn.net/qq_19707091/article/details/80929449
    git：https://github.com/the-liuchao/RefreshDemo
2用法
"usingComponents": {
    "refresh-view": "../component/RefreshView/refresh-view"
  }

  <scroll-view scroll-y bindtouchstart='handletouchstart' bindtouchmove='handletouchmove' bindtouchend='handletouchend' bindtouchcancel='handletouchcancel' style="height:calc(100vh - {{CustomBar}}px - 100rpx - 90rpx);margin-top:90rpx;">
		<refresh-view id='refreshView' backgroundColor="#fff" bind:onRefresh="onPullDownRefresh" refreshHeight="100" bind:onPullState="_pullState" />
            <view>1</view>
            <view>1</view>
            <view>1</view>
            <view>1</view>
        </refresh-view>
    </scroll-view> 