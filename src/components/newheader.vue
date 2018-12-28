<template>
	<div>
		<ul>
			<router-link tag="li" to="/new/detail" activeClass="light">新闻</router-link>
			<router-link tag="li" to="/new/trailer" activeClass="light">预告片</router-link>
			<router-link tag="li" to="/new/toplist" activeClass="light">排行榜</router-link>
			<router-link tag="li" to="/new/review" activeClass="light">影评</router-link>
		</ul>
	</div>
</template>
<script></script>
<style scoped lang="scss" >
	ul{
		height:40px;
		display:flex;
		width: 100%;
		li{
			line-height:40px;
			flex:1;
			text-align:center;
		}
	}
	.light{
		color:blue;
	}

</style>