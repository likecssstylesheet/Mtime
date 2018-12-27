<template>
	<div>
		<ul class="main">
			<router-link tag="li" to="/home"><a href="#">首页</a></router-link>
			<router-link tag="li" to="/ticket"><a href="#">购票</a></router-link>
			<router-link tag="li" to="/mall"><a href="#">商城</a></router-link>
			<router-link tag="li" to="/new"><a href="#">发现</a></router-link>
			<router-link tag="li" to="/member"><a href="#">我的</a></router-link>
		</ul>
		<div id="footer">
			<ul>
				<li>pc端</li>
				<li>客户端下载</li>
				<li>意见反馈</li>
				<li>帮助中心</li>
			</ul>
			<p>
			<span class="logo"></span>
			<span class="yingye"></span>
			</p>
			<p class="coding">Copyright 2006-2018 Mtime.com Inc. All rights reserved</p>
		</div>
	</div>
</template>

<script >
	export default {

	}
</script>

<style scoped lang="scss">

	.main{
		display: flex;
		height: 40px;
		line-height: 40px;
		li{
			flex:1;
			text-align: center;
			a{
				color: #0074c5;
			}
		}
	}
	#footer{
		background:#eee;
		height: 100px;
		ul{
			display: flex;
			line-height: 30px;
			height: 30px;
			li{
				flex:1;
				text-align: center;
			}
		}
		p{
			text-align: center;
			span{
				width: 20%;
				height: 30px;
				display: inline-block;
			}
			.logo{
				background:url('../assets/logo_mtime.png') center no-repeat;
				background-size:contain
			}
			.yingye{
				background:url('../assets/mark.jpg') center no-repeat;
				background-size:contain
			}
		}
		.coding{
			font-size: 13px;
			color: #ccc
		}
	}
</style>