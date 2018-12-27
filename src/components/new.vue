<template>
	<div>
		<newheader></newheader>
		<router-view>
			
		</router-view>
	</div>
</template>

<script >
	import newheader from './newheader'
	export default {
		components:{
			newheader
		}
	}
</script>

<style scoped>


</style>