<template>	
	<div class="box">
		<div class="daohang">
			<i class="iconfont icon-fanhui left" @click="handle()"></i>
		</div>
		<div v-if="mynews" class="newsbox">
			<p class="title">{{mynews.title}}</p>
			<span>{{mynews.time}}</span> <span class="a">评论{{mynews.commentCount}}</span>
			<div v-html="mynews.content" class="content"></div>
		</div>
		<below/>
		<overhead></overhead>
	</div>
</template>

<script >
	import below from './below.vue'
	import axios from 'axios'
	import overhead from './overhead'
	export default {
		data(){
			return{
				mynews:null
			}
		},
		components:{
			below,
			overhead
		},
		

		mounted(){
			this.$store.commit("tabberShow")
			axios.get(`/Service/callback.mi/News/Detail.api?newsId=${this.$route.params.id}&t=2018122815285180087`).then(res=>{
				this.mynews=res.data
			})
		},
		destroyed(){
			this.$store.commit("tabberHide")
		},
		methods:{
			handle(){
				this.$router.push("/home")
			}
		}		
	}
</script>

<style scoped lang="scss">
body,html{
	width: 100%;
	overflow: hidden;
}
	.box{
		width:100%;
		.daohang{
			width:100%;
			height:50px;
			background:black;
			i{

				font-size:34px;
				color:white;
				line-height:50px;		
			}
		}
		.newsbox{
				margin:0px 30px 30px 30px;
				p.title{
				font-size:26px;
				margin:15px 0px;
			}
			span{
				display:inline-block;margin-right:40px;
				color:#ccc;
			}
			span.a{
				color:blue;
			}
			.content{
				font-size:20px;
				img{
					width: 100%
				}

			}
		}
	}

</style>