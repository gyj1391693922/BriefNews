<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @click="goUserHome()">
				<image src="/static/images/PS作业.jpg"  />
			</view>
			<view class="top-bar-center">
				<image src="../../static/UI/indexUI/logo.png" class="logo"></image>
			</view>
			<view class="top-bar-right">
				<view class="search" @click="search()">
					<image src="../../static/UI/indexUI/search.png"></image>
				</view>
				<view class="add">
					<image src="../../static/UI/indexUI/add.png"></image>
				</view>
			</view>
		</view>
		<view class="main">
			<view class="friends">
				<view class="friend-list">
					<view class="friend-list-l">
						<text class="tip">
							1
						</text>
						<image src="/static/UI/indexUI//newFirend.png">
							
						</image>
					</view>
					<view class="friend-list-r">
						<view class="top">
							<view class="name">
								好友申请
							</view>
							<view class="time">
								13:43
							</view>
						</view>
						<view class="news">
							xxx 请求添加您为好友
						</view>
					</view>
				</view>
			</view>
			<view 
				class="friends" 
				v-for="(fri,index) in this.friends" 
				:keys="index"
				@click="toNews()">
				<view class="friend-list">
					<view class="friend-list-l">
						<text class="tip">
							{{fri.tip}}
						</text>
						<image :src="fri.imgurl">
							
						</image>
					</view>
					<view class="friend-list-r">
						<view class="top">
							<view class="name">
								{{fri.name}}
							</view>
							<view class="time">
								{{changeTime(fri.time)}}
							</view>
						</view>
						<view class="news">
							{{fri.news}}
						</view>
					</view>
				</view>
			</view>
			<view class="main-bottom">
				
			</view>
		</view>
		<view class="bottom-bar">
			<view class="bottom-title">
				<view class="bottom-btn">
					列表
				</view>
				<view class="bottom-btn">
					好友
				</view>
				<view class="bottom-btn">
					动态
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	//测试数据
	import datas from '../../components/js/datas.js'
	// 时间转换和判断
	import myFun from '../../components/js/myFunction.js'
	export default {
		data() {
			return {
				friends: [],
			}
		},
		onLoad() {
			this.getFirends();
		},
		methods: {
			changeTime: function(date){
				return myFun.dateTime(date);
			},
			getFirends: function(){
				this.friends = datas.friends();
				console.log(this.friends)
			},
			search: function(){
				uni.navigateTo({
					url:"../search/search"
				})
			},
			goUserHome: function(){
			    uni.navigateTo({
			        url: "../userHome/userHome"
			    })
			},
			toNews: function(){
				uni.navigateTo({
				    url: "../news/news"
				})
			},
		},
	}
</script>

<style lang="scss">
	@import "../../components/css/mycss.scss";
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: var(--status-bar-height);
		padding-bottom: $uni-spacing-col-base;
	}
	.top-bar{
		border-bottom: 1px solid $uni-border-color;
	}
	.main{
		padding: 88rpx $uni-spacing-col-base 0;
	}
	.friend-list{
		height: 96rpx;
		padding: 16rpx 0;
		.friend-list-l{
			position: relative;
			float:left;
			image{
				width: 96rpx;
				height: 96rpx;
				border-radius: $uni-border-radius-base;
				background-color: $uni-color-primary;
			}
			.tip{
				position: absolute;
				z-index: 10;
				top: -6rpx;
				left: 68rpx;
				min-width: 36rpx;
				height: 36rpx;
				background: $uni-color-warning;
				border-radius: $uni-border-radius-circle;
				font-size: $uni-font-size-sm;
				color: $uni-text-color-inverse;
				line-height: 36rpx;
				text-align: center;
			}
		}
		.friend-list-r{
			padding-left: 128rpx;
			.top{
				height: 50rpx;
				.name{
					float: left;
					font-size: 36rpx;
					font-weight: 400;
					color: $uni-text-color;
					line-height: 50rpx;
				}
				.time{
					float: right;
					font-size: $uni-font-size-sm;
					color: $uni-text-color-disable;
					line-height: 50rpx;
				}
			}
		}
		.news{
			font-size: $uni-font-size-base;
			color: $uni-text-color-grey;
			line-height: 40rpx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			overflow: hidden;
		}
	}
	.main-bottom{
		position: relative;
		bottom: 0;
		width: 100%;
		height: 69rpx;
		background: rgba(255,255,255,0.96);
		border-top: 1px solid $uni-border-color;
	}
	.bottom-bar{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		background: rgba(255,255,255,0.96);
		border-top: 1px solid $uni-border-color;
		z-index: 11;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.bottom-title{
		width: 80%;
		display: flex;
		justify-content: space-between;
	}
	.bottom-btn{
	}
	.bottom-btn-click{
		color: $uni-color-primary;
	}
</style>
