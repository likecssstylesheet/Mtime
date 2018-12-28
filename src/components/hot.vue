<template>
	<div>
		<header>
			<a href="#"></a>
			<div>
				<span>正在热映</span>
				<span>即将上映</span>
			</div>
		</header>
	</div>
</template>

<script >
	export default {
		beforeDestroy(){
			this.$store.commit('tabberHide')
		}

	}
</script>

<style scoped lang="scss">
	div{
		header{
			width: 100%;
			height: 50px;
			box-sizing: border-box;
			padding: 5px 10px;
			text-align: center;
			div{
				width: 60%;
				height: 40px;
				background-color: #909090;
				position: absolute;
				left: 50%;
				transform:translateX(-50%);
				border-radius: 20px;
				span{
					width: 48%;
					display: inline-block;
					height: 40px;
					line-height: 40px;
					text-align: center;
				}
			}
		}
	}	
</style>