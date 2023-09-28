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
						<el-menu-item index="8-1"><a href="#/myspace">我的空间</a></el-menu-item>
						<el-menu-item index="8-2"><a href="#/information">个人信息</a></el-menu-item>
						<el-menu-item index="8-3"><a href="#/order">我的订单</a></el-menu-item>
						<el-menu-item index="8-4"><a href="#/set">设置</a></el-menu-item>
						<el-menu-item index="8-5"><a href="#/login">退出</a></el-menu-item>
					</el-sub-menu>
					
					<a href="#/notification">
						<div class="dh-top-tx">
							<el-badge is-dot class="item">
								<img class="dh-top-tx-img" src="../../../assets/image/tixing.png">
							</el-badge>
						</div>
					</a>					
					
				</el-menu>
			</div>
		</div>

		<div class="content"> <!-- 内容 -->
			
			<div class="content-user">
				
				<div class="content-user-left">
					<div class="content-user-left-panel">
						<div class="content-user-left-panel-body">
							<a href="#/information"><img :src="imgObjname" :class="imageHP[0]"></a>
							<hr style="margin-top: 20px; margin-bottom: 20px;">
							<div class="content-user-left-panel-body-name" style="text-align: center;">
								{{userAccount}}
							</div>

							<hr style="margin-top: 20px; margin-bottom: 20px;">

							<div style="height: 40px;">
								<a href="#/myspace" style="float: left; margin-left: 15px;">
									<div style="text-align: center; color: #99a2aa;">
										关注数
									</div>
									<div style="text-align: center; color: #222;">
										xx
									</div>
								</a>
								<a href="#/myspace" style="float: left; margin-left: 15px;">
									<div style="text-align: center; color: #99a2aa;">
										粉丝数
									</div>
									<div style="text-align: center; color: #222;">
										xx
									</div>
								</a>
								<p style="float: left;">
									<div style="text-align: center;">
										阅读量
									</div>
									<div style="text-align: center;">
										xx
									</div>
								</p>								
							</div>

							<hr style="margin-top: 20px; margin-bottom: 20px;">

							<div>
								最近来访(xx)
								<br>
								<br>
								<br>
							</div>

						</div>
					</div>
				</div>

				<div class="content-user-right">
					<div class="content-user-right-panel">
						<div class="content-user-right-panel-body">

							<div>
								<ul style="padding: 0; margin: 0; width: 700px; height: 45px;">
									<li><a href="#/myspace">动态</a></li>
									<li><a href="#/myspace">XXXX</a></li>
									<li><a href="#/myspace">XXXX</a></li>
									<li><a href="#/myspace">XXXX</a></li>
									<li><a href="#/myspace">XXXX</a></li>
									<li><a href="#/myspace">XXXX</a></li>
									<li><a href="#/myspace">XXXX</a></li>
									<li><a href="#/myspace">XXXX</a></li>
									<li><a href="#/myspace">XXXX</a></li>
									<li><a href="#/myspace">XXXX</a></li>
								</ul>
							</div>

							<div style="width: 718px; height: auto; margin-top: 30px;">

								<div v-for="i in 5" style="width: 700px; height: 100px; border: 1px solid transparent; border-color: #ddd; margin-top: 20px; box-shadow: 0 5px 15px 0 rgba(0,0,0,0.08); border-radius: 4px;">
										<div>
										内容 {{ i }}
										</div>

									<hr style="margin: 30px 0 10px 0;">

									<div class="content-2-1-div" style="height: 30px; width: 150px; margin: 0 auto; float: left;">
										<el-rate v-model="value[ i ]" show-score text-color="#95a5a6" score-template="{value}"></el-rate>
									</div>

									<div class="content-2-1-zan content-2-1-div">
										<el-badge class="item">
											<a class="btn-link" title="评论" style="cursor: pointer;">
											<span class="glyphicon" style="top: 2px;">	
												<img src="../../../assets/image/pinglun.png" style="height: 14px; width: 16px; margin-right: -7px;">
											</span>
											&nbsp;
											<span>
												评论
											</span>
										</a>
										</el-badge>
									</div>

									<div class="content-2-1-div" style="height: 30px; width: 150px; margin: 0 auto; float: left;">
										<a class="btn-link" title="收藏" style="cursor: pointer;">
											<span class="glyphicon" style="top: 2px;">	
												<img src="../../../assets/image/shoucang.png" style="height: 14px; width: 16px; margin-right: -7px;">
											</span>
											&nbsp;
											<span>
												收藏
											</span>
										</a>
									</div>
									<hr style="margin: 0 0 10px 0; width: 683px;">

								</div>

							</div>
							
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
					<img src="../../../assets/image/check.png" style="height: 25px; width: 25px; float: left; margin-top: 4px; margin-left: 4px;">
				</div>
				<div class="botp-check-cont-2">
					<input type="" name="" value="" placeholder="在这里输入你要搜索的内容" style="height: 30px; width: 218px;">
					<!-- <el-input v-model="input" ></el-input> -->
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
	@import '../../../assets/css/index.css';
	@import '../../../assets/css/user.css';

	.content-user-right-panel-body>div>ul {
		border-bottom: 1px solid #ddd;
	}

	.content-user-right-panel-body>div>ul>li {
		float: left;
		height: 30px;
		width: 67px;
		display: block;
		padding-top: 13px;		
	}

	.content-user-right-panel-body>div>ul>li>a {
		padding: 10px 15px;
		
	}

	.imageone {
		height: 200px;
		width: 200px;
		background-image: url('../../../assets/image/yonghu3.png');
		background-size: 100%;
	}

	.imagetwo {
		height: 40px; 
		width: 40px; 
		border-radius: 20px;
		background-image: url('../../../assets/image/yonghu2.png');
		background-size: 100%;
		background-repeat: no-repeat;
	}

</style>

<script type="text/javascript">
export default {
    data () {    	
		return {	
			imageHP:['imageone', 'imagetwo'],
			value: [],		
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
		handleCurrentChange() {
		}
	},
	created() {
		this.userAccount = localStorage.getItem("userAccount")
		this.userPassword = localStorage.getItem("userPassword")
		this.imgObjname = localStorage.getItem("imgObjname")
		setInterval(() => {
			var n = new Date().getFullYear();
			var y = new Date().getMonth() + 1;
			var r = new Date().getDate();
			var s = new Date().getHours();
			var f = new Date().getMinutes();
			var m = new Date().getSeconds();
		  this.currentTime = n + "-" + y + "-" + r;
		  this.currentTime1 = s + ":" + f + ":" + m;
		}, 1000)
	}
}
</script>