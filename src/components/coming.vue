<template>
	<div>
		<header>
			<a href="#" class="back" @click="handleBack()"></a>
			<div>
				<span @click="handleHot()">正在热映</span>
				<span class="hot">即将上映</span>
			</div>
		</header>
		<search></search>
		<div id="banner">
			<h2>最受欢迎 <span>({{datalist.length}}部)</span></h2>
		  	<div class="swiper-container">
			  	<div class="swiper-wrapper">
				    <div class="swiper-slide" v-for="data in datalist">
				    	<span>{{data.rYear}}年{{data.rMonth}}月{{data.rDay}}日</span>
				    	<img :src="data.image" alt="">
				    	<h4>{{data.title}}</h4>
				    	<p class="one"><i>{{data.wantedCount}}</i>人想看-{{data.type}}</p>
				    	<p class="two">导演：{{data.director}}</p>
				    	<p class="three">演员:{{data.actor1}}{{data.actor2}}</p>
				    	<a href="#" v-if="data.isTicket" class="chao">超前预售</a>
				    	<a href="#" v-if="data.isVideo" class="foreshow">预告片</a>
				    </div>
		    </div>
	 		</div>
		</div>
		<iframe name="" frameborder="0" scrolling="no" marginwidth="0" marginheight="0"  width="100%" height="87.5" src="https://static4da.mtime.cn/feature/mobile/banner/2018/1224/wydhf750210.html""></iframe>
	</div>
</template>

<script >
	import search from './search'
	import Swiper from "swiper"
	import "swiper/dist/css/swiper.css"
	import axios from 'axios'
		export default {
			data(){
				return {
					datalist:[],
					list:[]
				}
			},
		components:{
			search
		},
		methods:{
			handleBack(){
				this.$router.push(`/home`)
				this.$store.commit('tabberHide')
			},
			handleHot(){
				this.$router.push('/home/hot')
			}	
		},
		mounted(){
			axios.get('/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=2018122815594031601').then(res=>{
				console.log(res)
				this.datalist = res.data.attention
				this.list = res.data.moviecomings
				this.$nextTick(()=>{
					var swiper = new Swiper('.swiper-container', {
						slidesPerView:1,
						spaceBetween: 30,
						freeMode: true,
					})
				})
			})

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
		#banner{
			padding: 15px 0 0px 20px;
			h2{
				height: 30px;
				line-height: 30px;
				font-size: 22px;
				font-weight: 100;
				span{
					color: #909090;
				}
			}
			.swiper-slide{
				width: 100%;
				padding-top:20px; 
				border-right: 1px solid #ccc;
				border-top: 1px solid #ccc;
				margin-top:20px; 
				position: relative;
				img{
					width: 30%;
					float: left;
					margin-right: 20px
				}
				span{
					width: 30%;
					height: 20px;
					display: inline-block;
					background:#fff;
					position: absolute;
					top: -10px;
					left: 0
				}
				h4{
					display: inline-block;
					font-size: 18px;
					color: #000;
					font-weight: 100
				}
				p{
					height: 30px;
					line-height: 30px;
					font-weight: 100;
					color: #000;
					i{
						font-style: normal;
						color: #f60;
					}
				}
				.three{
					white-space:nowrap;
					overflow:hidden;
					text-overflow:ellipsis
				}
				a{
					width: 25%;
					height: 35px;
					display: inline-block;
					background:#f60;
					color: #fff;
					line-height: 35px;
					border-radius: 20px;
					text-align: center;
					margin-top:10px 
				}
				.foreshow{
					background:#fff;
					color: #659c0d;
					border:1px solid #659c0d;
				}
			}
		}
	}
</style>
