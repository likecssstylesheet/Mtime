<template>
	<div class="all">
		<div v-if="!dataIsReturn" class="loading">
			<img src="../../static/images/loading.gif" alt="">
		</div>
		<div v-if="dataIsReturn">
		<header>
			<a href="#/mall/search/" title="">
				<i class="iconfont icon-sousuo"></i>
				<span>搜索正版电影周边</span>
			</a>
			<div class="shoppingcar">
				<a href="#" title=""><i class="iconfont icon-gouwuche"></i></a>
			</div>
		</header>
		<div id="banner" v-if="dataIsReturn">
			<swipe class="my-swipe">
    			<swipe-item class="slide1" v-for="data in bannerImg" :key="data.url"><a href="data.url" title=""><img :src="data.image" alt=""/></a></swipe-item>
    			<!-- <swipe-item class="slide2">2</swipe-item>
    			<swipe-item class="slide3">3</swipe-item> -->
			</swipe>
		</div>
		<nav>
			<ul>
				<li v-for="data in mynav" :key="data.url"><a :href="data.url" title="">
					<img :src="data.image" alt="">
					<p>{{data.iconTitle}}</p>
				</a></li>
			</ul>
		</nav>
		<article class="mallshop">
			<div class="shop">
				<div class="shop01">
					<a href="" title=""><img src="//static1.mtime.cn/static/images/transparent.gif" alt=""></a>
				</div>
				<div class="shop02">
					<a href="http://feature.mtime.cn/mobile/item/2018/HotToys-newpage/" title=""><img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F27%2F152051.79123953.jpg&width=374&height=225&clipType=4" alt=""></a>
					<a href="http://m.mtime.cn/#!/commerce/list/?q=魔道祖师" title=""><img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F12%2F04%2F105552.77658084.jpg&width=374&height=224&clipType=4" alt=""></a>
				</div>
			</div>
			<a href="https://m.mtime.cn/#!/commerce/list/?q=%E8%BF%99%E5%B0%B1%E6%98%AF%E7%81%8C%E7%AF%AE" title="" class="shopmit">
				<img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F11%2F26%2F135334.21724840.jpg&width=750&height=223&clipType=4" alt="">
			</a>
		</article>
		<div id="mall_list" v-if="dataIsReturn">
			  <img :src="whichfilm.backgroupImage" alt="">
			  <h4>{{whichfilm.titleEn}}</h4>
			  <h3>{{whichfilm.titleCn}}</h3>
			  <dl v-for="data in whichfilm.subList" :key="data.goodsId">
			  	<dt><img :src="data.image" alt=""></dt>
			  	<dd>{{data.title}}</dd>
			  </dl>
			  <ul :class="checkedClass">
			  	<li v-for="data,index in checkfilm">
			  		<div class="mask">
			  			<img :src="data.checkedImage" alt="" @click="changeFilm(data,index)">
			  		</div>
			  	</li>
			  </ul>
			  <a href="https://mall-wv.mtime.cn/#!/commerce/list/?q=%E9%AD%94%E5%85%BD" title="">更多商品</a>
		</div>
		<article v-for="data in mall_types" v-if="dataIsReturn" class="mall_type">
			<div class="type">
				<h2>{{data.name}}</h2>
				<span><a :href="data.moreUrl">更多</a></span>
			</div>
			<dl>
				<dt><a :href="data.imgUrl"><img :src="data.image" alt=""></a></dt>
					<dd>
						<ul>
							<li v-for="data in data.subList">
								<img :src="data.image" alt="">
								<h3>{{data.title}}</h3>
							</li>
						</ul>
					</dd>
				</dl>
		</article>
		<below></below>
		</div>
	</div>
</template>

<script >
	import axios from "axios";
	import 'vue-swipe/dist/vue-swipe.css'
	import { Swipe, SwipeItem } from 'vue-swipe'
	import below from "./below"
	export default {
		data(){
			return {
				bannerImg:[],
				mynav:[],
				whichfilm:null,
				checkfilm:[],
				checkedClass:'',
				dataIsReturn:false,
				mall_types:[],
				goodeList:[]
			}
		},
		beforeMount(){
			axios.get("/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=201812271485473502").then(res=>{
				// console.log(res.data.scrollImg)
				this.dataIsReturn = true;
				this.bannerImg = res.data.scrollImg
				this.mynav = res.data.navigatorIcon
				this.checkfilm = res.data.topic
				this.whichfilm = res.data.topic[0]
				this.mall_types = res.data.category

			}).catch(erro=>{
				console.log(erro)
			})

			axios.get("/Service/callback.mi/ECommerce/RecommendProducts.api?t=201812281044887501&goodsIds=107091%2C102841%2C105853&pageIndex=1").then(res=>{
				this.goodList = res.data.goodsList;
			})
		},	
		methods:{
			changeFilm(data,index){
				this.whichfilm = data;
				if(index<=1){
					this.checkedClass = '';
				}else if(index===2){
					this.checkedClass = 'center';
				}else{
				this.checkedClass = 'right'
				}
			}
		},
		components:{
			"swipe":Swipe,
			"swipe-item":SwipeItem,
			below
		}
	}
