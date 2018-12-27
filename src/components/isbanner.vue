<template>
	<div>
		<img :src="banner" id="banner">
	</div>
</template>

<script >
	import axios from 'axios'
	export default {
		data(){
			return {
				banner:''
			}
		},
		mounted(){
			axios.get('/Service/callback.mi/PageSubArea/MallAreaFirstH5Url.api?t=20181227167982517').then(res=>{
				console.log(res)
				this.banner = res.data.areaFirst.image
			})
		}
	}
</script>

<style scoped lang="scss">
	#banner{
		width: 100%;
		margin-top: 10px
	}

</style>