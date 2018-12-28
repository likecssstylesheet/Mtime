<template>
	<div v-if="shuju">

		<div class="bigposition bofang">
			<img :src="shuju.imageUrl" class="box" :alt="shuju.title">
			<p class="zhezhao"></p>
			<p >{{shuju.title}}</p>
			<i class="iconfont icon-bofang"></i>
		</div>

		<div class="news" v-if="bigphoto">
			
			<ul >
				<li v-for="data in bigphoto" class="type2" @click=handleself(data) :key="data.id">
						<div class="left">
							<i class="iconfont bofang "></i>
							<img :src="data.coverImg" /> 
						</div>
						
						<div class="right">
								<h3>{{data.movieName}}</h3>
								<p>
									{{data.summary}}
								</p>
						</div>
				</li>
			</ul>
			
		</div>
		
		<below></below>
		<div class="zhezhao2" v-if="URL">
			
			<div class="video" >
				<div>
					<span @click=handlecome()>X</span><span>{{URL.videoTitle}}</span>
				</div>
				
				<video :src="URL.url" controls poster="/images/video.png" width="100%"
			height="100%" autoplay></video>
			</div>
		</div>
		
	</div>
	
</template>
<script>
	import { Indicator } from 'mint-ui';
	import below from "./below.vue"
	import axios from 'axios'
	export default{
		data(){
			return{
				shuju:null,
				bigphoto:null,
				photos:[],
				URL:null,
				content:''

			}
			

		},
		methods:{
			handleself(url){

					this.URL=url;
					
			},
			handlecome(){
				this.URL=null;
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
				Indicator.close()
				console.log(this.shuju=res.data.trailer);
			}).catch(error=>{
				console.log(error)
			})//第一个图片

			axios.get("/Service/callback.mi/PageSubArea/TrailerList.api?t=201812289553233806").then(res=>{
				this.bigphoto=res.data.trailers;
				this.time=res.data.trailer.publishTime
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
		width:100%;
		height:260px;
		i.bofang{
			position: absolute;
			bottom:10px;
			right:10px;
			font-size:40px;
			color:white;
		}
		.zhezhao{	

			
			height:80px;
			width:100%;
			position: absolute;
			bottom:0;
			background-color:black;
			opacity:0.4;
		}
		p{
			color:white;
			height:80px;
			width:375px;
			position: absolute;
			bottom:0;
			text-align: center;
			text-indent: 30px;
			font-size:24px;
			text-align: center;
			
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

			.type2{
				
				border-bottom: 1px solid black;
				overflow: hidden;
				height:150px;
				div.left{
					position: relative;
					
					float:left;
					margin:30px 20px 0px 0px;
					i{
						color:white;
						font-size:40px;
						position:absolute;
						bottom:6px;
						right:6px;
					}
					img{
						width:140px;
						height:80px;
					}

				}
				div.right{
					margin:30px 0;
					width:180px;

					float:left;
					h3{
						height:30px;
						
					}
					p{
						margin-top:30px;
						color:gray;
						white-space:nowrap;
						text-overflow:ellipsis ;
						overflow:hidden;

					}
				}
			}
		}
	}
	.zhezhao2{
		position: fixed;
		width: 100%;
		height:100%;
		background-color:black;
		opacity:0.9;
		top:0;
		left:0;
		
		div.video{
			background-color:black;
			position: fixed;
			top:50%;
			left:0;
			width:375px;
			height:250px;
			transform:translateY(-50%);
		div{
			height:40px;
			background-color:gray;
			span
			{
			display: inline-block;
			margin-left: 40px;
			font-size:18px;
			text-align:center;
			color:white;
			line-height:40px;
			}
		}

	}
}
	

</style>