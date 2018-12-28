<template>
	<div>
		<header>
			<a href="#" class="back" @click="handleBack()"></a>
			<div>
				<span class="hot">正在热映</span>
				<span>即将上映</span>
			</div>
		</header>
		<search></search>
		<article>
			<ul>
				<li v-for="data in datalist" :key="data.movieId">
					<img :src="data.img">
					<div>
					<h3>{{data.t}}</h3>
					<span v-if="data.r>0">{{data.r}}</span>
					<p v-if="data.commonSpecial"><i></i>{{data.commonSpecial}}</p>
					<i v-if="data.is3D"></i>
					<b>{{data.NearestCinemaCount}}家影院上映{{data.NearestShowtimeCount}}</b>
					</div>
					<a href="#" @click="handlebuy()">购票</a>
				</li>
			</ul>
		</article>
		<below></below>
	</div>
</template>

<script>
	import search from './search'
	import below from './below'
	import axios from 'axios'
	export default {
		data(){
			return {
				datalist:[]
			}
		},
		mounted(){
			axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201812271128272188').then(res=>{
				console.log(res.data)
				this.datalist = res.data.ms
			})
		},
		methods:{
			handleBack(){
				this.$router.push(`/home`)
			},
			handlebuy(){
				this.$router.push(`/ticket`)
			}

		},
		beforeDestroy(){
			this.$store.commit('tabberHide')
		},
		components:{
			search,
			below
		}
	}
</script>

<style scoped lang="scss">
	div{
		header{
			width: 100%;
			height: 40px;
			box-sizing: border-box;
			padding: 5px 10px;
			text-align: center;
			background-color: #1c2635;
			div{
				width: 60%;
				height: 30px;
				background-color: #222;
				position: absolute;
				left: 50%;
				transform:translateX(-50%);
				border-radius: 20px;
				span{
					width: 48%;
					display: inline-block;
					height: 30px;
					line-height: 30px;
					text-align: center;
				}
				.hot{
					background-color: #909090;
					border-radius: 20px;
					color: #fff;
				}
			}
			a{
				display: inline-block;
				width: 10%;
				height: 20px;
				float: left;
				background:url('/static/images/go_back.png') center no-repeat;
				margin-top: 5px;
			}
		}
		article{
			padding:0 20px;
			ul{
				li{
					height:160px;
					width:100%;
					padding:10px 0;
					border-bottom: 2px solid #ccc;
					position: relative;
					img{
						width: 30%;
						margin-right: 15px;
						float: left;
					}
					div{
						float: left;
						width: 64%;
						height: 140px;
						position: relative;
						h3{
						display: inline-block;
						vertical-align: top;
						font-weight: 300;
						height: 30px;
						line-height: 30px;
						}
						span{
							vertical-align:top;
							display: inline-block;
							width: 14%;
							height: 20px;
							background:#659d0e;
							color: #fff;
							text-align: center;
							margin-top: 5px;
						}
						P{
							vertical-align:top;
							color: #659d0e;
							height: 20px;
							line-height: 20px;
							width: 100%;
							font-size: 14px;
							i{
								background:url('/static/images/i_dot.png') 0 0 no-repeat;
								width: 5%;
								height: 10px;
								display: inline-block;
								background-size: contain;
							}
						}
						i{
							display: inline-block;
							width: 10%;
							height: 20px;
							background:url('/static/images/ia_cine.png') center;
							background-size:contain;
						}
						b{
							height: 40px;
							line-height: 40px;
							display:inline-block;
							font-weight: 100;
							position: absolute;
							bottom: 0;
							left: 0;
							color: #ccc
						}
					}
					a{
						display: inline-block;
						width: 20%;
						background:#f60;
						height: 30px;
						border-radius: 20px;
						line-height: 30px;
						text-align: center;
						color: #fff;
						position: absolute;
						right: 10px;
						bottom: 15px
					}
				}
			}
		}
	}	
</style>