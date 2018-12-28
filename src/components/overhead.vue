<template>
	<div>
		<button @click="handleClick()" v-show="isShow">↑</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				isShow:false
			}
		},
		methods:{
			handleScroll: function () {
				if(document.documentElement.scrollTop>=500){
					this.isShow = true
				}else{
					this.isShow= false
				}
			},
			handleClick: function () {
				document.documentElement.scrollTop = 0
			}
		},
		mounted(){
			window.onscroll = this.handleScroll
		}
	}
</script>

<style scoped>

button {
		font-size: 20px;
		display: inline-block;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		position: fixed;
		bottom: 50px;
		right: 10px;
		background: #eee;
		border: 1px solid #aaa;
		z-index: 10;
		color: #ccc;
	}
</style>