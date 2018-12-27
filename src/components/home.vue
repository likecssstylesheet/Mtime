<template>
	<div>
		<search></search>
		<contenthot></contenthot>
	</div>
</template>

<script>
import axios from 'axios'
import search from './search'
import contenthot from './contenthot'
	export default {
		components:{
			search,
			contenthot
		},
		mounted(){
		axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201812271128272188'
			).then(res=>{
				console.log(res)
			})
		}
	}

</script>

<style scoped>


</style>