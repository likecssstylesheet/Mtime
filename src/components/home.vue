<template>
	<div>
		<search></search>
	</div>
</template>

<script>
import axios from 'axios'
import search from './search'	
	export default {
		components:{
			search
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