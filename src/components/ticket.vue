<template>
	<div>
		<div>
			<ul class="search">
				<router-link tag="li" to="/citylist" class="same">北京</router-link>
				<li class="diff"><input type="text" placeholder="筛选影院"></li>
				<li class="same"><input type="submit" value="搜索"></li>
			</ul>
			<ul class="locat">
				<li @click="handleclick()" :class="isshow?'focus':''"><span>离我最近
				</span></li>
					<!-- <ul>
						<li><span>离我最近</span></li>
						<li><span>价格最低</span></li>
					</ul> -->
				<li><span class="two">全城</span></li>
				<li><span>影厅特效</span></li>
			</ul>
			<div class="contain">
				<ul class="dis" v-show="isshow">
					<router-link to='/ticket' tag="li" activeClass="focus">离我最近</router-link>
					<router-link to='/' tag="li" activeClass="focus">价格最低</router-link>
				</ul>
			</div>

			<iframe name="" frameborder="0" scrolling="no" marginwidth="0" marginheight="0"  width="100%" height="87.5" src="https://static4da.mtime.cn/feature/mobile/banner/2018/1224/wydhf750210.html""></iframe>
			<div class="in">{{noticeNotOwn}}</div>

			<ul class="info">
				<router-link to="" tag="li" v-for="data in cinemaList" :key="data.cinemaId">
					<div>
						<h3>{{data.cinameName}}</h3>
						<h5><b>{{data.minPrice/100}}</b>元起</h5>
					</div>
					<span>{{data.address}}</span>
					<div><i v-for="item in data.feature" v-if="item==1">{{mess[num]}}</i></div>					
				</router-link>
			</ul>
		</div>
		<button @click="handleClick()" v-show="isShow">↑</button>
	</div>
</template>

<script >
	import axios from "axios"
	export default {
		data(){
			return {
				isshow: false,
				noticeNotOwn: '',
				cinemaList: [],
				isShow: false,
				mess: ['3D', 'VIP', '4D', '杜比'],
				num: 0
			}
		},

		beforeMount(){
			axios({
				url:'/api/proxy/ticket/onlineCinemasByCity.api?locationId=292&_=1545960433185',
				method: 'get'
			}).then(res=>{
				console.log(res.data)
				console.log(res.data.data.cinemaList[0].feature)
				this.cinemaList = res.data.data.cinemaList
				this.noticeNotOwn = res.data.data.noticeNotOwn
			}),
			window.onscroll = this.handleScroll
		},

		methods: {
			handleclick: function() {
				this.isshow = !this.isshow 

			},

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
		}
	}
</script>

<style scoped lang="scss">
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
	.focus {
			color: #f60;			
		}
	
	ul.search {
		height: 100%;
		width: 100%;
		display: flex;
		border-bottom: 1px solid #ccc;
		box-sizing: border-box;
		li:nth-child(1) {
			background: url("/static/images/i_city.png") 61px 29px no-repeat;
			background-size: 10px
		}
		li {
			height: 60px;
			line-height: 60px;
			padding-right: 10px;
			
		}
		li.diff {
			flex: 1;
			input {
				background: url("/static/images/fangda.png") 3px 6px no-repeat;
				height: 35px;
				border: 1px solid #ccc;
				outline: none;
				border-radius: 10px;
				padding-left: 30px;
			}
		}
		li.same {
			width: 40px;
			text-align: center;
			padding: 0 20px; 
			input {
				border: none;
				font-size: 16px;
				background-color: #fff
			}
		}

	}

	ul.locat {
		position: relative;
		display: flex;
		border-bottom: 1px solid #ccc;
		box-sizing: border-box;
		width: 100%;
		li {
			flex: 1;
			height: 40px;
			line-height: 40px;
			text-align: center;
			span {
				font-size: 12px;
				color: #aaa;
			}
			span.two {
				padding: 0 45px;
				border-left: 1px solid #ccc;
				border-right: 1px solid #ccc;
			}

		}
		
		ul li {
			width: 100%;
			font-size: 18px;
			border-bottom: 1px solid #ccc;
		}
	}
	.contain {
		position: relative;
	}
		ul.dis {
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;
			li {
				height: 40px;
				line-height: 40px;
				width: 100%;
				padding-left: 35px;
				border-bottom: 1px solid #ccc;
			}
		}
		img {
			width: 100%;
		}
	.in {
		text-align: center;
		width: 100%;
		color: #aaa;
		font-size: 12px
	}
	ul.info {
		li {
			width: 100%;
			padding: 20px;
			border-bottom: 1px solid #ccc;
			box-sizing: border-box;
			div {
				width: 100%;
				overflow: hidden;
				height: 30px;
				line-height: 30px;
				h3 {
					float: left;
					font-size: 16px;
					font-weight: 100;
				}
				h5 {
					float: right;
					font-size: 12px;
					color: #f60;
					b {
						font-size: 16px;
					}
				}
				
			}
			span {
				font-size: 12px;
				color: #aaa;
			}
		}
	}
</style>