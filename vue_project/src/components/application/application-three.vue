<template>
	<div class="Index">

		<div class="dh" style="height: auto; z-index: 999999999;"> <!-- 导航 -->
			<div class="dh_top">
				<el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<a class="navbar-brand" href="#/index" style="float: right;">Vue_Project</a>
					<el-menu-item index="1"><a href="#/index">首页</a></el-menu-item>
					<el-menu-item index="2"><a href="#/activity">活动</a></el-menu-item>
					<el-menu-item index="3"><a href="#/problem">题库</a></el-menu-item>			
					<el-menu-item index="4"><a href="#/application1">应用</a></el-menu-item>
					<el-menu-item index="5"><a href="#/store">商店</a></el-menu-item>
					<el-menu-item index="6"><a href="#/blog">分享</a></el-menu-item>
					<el-menu-item index="7"><a href="#/solution">题解</a></el-menu-item>

					<el-sub-menu index="8">
						<template #title> 
							<img :src="imgObjname" :class="imageHP[1]">
						</template>
						<el-menu-item index="8-1"><a href="#/myspace" target="_blank">我的空间</a></el-menu-item>
						<el-menu-item index="8-2"><a href="#/information" target="_blank">个人信息</a></el-menu-item>
						<el-menu-item index="8-3"><a href="#/order" target="_blank">我的订单</a></el-menu-item>
						<el-menu-item index="8-4"><a href="#/set">设置</a></el-menu-item>
						<el-menu-item index="8-5"><a v-on:click="Exit()"> 退出</a></el-menu-item>
					</el-sub-menu>
					
					<a href="#/notification">
						<div class="dh-top-tx">
							<el-badge is-dot class="item">
								<img class="dh-top-tx-img" src="../../assets/image/tixing.png">
							</el-badge>
						</div>
					</a>					
					
				</el-menu>
			</div>
		</div>

		<div class="content"> <!-- 内容 -->

			<div class="content-1">

				<div class="content-1-1">               
					<h1 class="content-1-1-h" style="line-height: 20px;">XXXX应用中心</h1>						
				</div>

				<div class="content-1-2">
					<ul>
						<li id="content-1-2-a1">
							<a href="#/application1">官方工具</a>
						</li>
						<li id="content-1-2-a2">
							<a href="#/application2">娱乐类</a>
						</li>
						<li id="content-1-2-a3">
							<a href="#/application3">音乐盒</a>
						</li>
						<li id="content-1-2-a4">
							<a href="#/application4">第三方工具</a>
						</li>
						<li id="content-1-2-a5">
							<a href="#/application5">游戏</a>
						</li>
					</ul>

					<br>
					<div style="min-height: 500px;">

						<div class="content-1-2-div"> <!-- 卡片 -->
							<a href="#/application1">
								<el-empty :image-size="80"></el-empty>
							</a>
						</div>

						<div class="content-1-2-div"> <!-- 卡片 -->
							<a href="#/application1">
								<el-empty :image-size="80"></el-empty>
							</a>
						</div>

						<div class="content-1-2-div"> <!-- 卡片 -->
							<a href="#/application1">
								<el-empty :image-size="80"></el-empty>
							</a>
						</div>

						<div class="content-1-2-div"> <!-- 卡片 -->
							<a href="#/application1">
								<el-empty :image-size="80"></el-empty>
							</a>
						</div>

						<div class="content-1-2-div"> <!-- 卡片 -->
							<a href="#/application1">
								<el-empty :image-size="80"></el-empty>
							</a>
						</div>

						<div class="content-1-2-div"> <!-- 卡片 -->
							<a href="#/application1">
								<el-empty :image-size="80"></el-empty>
							</a>
						</div>

					</div>

				</div>

			</div>

			<div class="tfot">	<!-- 页脚 -->
				<div style="float: left;">
					<span style="color: #8c8c8c;">
	                    © 2022 xxxxx 版权所有
	                    &nbsp;|&nbsp;
	                    <a href="" target="_blank">xxxxxxxxxxxxxxxxx</a>
	                </span>
				</div>
				
                <div style="float: right;">
                	<div>
						<a href="" target="_blank">用户协议</a>
						&nbsp;|&nbsp;
						<a href="" target="_blank">常见问题</a>
						&nbsp;|&nbsp;
						<a href="" target="_blank">联系我们</a>
					</div>
                </div>
			</div>

			<div> <!-- 回到顶部 -->
				 <el-backtop :right="110" :bottom="100" />
			</div>
		
		</div>

		<div class="botp"> <!-- 底部面板 -->

			<div class="botp-logo">
				<button class="botp-logo-btn" onclick="">
					
				</button>
			</div>

			<div class="botp-check">
				<div class="botp-check-cont-1">
					<img src="../../assets/image/check.png" style="height: 25px; width: 25px; float: left; margin-top: 4px; margin-left: 4px;">
				</div>
				<div class="botp-check-cont-2">
					<input type="" name="" value="" placeholder="在这里输入你要搜索的内容" style="height: 30px; width: 218px;">
					<!-- <el-input v-model="input" placeholder="在这里输入你要搜索的内容"></el-input> -->
				</div>
			</div>

			<div class="botp-time">
				<button class="botp-time-btn">
					<div id="showDate">
						<p v-bind:interval="1000" style="margin: 0 auto; margin-left: 50px;">{{ currentTime1 }}<br>{{ currentTime }}</p>
					</div>
				</button>
			</div>

		</div>

	</div>