</script>

<style scoped lang="scss">
.loading{
	width:100%;
	height:100%;
	background:#fff;
	img{
		margin:auto;
		width:100%;
	}
}

.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  img{
  	width:100%;
	margin-top:-10%;
  }
}

	a{
		color:#777;
	}
    div.all{
    	background:#f6f6f6;
    	height:100%;
    }
	header{
		padding:5px 10px 5px 20px;
		height:40px;
		a{
			border-radius:5px;
			display: inline-block;
			background:#fff;
			height:100%;
			line-height:40px;
			padding-left:10px;
			width:80%;
			vertical-align: middle;
		}
		div.shoppingcar{
			display: inline-block;
			a{
				background:none;
				vertical-align: middle;
				line-height:30px;
				height:100%;
				i{
					font-size:30px;
					color:blue;
				}
			}
		}
	}
	nav ul{
		color:#777;
		overflow:hidden;
		padding-top:10px;
		background:#fff;
		border-bottom:#eee 1px solid;
		li{
			float:left;
			width:25%;
			a{
				padding:15px 0;
				box-sizing: border-box;
				text-align:center;
				display: block;
				img{
					width:50%;
					margin:auto;
				}
			}
		}
	}
	article.mallshop{
		div{
			box-sizing: border-box;
		}
		img{
			width:100%;
			display: block;
		}
		div.shop{
			display:flex;
			height:225px;
			div.shop01{
				flex:1;
				height:100%;
				border-right:1px solid #eee;
				background:#fff;
			}
			div.shop02{
				flex:1;
				height:100%;
			}
		}
	}
	#mall_list{
		height:493px;
		text-align:center;
		margin-top:15px;
		position:relative;
		background:#fff;
		overflow:hidden;
		margin-bottom:10px;
		img{
			width:100%;
		}
		h3,h4{
			font-size:12px;
		}
		h3{
			font-size:20px;
			font-weight: 400;
		}
		dl{
			width:33.3%;
			float:left;
			box-sizing: border-box;
			padding: 0 8px;
			color:#333;
			margin-bottom:10px;

			img{
				width:80%;
				margin:0 auto;
				display: block;
			}
			dd{
				white-space: nowrap;
    			text-overflow: ellipsis;
   				overflow: hidden;
   				font-size:13px;
			}	
		}
		ul{
			position:absolute;
			width:125%;
			top:70px;
			left:0px;

			li{
				float:left;
				width:20%;
				div.mask{
					width:80%;
					height:80%;
					margin:auto;
					border-radius:50%;
					img{
					width:100%;
					margin:auto;
					border-radius:50%;
				}
				}
			}
			
		}
		.center{
			left:-12.5%;
			}
		.right{
			left:-25%;
		}
		a{
			margin:20px 0;
			background:#f26262;
			display: inline-block;
		    width:30%;
		    line-height:30px;
		    color:#fff;font-size:16px;
		    border-radius:20px;
		}
	}
	article.mall_type{
		margin-bottom:10px;
		background:#fff;
		padding-top:10px;
		div.type{
			border-left:5px solid #e16364;
			overflow:hidden;
			h2{
				font-size:18px;
				line-height:30px;
				float:left;
				color:#e16364;
				text-indent: 10px;
			}
			span{
				float:right;
				color:#333;
				font-size:15px;
				line-height:30px;
				margin-right:30px;
			}
		}
		dl{
			padding-bottom:20px;
		}
		dt{
			img{
				width:100%;
			}
		}
		dd{
			width:90%;
			margin-left:5%;
			border-top:solid #ccc 1px;
			padding-top:10px;
			ul{
					overflow:hidden;
				}
			li{
				width:33.3%;
				float:left;
				box-sizing: border-box;
				padding:0 5px;
				img{
					width:100%;
				}
				h3{
					padding:0 5px;
					font-size:13px;
					white-space: nowrap;
    				text-overflow: ellipsis;
    				overflow: hidden;
    				color:#333;
    				font-weight:400;
				}
			}
		}
	}
</style>