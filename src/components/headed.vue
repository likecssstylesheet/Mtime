<template>
	<div v-show="this.$store.state.isShow">
		<img src="/static/images/logo_mtime.png">
		<ul>
			<router-link tag="li" to="/home" activeClass="underline"><a href="#">首页</a></router-link>
			<router-link tag="li" activeClass="underline" to="/ticket"><a href="#">购票</a></router-link>
			<router-link tag="li" to="/mall" activeClass="underline"><a href="#">商城</a></router-link>
			<router-link tag="li" to="/new" activeClass="underline"><a href="#">发现</a></router-link>
			<router-link tag="li" to="/member" activeClass="underline"><a href="#"><i class="iconfont">&#xe615;</i></a></router-link>
		</ul>
	</div>
</template>

<script >
	export default {

	}
</script>

<style scoped lang="scss">
	div{
		background-color: #1c2635;
		width: 100%;
		height: 50px;
		line-height: 50px;
		img{
			width: 20%;
			float: left;
			margin-top: 10px 
		}

		ul{
			float: right;
			width: 80%;
			li{
				display: inline-block;
				height: 50px;
				line-height: 50px;
				text-align: center;
				width:18%;
				a{
					color: #bbb;
					display: inline-block;
					height: 100%;
				}
				i{
					font-size: 20px
				}
			}
		}
	}
	.underline a{
		color:#fff;
		border-bottom: 2px solid #fff;
		box-sizing:border-box;
	}
</style>