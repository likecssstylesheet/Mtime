<template>
	<div>
		<span>北京</span>
		<i></i>
		<p>影片/影院/影人,人你搜</p>
	</div>
</template>

<script >
	export default {
	}
</script>

<style scoped lang="scss">
	div{
		height: 60px;
		background-color: #f6f6f6;
		padding: 10px;
		box-sizing: border-box;
		p{
			display: inline-block;
			width: 80%;
			height: 40px;
			border-radius: 5px;
			float: right;
			padding-left:10%;
			line-height:40px;
			box-sizing: border-box; 
			background:url('/static/images/fangda.png') 10px 10px no-repeat #fff;
		}
		span{
			display: inline-block;
			height: 40px;
			line-height: 40px;
			font-size:20px;
		}
		i{
			display: inline-block;
			width: 3%;
			height: 20px;
			background:url('/static/images/i_city.png') center no-repeat;
		}
	}
</style>