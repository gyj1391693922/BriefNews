<template>
	<view class="content">
		<view class="top-background">
			<view class="top-bar">
				<view class="top-bar-left" @tap="backOne()">
					<view class="back-img">
						返回
					</view>
				</view>
				<view class="top-bar-right">
					<view class="text" @tap="backOne()">
						更多
					</view>
				</view>
			</view>
		</view>
		<view class="main">
			<view class="user">
				<view class="user-top">
					<view class="user-head">
						<view>
							<image src="../../static/images/PS作业.jpg"></image>
						</view>
					</view>
					<view class="user-title">
						用户
					</view>
					<view class="user-email">
						111111@qq.com
					</view>
				</view>
				<view class="user-detail">
					<!-- <view class="user-detail-list"
							v-for="(item,index) in userDetails"
							:key="index"
					>
					</view> -->
					<view class="user-detail-list">
						男
					</view>
					<view class="user-detail-list">
						20岁
					</view>
					<view class="user-detail-list">
						9月29日
					</view>
					<view class="user-detail-list">
						处女座
					</view>
				</view>
				<view class="user-say">
					<view class="user-say-context">
						于暴雨中行走，伞是倒挂在天空的船
					</view>
				</view>
			</view>
		</view>
		<view class="bottom-btn">
			<view class="bottom-editDetail">
				编辑资料
			</view>
			<view class="bottom-call">
				发消息
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
			backOne: function(){
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		padding-top: var(--status-bar-height);
		width: 100%;
		height: 100vh;
		.top-background{
			height: 40%;
			background-image: url("../../static/images/PS作业.jpg");
			background-size: cover;
		}
	}
	.top-bar{
		position: fixed;
		z-index: 101;
		top: 20rpx;
		left: 0;
		width: 100%;
		height: 88rpx;
		box-sizing: border-box;
		padding-top: var(--status-bar-height);
		.top-bar-left{
			float: left;
			padding-left: $uni-spacing-col-base;
			.back-img{
				color: white;
				font-weight: 600;
				background-color: rgba(83, 83, 83, 0.3);
				padding: 5rpx 15rpx;
				border-radius: $uni-border-radius-base;
				border: 1px solid rgba(244, 244, 244, 0.5);
			}
		}
		.top-bar-right{
			float: right;
			padding-right: 14rpx;
			.text{
				color: white;
				font-weight: 600;
				background-color: rgba(83, 83, 83, 0.3);
				padding: 5rpx 15rpx;
				border-radius: $uni-border-radius-base;
				border: 1px solid rgba(244, 244, 244, 0.5);
			}
		}
	}
	.top-bar-left{
		top: 30rpx;
	}
	.main{
		background-color: white;
		height: 900rpx;
		width: 100%;
		margin-top: -50px;
		border-radius: $uni-border-radius-lg $uni-border-radius-lg 0 0;
		.user{
			.user-head{
				padding: 32rpx;
				width: 32rpx;
				float: left;
				image{
					height: 200rpx;
					width: 200rpx;
					border-radius: 200rpx;
				}
			}
			.user-detail{
				border-top: 1px solid $uni-border-color;
				display: flex;
				margin-top: 100rpx;
				padding-top: 20rpx;
				padding-bottom: 20rpx;
				padding-left: 40rpx;
				.user-detail-list{
					padding: 0 20rpx;
					font-size: 24rpx;
					color: rgba(122,122,122, 1.0);
					border-right: 1px solid rgba(122,122,122, 0.6);
				}
			}
			.user-say{
				border-top: 1px solid $uni-border-color;
				padding-top: 20rpx;
				.user-say-context{
					padding: 0 60rpx;
					font-size: 24rpx;
				}
			}
		}
		.user-title{
			padding: 80rpx 280rpx 0;
			font-size: 34rpx;
		}
		.user-email{
			padding: 16rpx 280rpx;
			font-size: 24rpx;
			color: rgba(122,122,122, 1.0);
		}
	}
	.bottom-btn{
		position: fixed;
		bottom: 0;
		padding: 20px;
		.bottom-editDetail{
			height: 100rpx;
			width: 300rpx;
			border: 1px solid rgba(188,188,188, 1.0);
			border-radius: 15rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			float: left;
		}
		.bottom-call{
			height: 100rpx;
			width: 300rpx;
			float: right;
			border: 1px solid rgba(212, 189, 40, 1.0);
			border-radius: 15rpx;
			// color: white;
			background-color: rgba(255, 228, 49,1);
			display: flex;
			justify-content: center;
			align-items: center;
			margin-left: 60rpx;
		}
	}
</style>
