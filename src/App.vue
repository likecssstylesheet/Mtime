<template>
  <div id="app">
  	
	<headed v-if="$store.state.isShow"></headed>
    <router-view></router-view>
  </div>
</template>

<script>
	import headed from './components/headed'
export default{
	components:{
		headed
	}
}

</script>

<style lang="scss">
*{
	padding: 0;
	margin: 0;
}
ul{
	li{
		list-style: none
	}
}
a{
	text-decoration: none
}
</style>
