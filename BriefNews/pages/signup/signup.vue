<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-right" @click="toSignIn()">
				<view class="text">
					登录
				</view>
			</view>
		</view>
		<view class="logo">
			<image src="/static/UI/indexUI/logo.png"></image>
		</view>
		<view class="main">
			<view class="title">
				注册
			</view>
			<view class="inputs">
				<input type="text" placeholder="取个名字" class="user" placeholder-style="color:#aaa;font-weight:400;" @input="getNickName">
				<input type="text" placeholder="请输入注册邮箱" class="user" placeholder-style="color:#aaa;font-weight:400;" @input="getEmail">
				<input type="password" placeholder="请设置密码" class="pwd" placeholder-style="color:#aaa;font-weight:400;" @input="getPwd">
			</view>
			<view class="tips" v-if="this.invalid">
				邮箱无效
			</view>
		</view>
		<view :class="[{submit:isok},{submit1:!isok}]" @click="signup()">
			注册
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				invalid: false,
				pwd: "",
				email: "",
				nickName: "",
				isok: false,
			}
		},
		methods: {
			// 校验登录信息
			signup: function(){
			},
			
			// 跳转登录
			toSignIn: function(){
				uni.navigateTo({
					url:"../signin/signin"
				})
			},
			getNickName: function(e){
				this.nickName = e.detail.value;
				this.isOk();
			},
			getEmail: function(e){
				// 判断是否为邮箱格式
				let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
				this.email = e.detail.value;
				if(this.email.length>0){
					if(reg.test(this.email)){
						this.invalid = false;
					}else{
						this.invalid = true;
						this.isOk();
					}
				}else{
					this.isOk();
				}
			},
			getPwd: function(e){
				this.pwd = e.detail.value;
				this.isOk();
			},
			//判断注册按钮
			isOk: function(){
				if(this.pwd.length > 5 && this.nickName && this.email){
					this.isok = true;
				}else{
					this.isok = false;
				}
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
	z-index: 1001;
	top: 0;
	left: 0;
	width: 100%;
	height: 88rpx;
	box-sizing: border-box;
	padding-top: var(--status-bar-height);
	background:$uni-bg-color;
	.top-bar-right{
		float: right;
		padding-right: 32rpx;
		.text{
			font-size: $uni-font-size-lg;
			font-weight: 500;
			color: $uni-text-color;
			line-height: 88rpx;
		}
	}
}
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
.submit1{
	margin: 0 auto;
	width: 520rpx;
	height: 96rpx;
	background: rgba(39,40,50,0.2);
	border-radius: $uni-border-radius-lg;
	font-size: $uni-font-size-lg;
	font-weight: 500;
	color: $uni-text-color-inverse;
	line-height: 96rpx;
	text-align: center;
}
</style>
