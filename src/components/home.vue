<template>
	<div>
		<search></search>
		<contenthot></contenthot>
		<isbanner></isbanner>
		<hotday></hotday>
		<below></below>
	</div>
</template>

<script>
import axios from 'axios'
import search from './search'
import contenthot from './contenthot'
import isbanner from './isbanner'
import hotday from './hotday'
import below from './below'
	export default {
		components:{
			search,
			contenthot,
			isbanner,
			hotday,
			below
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