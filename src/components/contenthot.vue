<template>
	<div>
		<h2 @click="handleToHot()">正在热映({{datalist.length}}部)<span></span></h2>
		<ul>
			<li v-for="data in eight" :key="data.id" @click="handleDetails(data.id)">
				<img :src="data.img">
				<p>{{data.t}}</p>
			</li>
		</ul>
		<h2 class="line">即将上映({{coming}}部)<span></span></h2>
	</div>
</template>

<script >
	import axios from 'axios'
	import { Indicator } from 'mint-ui';
	export default {
		data(){
			return {
				datalist:[],
				eight:[],
				coming:0
			}
		},
		beforeMount(){
			Indicator.open({
			  text: '加载中...',
			  spinnerType: 'snake'
			});
		},
		mounted(){
			axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201812271128272188'
				).then(res=>{
					console.log(res.data)
					this.datalist = res.data.ms
					this.eight = res.data.ms.slice(0,8)
					this.coming = res.data.totalComingMovie
					Indicator.close()
				})
			},
		methods:{
				handleToHot(){
					this.$router.push(`/home/hot`);
					this.$store.commit('tabberShow')
				},
				handleToComing(){
					this.$router.push(`/home/coming`);
					this.$store.commit('tabberShow')
				},
			}
		}
</script>

<style scoped lang="scss">
	div{
		width: 100%;
		height: 440px;
		padding: 10px 20px;
		box-sizing: border-box;
		h2{
			margin-bottom: 10px;
			span{
				display: inline-block;
				width: 7%;
				height: 10px;
				background:url('/static/images/i_city.png') center no-repeat;
				float: right;
				transform:rotateZ(-90deg);
				margin-top:10px;
			}
		}
		ul{
			overflow: hidden;
			li{
				height: 175px;
				width:23%;
				float: left;
				margin-right:2%;
				img{
					width: 100%;
					height: 116px
				}
				p{
					text-align: center;
				}
			}
		}
	}
	.line{
		border-top: 1px solid #ccc;
		margin-bottom: 0px
	}
</style>