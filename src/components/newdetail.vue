<template>
	<div v-if="shuju">
		<div class="bigposition">
			<img :src="shuju.imageUrl" class="box">
			<p class="zhezhao"></p>
			<p >{{shuju.title}}</p>
		</div>

		<div class="news" v-if="bigphoto">
			
			<ul >
				<li v-for="data in bigphoto" @click=handle(data.id) :key="data.id">
					<div v-if="data.type==1" class="type1">		
						<h3>{{data.title}}</h3>
						<div v-for="smalldata in data.images" >
							<img :src="smalldata.url1" alt="">
						</div>
						<p>
							{{Math.floor(data.publishTime/3600000/24)}}小时前
						</p>
					</div>
					<div v-if="data.type==2" class="type2">
						<img :src="data.image" /> 
						<div>
								<h3>{{data.title}}</h3>
								<p>
									{{Math.floor(data.publishTime/3600000/24)}}小时前
								</p>
						</div>
						
					</div>

				</li>
			</ul>
			
		</div>
		<div class="button" @click=qingqiu()>
					查看更多
		</div>
		<below></below>
		
	</div>
	
</template>
<script>
	import below from "./below.vue"
	import axios from 'axios'
	import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				shuju:null,
				bigphoto:null,
				photos:[],
				
				pageCount:0,
				num:1

			}
			

		},
		methods:{

			qingqiu(){
				Indicator.open({
				  text: '加载中...',
				  spinnerType: 'snake'
				});
				if(this.num<this.pageCount){
						axios.get(`/Service/callback.mi/News/NewsList.api?t=2018122717125723493&pageIndex=${++this.num}`).then(res=>{
							console.log(res.data.newsList)
							this.bigphoto=[...this.bigphoto,...res.data.newsList]
							Indicator.close()
						}).catch(error=>{console.log(error)})
					

				}
				
			}//请求图片
			,

			handle(id){
				this.$router.push(`/movie/${id}`)

			}

		},
		computed:{
				publishTime(){
						
					return  this.time
				}

		},
		mounted(){
			Indicator.open({
			  text: '加载中...',
			  spinnerType: 'snake'
			});
			axios.get("/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=2018122716255050481").then(res=>{
				console.log(this.shuju=res.data.news);
			}).catch(error=>{
				console.log(error)
			})//第一个图片

			axios.get("/Service/callback.mi/News/NewsList.api?t=2018122717125723493&pageIndex=1").then(res=>{
				this.bigphoto=res.data.newsList;
				this.time=res.data.newsList.publishTime
				console.log(this.time,this.bigphoto)
				this.pageCount=res.data.pageCount
				Indicator.close()

			}).catch(error=>{
				console.log(error)
			})



		},
		components:{
			below

		}
	}
</script>
<style scoped lang="scss">
	.bigposition{
		position:relative;
		.zhezhao{	

			
			height:50px;
			width:100%;
			position: absolute;
			bottom:0;
			background-color:black;
			opacity:0.4;
		}
		p{
			color:white;
			height:50px;
			width:100%;
			position: absolute;
			bottom:0;
			text-align: center;
			line-height:50px;
			font-size:20px;
			
		}
	}
	.box{
		width:100%;
	}
	
	.biaoti{
		height:40px;
		line-height:40px;
	}
	.news{
		width:100%;
		ul{
			
			margin-left:20px;
			
			
			.type1{
					
					border-bottom: 1px solid black;
					overflow: hidden;
					h3{
						height:40px;
						line-height:40px;
					}

					height:170px;
				div{
					float:left;
					
					img{
						
						margin-left:1px;
						width:114px;
						height:79px;
					}

				}
				p{
					line-height:30px;
					float:left;
					text-overflow:ellipsis;
				}
			}


			.type2{
				
				border-bottom: 1px solid black;
				overflow: hidden;
				height:150px;
				img{
					width:90px;
					height:90px;
					float:left;
					margin:30px 20px 0px 0px;

				}
				div{
					margin:30px 0;
					width:240px;
					float:left;
					p{
						margin-top:20px;
						color:gray;

					}
				}
			}
		}
	}
	.button{
		height:40px;
		line-height:40px;
		text-align:center;
		color:#0074c5;
		font-size:18px;
	}

</style>