<template>
	<view class="mine tn-safe-area-inset-bottom" style="height: 100%;overflow-y: scroll;background-color: #ffffff;">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="none">
			<view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
				<view class="custom-nav__back">
					<view class="tn-icon-flower-fill  animate__animated animate__heartBeat" style="font-size: 50rpx;color: deeppink;">
						<!-- <tn-badge backgroundColor="#E72F8C" fontColor="#FFFFFF" :absolute="true" :translateCenter="false">
              <text>12</text>
            </tn-badge> -->
					</view>
				</view>
			</view>
		</tn-nav-bar>

		<view class="top-backgroup">
			<image src='https://tnuiimage.tnkjapp.com/my/my-bg4.png' mode='widthFix' class='backgroud-image'></image>
		</view>

		<view class="about__wrap" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<!-- 图标logo/头像 -->
			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-bottom" style="margin-top: -450rpx;">
				<view class="justify-content-item">
					<view class="tn-flex tn-flex-col-center tn-flex-row-left">
						<view class="logo-pic tn-shadow">
							<view class="logo-image" @click="gouser">
								<view class="tn-shadow-blur"
									style="background-image:url('https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699053-assets/web-upload/8645ea3a-e0a9-4422-8364-cc5ede305c9f.jpeg');width: 110rpx;height: 110rpx;background-size: cover;">
								</view>
							</view>
						</view>
						<view class="tn-padding-right">
							<view class="tn-padding-right tn-padding-left-sm">
								<text class="tn-color-cat tn-text-xl tn-text-bold">小周要开心！</text>
								<text class=" tn-round tn-text-xs tn-bg-red tn-color-white tn-margin-left-sm"
									style="padding: 10rpx 20rpx;">
									未实名
								</text>
							</view>
							<view class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">
								<text class="tn-color-gray">Akaibiu</text>
								<text class="tn-color-gray tn-padding-left-sm tn-text-sm">177****1107</text>
							</view>
						</view>

					</view>
				</view>
				<view class="justify-content-item">
					<view class="tn-icon-right tn-color-gray">
					</view>
				</view>
			</view>

			<!-- 没有授权，则显示这个授权按钮-->
			<view class="tn-flex tn-flex-row-between">
				<view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center">
					<tn-button @click="goLogintn" shape="round" backgroundColor="#1D2541" fontColor="#ffffff" padding="20rpx 0" width="40%"
						shadow>
						<text class="tn-icon-wechat tn-padding-right-xs tn-text-xl"></text>
						<text class="">授权登录</text>
					</tn-button>
				</view>
			</view>

			<view class="tn-margin-top-xl">
				<view class="button-vip tn-flex tn-flex-row-between tn-flex-col-center tn-shadow-blur"
					style="background: linear-gradient(-120deg, #3E445A, #31374A, #2B3042, #262B3C);">

					<view class="tn-margin-left">
						<view class='title' style="color: #F1C68E;">
							<text class="tn-text-bold tn-text-xl">1030 积分</text>
							<text class="tn-icon-vip-text tn-text-center"
								style="position: absolute;margin: -22rpx 0 0 0;font-size: 92rpx;"></text>
						</view>
						<view class='tn-color-white tn-text-sm tn-padding-top-sm'>邀请好友赚取更多积分</view>
					</view>
					<view class="tn-margin-right">
						<tn-button shape="round" backgroundColor="#F1C68E" fontColor="#634738" padding="10rpx 0"
							width="160rpx" shadow open-type="share">
							<!-- <text class="tn-icon-vip tn-padding-right-sm tn-text-lg"></text> -->
							<text class="tn-text-bold">邀 请</text>
						</tn-button>
					</view>

				</view>
			</view>

			<!-- 方式15 start-->
			<view class="tn-flex tn-flex-row-between tn-bg-white about-shadow tn-margin-top-xl">
				<view class="tn-padding-sm tn-margin-xs"  @click="refresh">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center tn-margin-left">
						<view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur"
							style="background-color: #F3F2F7;color: #7C8191;">
							<view class="tn-icon-discover"></view>
						</view>
						<view class="tn-text-center">
							<text class="tn-text-ellipsis">Z-paging刷新</text>
						</view>
					</view>
				</view>
				<view class="tn-padding-sm tn-margin-xs" @click="personalInfoSetting">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur"
							style="background-color: #F3F2F7;color: #7C8191;">
							<view class="tn-icon-topics"></view>
						</view>
						<view class="tn-text-center">
							<text class="tn-text-ellipsis">个人信息设置</text>
						</view>
					</view>
				</view>
				<view class="tn-padding-sm tn-margin-xs" @click="swiperTab">
					<view
						class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center tn-margin-right">
						<view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur"
							style="background-color: #F3F2F7;color: #7C8191;">
							<view class="tn-icon-money"></view>
						</view>
						<view class="tn-text-center">
							<text class="tn-text-ellipsis">全屏轮播</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 方式15 end-->

			<!-- 方式20 start-->
			<view class="tn-flex">
				<view class="tn-flex-1 about-shadow tn-bg-white" style="margin: 50rpx 15rpx 0 0;padding: 30rpx 0;"
					@click="goOrder">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view
							class="icon20__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-orangered tn-color-white">
							<view class="tn-icon-computer-fill"></view>
						</view>
						<view class="tn-text-center" style="font-size: 30rpx;">
							<view class="tn-text-ellipsis">列表(全屏滑动轮播)</view>
						</view>
					</view>
				</view>
				<view class="tn-flex-1 about-shadow tn-bg-white" style="margin: 50rpx 0 0 15rpx;padding: 30rpx 0;"
					@click="form">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view
							class="icon20__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-purplered tn-color-white">
							<view class="tn-icon-moon-fill"></view>
						</view>
						<view class="tn-text-center" style="font-size: 30rpx;">
							<view class="tn-text-ellipsis">表单提交(带验证)</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 更多信息-->
			<!-- 方式12 start-->
			<view class="about-shadow tn-margin-top-lg tn-padding-top-sm tn-padding-bottom-sm tn-bg-white">
				<view class="tn-flex tn-flex-row-center tn-radius tn-padding-top">
					<view class="tn-padding-sm tn-margin-xs tn-radius"  @click="goLogin">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<view
								class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-bg-grey--light">
								<view class="tn-icon-cube tn-color-cat"></view>
							</view>
							<view class="tn-text-center">
								<text class="tn-text-ellipsis">登录</text>
							</view>
						</view>
					</view>
					<view class="tn-padding-sm tn-margin-xs tn-radius" @click="loginTwo">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<view
								class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-bg-grey--light">
								<view class="tn-icon-signpost tn-color-cat"></view>
							</view>
							<view class="tn-text-center">
								<text class="tn-text-ellipsis">登录</text>
							</view>
						</view>
					</view>
					<view class="tn-padding-sm tn-margin-xs tn-radius"  @click="goFlex">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<view
								class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-bg-grey--light">
								<view class="tn-icon-constellation tn-color-cat"></view>
							</view>
							<view class="tn-text-center">
								<text class="tn-text-ellipsis">Flex完美布局</text>
							</view>
						</view>
					</view>
					<view class="tn-padding-sm tn-margin-xs tn-radius" @click="discovery">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<view
								class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-bg-grey--light">
								<view class="tn-icon-refund tn-color-cat"></view>
							</view>
							<view class="tn-text-center">
								<text class="tn-text-ellipsis">发现壁纸</text>
							</view>
						</view>
					</view>
				</view>
				<view class="tn-flex tn-flex-row-center tn-radius tn-padding-top">
					<view class="tn-padding-sm tn-margin-xs tn-radius" @click="goCard">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<view
								class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-bg-grey--light">
								<view class="tn-icon-order tn-color-cat"></view>
							</view>
							<view class="tn-text-center">
								<text class="tn-text-ellipsis">特效卡片</text>
							</view>
						</view>
					</view>
					<view class="tn-padding-sm tn-margin-xs tn-radius" @click="cashout">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<view
								class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-bg-grey--light">
								<view class="tn-icon-calendar tn-color-cat"></view>
							</view>
							<view class="tn-text-center">
								<text class="tn-text-ellipsis">提现模板</text>
							</view>
						</view>
					</view>
					<view class="tn-padding-sm tn-margin-xs tn-radius" @click="dataTotal">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<view
								class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-bg-grey--light">
								<view class="tn-icon-map tn-color-cat"></view>
							</view>
							<view class="tn-text-center">
								<text class="tn-text-ellipsis">数据统计</text>
							</view>
						</view>
					</view>
					<view class="tn-padding-sm tn-margin-xs tn-radius" @click="goRecords">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<view
								class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-bg-grey--light">
								<view class="tn-icon-set tn-color-cat"></view>
							</view>
							<view class="tn-text-center">
								<text class="tn-text-ellipsis">记录列表</text>
							</view>
						</view>
					</view>
				</view>
			</view>


			<!-- 更多信息-->
			<view class="about-shadow tn-margin-top-lg tn-padding-top-sm tn-padding-bottom-sm">
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
					<view class="tn-flex tn-flex-col-center">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
							style="color: #7C8191;">
							<view class="tn-icon-science-fill"></view>
						</view>
						<view class="tn-margin-left-sm tn-flex-1">甜蜜修勾</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
					<view class="tn-flex tn-flex-col-center">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
							style="color: #7C8191;">
							<view class="tn-icon-light-fill"></view>
						</view>
						<view class="tn-margin-left-sm tn-flex-1">甜蜜修勾</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
					<view class="tn-flex tn-flex-col-center">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
							style="color: #7C8191;">
							<view class="tn-icon-safe-fill"></view>
						</view>
						<view class="tn-margin-left-sm tn-flex-1">使用协议</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
			</view>
			<view class="about-shadow tn-margin-top-lg tn-margin-bottom-lg tn-padding-top-sm tn-padding-bottom-sm">
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
					<button class="tn-flex tn-flex-col-center tn-button--clear-style" open-type="contact">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
							style="color: #7C8191;">
							<view class="tn-icon-wechat-fill"></view>
						</view>
						<view class="tn-flex tn-flex-row-between" style="width: 100%;">
							<view class="tn-margin-left-sm">联系客服</view>
							<view class="tn-color-gray tn-icon-right"></view>
						</view>
					</button>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
					<button class="tn-flex tn-flex-col-center tn-button--clear-style" open-type="feedback">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
							style="color: #7C8191;">
							<view class="tn-icon-message-fill"></view>
						</view>
						<view class="tn-flex tn-flex-row-between" style="width: 100%;">
							<view class="tn-margin-left-sm">提交反馈</view>
							<view class="tn-color-gray tn-icon-right"></view>
						</view>
					</button>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30" data-number="18266666666" @click="goLodash">
					<view class="tn-flex tn-flex-col-center">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
							style="color: #7C8191;">
							<view class="tn-icon-tel-circle-fill"></view>
						</view>
						<view class="tn-margin-left-sm tn-flex-1">lodash</view>
					</view>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30" data-number="18266666666" @click="tachSupport">
					<view class="tn-flex tn-flex-col-center">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
							style="color: #7C8191;">
							<view class="tn-icon-tel-circle-fill"></view>
						</view>
						<view class="tn-margin-left-sm tn-flex-1">技术支持</view>
						<view
							class="tn-margin-left-sm tn-color-cat tn-text-sm tn-padding-left-xs tn-padding-right-xs tn-bg-gray--light tn-round">
							177****1107</view>
					</view>
				</tn-list-cell>
				
			</view>
		</view>
		<!-- <view class='tn-tabbar-height'></view> -->
	</view>
