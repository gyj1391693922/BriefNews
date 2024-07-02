<template>
	<view class="content">
		<view class="top-bar">
			<view class="search-div">
				<image src="../../static/UI/indexUI/search.png" class="search-img"></image>
				<input type="search" placeholder="搜索用户/群" class="search" placeholder-style="color:#aaa;font-weight:400;">
			</view>
			<view class="top-bar-right" @click="index()">
				<view class="text">
					取消
				</view>
			</view>
		</view>
		<view class="main">
			<view class="search-user result">
				<view class="title">
					用户
				</view>
				<view class="list user">
					<image src="../../static/images/PS作业.jpg"></image>
					<view class="names">
						<view class="name">
							大力出奇迹
						</view>
						<view class="email">
							11@qq.com
						</view>
					</view>
					<view class="right-bt add">
						加好友
					</view>
				</view>
				
				<view class="list user">
					<image src="../../static/images/PS作业.jpg"></image>
					<view class="names">
						<view class="name">
							大力出奇迹
						</view>
						<view class="email">
							11@qq.com
						</view>
					</view>
					<view class="right-bt send">
						发消息
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			index: function(){
				uni.navigateTo({
					url:"../index/index"
				})
			}
		}
	}
</script>

<style lang="scss">
@import "../../components/css/mycss.scss";

.top-bar{
	background: rgba(255,255,255,0.96);
	border-bottom: 1px solid $uni-border-color;
	.search-div{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: -1;
		float:left;
		box-sizing: border-box;
		padding: 14rpx 118rpx 14rpx 32rpx;
	}
	.search{
		padding: 0 60rpx 0 12rpx;
		width: 530rpx;
		height: 60rpx;
		background: $uni-bg-color-grey;
		border-radius: 10rpx;
	}
	.search-img{
		position: absolute;
		right: 130rpx;
		top: 22rpx;
		width: 40rpx;
		height: 40rpx;
	}
}
.main{
	padding: 88rpx $uni-spacing-col-base;
	.result{
		padding-top: $uni-spacing-col-base;
		.title{
			font-size: 44rpx;
			font-weight: 600;
			color: $uni-text-color;
			line-height: 60rpx;
		}
		.list{
			width: 100%;
			padding: 20rpx 0;
			height: 80rpx;
			image{
				float: left;
				width: 80rpx;
				height: 80rpx;
				border-radius: $uni-border-radius-base;
			}
		}
		.names{
			float: left;
			padding-left: $uni-spacing-col-base;
		}
		.name{
			font-size: 36rpx;
			color: $uni-text-color;
			line-height: 50rpx;
		}
		.email{
			font-size: $uni-font-size-sm;
			color: $uni-text-color;
			line-height: 28rpx;
		}
		.right-bt{
			float: right;
			width: 120rpx;
			height: 48rpx;
			border-radius: 24rpx;
			font-size: $uni-font-size-sm;
			line-height: 45rpx;
			text-align: center;
			margin-top: 16rpx;
		}
		.send{
			background-color: $uni-color-primary;
			color: $uni-text-color;
		}
		.add{
			background-color: rgba(74,170,225,0.1);
			color: $uni-color-success;
		}
	}
}
</style>
