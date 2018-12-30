<template>
	<div>
		<h2>今日热点</h2>
		<ul>
			<li v-for="data in datalist" :key="data.id" @click="handleDetails(data.id)">
				<img :src="data.img">
				<h3>{{data.title}}</h3>
				<span>{{data.desc}}</span>
				<p>2018-12-08 05:07:22</p>
			</li>
		</ul>
	</div>
</template>

<script >
	import axios from 'axios'
	export default {
		data(){
			return {
			datalist:[]
			}
		},
		mounted(){
			axios.get('/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=201812271630243799').then(res=>{
				console.log(res)
				this.datalist = res.data.hotPoints
			})
		},
		methods:{
			handleDetails(id){
					this.$router.push(`/homedetails/${id}`);
					this.$store.commit('tabberShow')
				}

		}
	}
</script>

<style scoped lang="scss">
	div{
		height: 400px;
		padding: 5px 15px 0;
		ul{
			li{
				height: 120px;
				padding-bottom:10px;
				padding-top:10px;
				border-bottom: 1px solid #ccc; 
				box-sizing: border-box;
				img{
					width: 37%;
					float: left;
					margin-right: 10px
				}
				span{
					color: #909090;
					text-indent:1em
				}
			}
		}
	}
</style>