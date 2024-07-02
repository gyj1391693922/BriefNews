<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @click="backOne()">
				<view class="back">
					返回 
				</view>
				<view class="user-name">
					大海
				</view>
			</view>
			<view class="top-bar-right">
				<view class="more">
					更多
				</view>
			</view>
		</view>
		<view class="main">
			<view class="main-background">
				<view class="main-the-news mine-says"
						v-for="(item,index) in this.userMsg"
				>
					<view :class="{ 'firend-head': item.from_id === 2, 'mine-head': item.from_id === 1 }">
						<image :src="item.img"></image>
					</view>
					<view :class="{ 'firend-say': item.from_id === 2, 'mine-say': item.from_id === 1 }">
						{{item.msg}}
					</view>
				</view>
				<view style="height: 120rpx;width: 29px;"></view>
			</view>

		</view>
		<view class="bottom-bar">
			<view class="say">
				表情
			</view>
			<view class="bottom-bar-input">
				<input class="bottom-bar-input-text" placeholder-style="color:#aaa;font-weight:400;">
			</view>
			<view class="send">
				更多
			</view>
		</view>
	</view>
</template>

<script>
	import datas from '../../components/js/datas.js'
	export default {
		data() {
			return {
				userMsg: {},
			}
		},
		onLoad() {
			this.getUserMsg();
		},
		methods: {
			backOne: function(){
				uni.navigateBack({
					delta: 1
				})
			},
			getUserMsg: function(){
				this.userMsg = datas.friendSays();
				console.log(this.userMsg);
				this.$nextTick(() => {
					this.scrollToBottom();
				});
			},
			scrollToBottom() {
				const query = uni.createSelectorQuery().in(this);
				query.select('.main-background').boundingClientRect(rect => {
					uni.pageScrollTo({
						scrollTop: rect.height
					});
				}).exec();
			}
		}
	}
</script>

<style lang="scss">
.content {
	padding-top: var(--status-bar-height);
}
.top-bar{
	position: fixed;
	z-index: 101;
	top: 0;
	left: 0;
	box-sizing: border-box;
	padding-top: var(--status-bar-height);
	background:rgba(245, 246, 250,1);
	width: 100%;
	height: 88rpx;
	.top-bar-left{
		position: relative;
		display: flex;
		float: left;
		padding-left: $uni-spacing-col-base;
		z-index: 102;
		.back{
			padding-top: 20rpx;
		}
		.user-name{
			padding-top: 20rpx;
			padding-left: 40rpx;
		}
	}
	.top-bar-right{
		float: right;
		padding-right: 14rpx;
		.more{
			padding-top: 20rpx;
		}
	}
}
.main{
	padding-top: 88rpx;
	width: 100%;
	height: 667px - 50px;
	.main-background{
		width: 100%;
		min-height: 100%;
		background-color: rgba(241, 241, 241, 1.0);
		// background-color: orange;
		.main-the-news{
			width: 100%;
			padding: 10px;
			min-height: 40px;
			display: flex;
			.firend-head{
				float: left;
				image{
					width: 40px;
					height: 40px;
					border-radius: 20px;
					background-color: rgba(39, 63, 68,1);
				}
			}
			.firend-say{
				min-width: 1%;
				max-width: 60%;
				min-height: 10px;
				padding: 15px 10px;
				margin-left: 10px;
				background-color: white;
				word-wrap: break-word;
				border-radius: 15px;
			}
			
			.mine-head{
				position: absolute;
				right: 10px;
				image{
					width: 40px;
					height: 40px;
					border-radius: 20px;
					background-color: rgba(39, 63, 68,1);
				}
			}
			.mine-say{
				position: absolute;
				right: 60px;
				min-width: 1%;
				max-width: 60%;
				min-height: 10px;
				padding: 15px 10px;
				margin-left: 50px;
				background-color: rgba(158, 188, 51, 1.0);
				word-wrap: break-word;
				color: white;
				border-radius: 15px;
			}
		}
	}
}
.bottom-bar{
	height: 80rpx;
	width: 100%;
	background-color: rgba(247, 247, 247, 1.0);
	position: fixed;
	display: flex;
	bottom: 0;
	border-top: 1px solid rgba(255, 255, 255, 1);
	.bottom-bar-input{
		display: flex;
		input{
			background-color: white;
			width: 540rpx;
			height: 50rpx;
			border-radius: 10rpx;
			padding-left: 20rpx;
			margin-top: 10rpx;
		}
	}
	.say{
		padding: 15rpx;
		float: left;
	}
	.send{
		padding: 15rpx;
		float: right;
	}
}
</style>