</template>

<style type="text/css" scoped>
	@import '../../assets/css/index.css';

	.content-1-2>ul {
		height: 47px;
		width: 725px;
		margin: 0;
		padding: 0;
	}

	.content-1-2>ul>li {
		display: block;
		height: 47px;
		width: 144px;
		float: left;
	}

	.content-1-2>ul>li>a {
		display: block;
		height: 47px;
		width: 144px;
		color: #337ab7;
		text-align: center;
		line-height: 50px;
	}

	.content-1-2>ul>li>a:hover {
		background-color: #ddd;
	}

	.content-1-2>ul>li {
		border-bottom: 1px solid #ddd;
	}

	#content-1-2-a3 {
		border-top: 1px solid #ddd;
		border-bottom: 0 !important;
		border-left:1px solid #ddd; 
		border-right: 1px solid #ddd;
		margin-top: -1px;
		margin-left: -1px;
		margin-right: -1px; 
	}

	.content-1-2-div {
		box-shadow: 0 5px 15px 0 rgb(0 0 0 / 8%);
		height: 200px; 
		width: 200px;
		margin-left: 30px;
		margin-bottom: 50px;
		float: left;
	}

	.imagetwo {
		height: 40px; 
		width: 40px; 
		border-radius: 20px;
		background-image: url('../../assets/image/yonghu2.png');
		background-size: 100%;
		background-repeat: no-repeat;
	}

</style>

<script type="text/javascript">
export default {
    data () {
		return {
			imageHP:['imageone', 'imagetwo'],			
			currentTime: '',
			currentTime1: ''
		}
	},
    methods: {
		horizontal() {
    	},
    	handleSelect() {
    	},
    	handleSizeChange() {
    	},
    	Exit:function() {
			console.log("1111")
			localStorage.clear();
			window.open(`#/login`, '_self')
		},
		handleCurrentChange() {
		}
	},
	created() {
		this.imgObjname = localStorage.getItem("imgObjname")
		setInterval(() => {
			var n = new Date().getFullYear()
			var y = new Date().getMonth() + 1
			var r = new Date().getDate()
			var s = new Date().getHours()
			var f = new Date().getMinutes()
			var m = new Date().getSeconds()
		  this.currentTime = n + "-" + y + "-" + r
		  this.currentTime1 = s + ":" + f + ":" + m
		}, 1000)
	}
}
</script>