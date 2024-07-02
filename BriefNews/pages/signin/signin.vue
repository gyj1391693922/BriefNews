<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-right" @click="toSignUp()">
				<view class="text">
					注册
				</view>
			</view>
		</view>
		<view class="logo">
			<image src="/static/UI/indexUI/logo.png"></image>
		</view>
		<view class="main">
			<view class="title">
				登录
			</view>
			<view class="slogan">
				您好,欢迎来到 简讯
			</view>
			<view class="inputs">
				<input type="text" placeholder="用户名/邮箱" class="user" placeholder-style="color:#aaa;font-weight:400;" @blur="getUser">
				<input type="password" placeholder="密码" class="pwd" placeholder-style="color:#aaa;font-weight:400;" @blur="getPwd">
			</view>
			<view class="tips" v-if="this.userOrPwdIsError">
				输入用户名或密码错误
			</view>
			<view class="tips" v-if="this.userOrPwdIsNull">
				请输入用户名或密码
			</view>
		</view>
		<view class="submit" @click="login()">
			登录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userOrPwdIsError: false,
				userOrPwdIsNull: false,
				user: '',
				pwd: '',
			}
		},
		onLoad() {
			
		},
		methods: {
			// 跳转注册页
			toSignUp: function(){
				uni.navigateTo({
					url:"../signup/signup"
				})
			},
			// 获取用户名
			getUser: function(e){
				this.user = e.detail.value;
				if(this.user == ""){
					this.userOrPwdIsNull = true;
				}else{
					this.userOrPwdIsNull = false;
				}
				console.log(this.user)
			},
			// 获取密码
			getPwd: function(e){
				this.pwd = e.detail.value;
				if(this.pwd == ""){
					this.userOrPwdIsNull = true;
				}else{
					this.userOrPwdIsNull = false;
				}
				console.log(this.pwd)
			},
			// 登录提交
			login: function(){
				if(this.user && this.pwd){
					console.log("提交")
					this.userOrPwdIsNull = false;
					uni.navigateTo({
						url:"../index/index"
					})
				}else{
					this.userOrPwdIsNull = true;
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "../../components/css/mycss.scss";
.content {
	padding-top: var(--status-bar-height);
}
// .top-bar{
// 	position: fixed;
// 	z-index: 1001;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 88rpx;
// 	box-sizing: border-box;
// 	padding-top: var(--status-bar-height);
// 	background:$uni-bg-color;
// 	.top-bar-right{
// 		float: right;
// 		padding-right: 32rpx;
// 		.text{
// 			font-size: $uni-font-size-lg;
// 			font-weight: 500;
// 			color: $uni-text-color;
// 			line-height: 88rpx;
// 		}
// 	}
// }
.logo{
	text-align: center;
	image{
		padding-top: 256rpx;
		width: 194rpx;
		height: 92rpx;
		margin: 0 auto;
	}
}
.main{
	padding: 54rpx $uni-spacing-row-lg 120rpx;
	// width: 100%;
	.title{
		font-size: 56rpx;
		font-weight: 500;
		color: $uni-text-color;
		line-height: 80rpx;
	}
	.slogan{
		font-size: 40rpx;
		color: $uni-text-color-grey;
		line-height: 56rpx;
	}
	.inputs{
		padding-top: 48rpx;
		input{
			padding-top: 8rpx;
			height: 88rpx;
			font-size: $uni-font-size-lg;
			font-weight: 500;
			color: $uni-text-color;
			line-height: 44rpx;
			border-bottom: 1px solid $uni-border-color;
		}
	}
	.tips{
		float: left;
		font-size: $uni-font-size-lg;
		color: $uni-color-warning;
		line-height: 56rpx;
	}
}
.submit{
	margin: 0 auto;
	width: 520rpx;
	height: 96rpx;
	background: $uni-color-primary;
	box-shadow: 0rpx 50rpx 32rpx -36rpx rgba(255, 228, 49, 0.4);
	border-radius: $uni-border-radius-lg;
	font-size: $uni-font-size-lg;
	font-weight: 500;
	color: $uni-text-color;
	line-height: 96rpx;
	text-align: center;
}
</style>