</template>

<script>
	export default {
		name: 'Mine',
		data() {
			return {}
		},
		onShow() {
			// console.log(this.vuex_frenidList, 'Your hearting frenid');
		},
		methods: {
			// 测试LODASH.JS
			goLodash(){
				uni.navigateTo({
					url:'lodash/lodash'
				})
			},
			// 订单全屏轮播
			goOrder() {
				uni.navigateTo({
					url: '/pages/mine/order/order'
				})
			},
			// 全屏轮播带选项卡
			swiperTab(){
				uni.navigateTo({
					url:'/pages/mine/swiperTab/swiperTab'
				})
			},
			// 发现壁纸
			discovery(){
				uni.navigateTo({
					url:'/pages/mine/discovery/discovery'
				})
			},
			// 图鸟登录模板
			goLogintn(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			// 表单页面
			form() {
				uni.navigateTo({
					url: '/pages/mine/form/form'
				})
			},
			// 用户信息
			gouser() {
				uni.navigateTo({
					url: '/pages/mine/userinfo/userinfo'
				})
			},
			// 刷新
			refresh() {
				uni.navigateTo({
					url: '/pages/mine/refresh/refresh'
				})
			},
			// 个人信息设置
			personalInfoSetting(){
				uni.navigateTo({
					url:'/pages/mine/personalSetting/personalSetting'
				})
			},
			// 登录
			goLogin(){
				uni.navigateTo({
					url:'/pages/mine/login/login'
				})
			},
			// 登录模板
			loginTwo(){
				uni.navigateTo({
					url:'/pages/mine/loginTwo/loginTwo'
				})
			},
			// 技术支持
			tachSupport(){
				uni.navigateTo({
					url:'/pages/mine/techSupport/techSupport'
				})
			},
			// Flex完美布局
			goFlex(){
				uni.navigateTo({
					url:'/pages/mine/Flex/Flex'
				})
			},
			// 特效卡片
			goCard(){
				uni.navigateTo({
					url:'/pages/mine/card/card'
				})
			},
			// 数据统计
			dataTotal(){
				uni.navigateTo({
					url:'/pages/mine/totalData/totalData'
				})
			},
			// 提现
			cashout(){
				uni.navigateTo({
					url:'/pages/mine/cashOut/cashOut'
				})
			},
			// 记录列表
			goRecords(){
				uni.navigateTo({
					url:'/pages/mine/records/records'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	//  --------------------------animate使用案例代码   
	.animate__heartBeat {
		animation-duration: 1500ms; //控制动画执行时间
		animation-iteration-count: infinite;
	}
	//  --------------------------animate使用案例代码   
	.mine {
		max-height: 100vh;
	}
	/* 底部安全边距 start*/
	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
		height: calc(140rpx + constant(safe-area-inset-bottom));
	}
	.tn-color-cat {
		color: #1D2541;
	}
	.tn-bg-cat {
		background-color: #1D2541;
	}
	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;
		&__back {
			margin: auto 5rpx;
			font-size: 40rpx;
			margin-right: 10rpx;
			flex-basis: 5%;
			width: 100rpx;
			position: absolute;
		}
	}
	/* 自定义导航栏内容 end */
	/* 顶部背景图 end */
	/* 用户头像 start */
	.logo-image {
		width: 110rpx;
		height: 110rpx;
		position: relative;
		overflow: hidden;
		border-radius: 50%;
	}
	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border: 8rpx solid rgba(255, 255, 255, 0.05);
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		overflow: hidden;
		// background-color: #FFFFFF;
	}
	/* 页面 start*/
	.about-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}
	.about {
		&__wrap {
			position: relative;
			z-index: 1;
			margin: 20rpx 30rpx;
		}
	}
	/* 页面 end*/
	/* 图标容器15 start */
	.icon15 {
		&__item {
			width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;
			&--icon {
				width: 100rpx;
				height: 100rpx;
				font-size: 60rpx;
				border-radius: 50%;
				margin-bottom: 18rpx;
				position: relative;
				z-index: 1;
				&::after {
					content: " ";
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					left: 0;
					bottom: 0;
					border-radius: inherit;
					opacity: 1;
					transform: scale(1, 1);
					background-size: 100% 100%;
				}
			}
		}
	}
	/* 图标容器12 start */
	.tn-three {
		position: absolute;
		top: 50%;
		right: 50%;
		bottom: 50%;
		left: 50%;
		transform: translate(-38rpx, -16rpx) rotateX(30deg) rotateY(20deg) rotateZ(-30deg);
		text-shadow: -1rpx 2rpx 0 #f0f0f0, -2rpx 4rpx 0 #f0f0f0, -10rpx 20rpx 30rpx rgba(0, 0, 0, 0.2);
	}
	.icon20 {
		&__item {
			width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;
			&--icon {
				width: 100rpx;
				height: 100rpx;
				font-size: 60rpx;
				border-radius: 50%;
				margin-bottom: 18rpx;
				position: relative;
				z-index: 1;
				&::after {
					content: " ";
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					left: 0;
					bottom: 0;
					border-radius: inherit;
					opacity: 1;
					transform: scale(1, 1);
					background-size: 100% 100%;
					background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
				}
			}
		}
	}
	.button-vip {
		width: 100%;
		height: 150rpx;
		border-radius: 15rpx;
		position: relative;
		z-index: 1;
		&::after {
			content: " ";
			position: absolute;
			z-index: -1;
			width: 100%;
			height: 100%;
			left: 0;
			bottom: 0;
			border-radius: inherit;
			opacity: 1;
			transform: scale(1, 1);
			background-size: 100% 100%;
			background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
		}
	}
	/* 图标容器12 start */
	.icon12 {
		&__item {
			width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;
			&--icon {
				width: 15rpx;
				height: 15rpx;
				font-size: 50rpx;
				border-radius: 50%;
				margin-bottom: 38rpx;
				position: relative;
				z-index: 1;
				&::after {
					content: " ";
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					left: 0;
					bottom: 0;
					border-radius: inherit;
					opacity: 1;
					transform: scale(1, 1);
					background-size: 100% 100%;
				}
			}
		}
	}
	/* 图标容器1 start */
	.icon1 {
		&__item {
			// width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;
			&--icon {
				width: 40rpx;
				height: 40rpx;
				font-size: 40rpx;
				border-radius: 50%;
				position: relative;
				z-index: 1;
				&::after {
					content: " ";
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					left: 0;
					bottom: 0;
					border-radius: inherit;
					opacity: 1;
					transform: scale(1, 1);
					background-size: 100% 100%;
					background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
				}
			}
		}
	}
	/* 图标容器1 end */
	/* 顶部背景图 start */
	.top-backgroup {
		height: 450rpx;
		z-index: -1;
		.backgroud-image {
			width: 100%;
			height: 450rpx;
			// z-index: -1;
		}
	}
	/* 顶部背景图 end */
</style>
