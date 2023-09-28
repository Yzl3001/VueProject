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
						<el-menu-item index="8-5"><a href="#/login">退出</a></el-menu-item>
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
					<h1 class="content-1-1-h" style="line-height: 20px;">XXXX在线题库</h1>	
					<el-col :span="12" style="margin: 0 auto; margin-bottom: 10px;">
						<el-autocomplete
						clearable
						class="inline-input w-20"
						placeholder="搜索题号、标题、题目来源、算法、题目描述"
						@select="handleSelect"
						style="width: 352px;"
						/>
						</el-col>				
					<hr style="margin: 0 0 10px 0;">
				</div>

				<div class="content-2">
					<thead>
						<tr style="font-size: 14px;">
							<th></th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<th>#</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<th>标题</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<th>通过率</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<th>难度</th>
						</tr>
					</thead>

					<div class="content-2-div">
						<div class="content-2-div-pbm" v-for="i in 50">
							
								<div v-if="i % 2 != 0" style="background-color: #f9f9f9; height: 37px;">
									<div style="padding: 8px;">
										<span style="color: grey; margin-left: 55px;">{{ i + 50 }}</span>
										<a href="#/problem" style="margin-left: 40px;">
											xxxxxxxx
										</a>
										<span style="color: grey; margin-left: 360px;">xx.xx%</span>
										<span v-if="i % 3 == 0" class="label" style="background-color: #5cb85c">简单</span>
										<span v-if="i % 3 == 1" class="label" style="background-color: #f0ad4e">中等</span>
										<span v-if="i % 3 == 2" class="label" style="background-color: #d9534f">困难</span>
									</div>									
								</div>

								<div v-if="i % 2 == 0">
									<div style="padding: 8px;">
										<span style="color: grey; margin-left: 55px;">{{ i + 50 }}</span>
										<a href="#/problem" style="margin-left: 40px;">
											xxxxxxxx
										</a>
										<span style="color: grey; margin-left: 360px;">xx.xx%</span>
										<span v-if="i % 3 == 0" class="label" style="background-color: #5cb85c">简单</span>
										<span v-if="i % 3 == 1" class="label" style="background-color: #f0ad4e">中等</span>
										<span v-if="i % 3 == 2" class="label" style="background-color: #d9534f">困难</span>
									</div>
								</div>
														
						</div>
					</div>

					<div class="content-2-block">						
						<el-pagination
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						:page-size="100"
						layout="prev, pager, next, jumper"
						:total="1000">
						</el-pagination>
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
	.content-2-div {
		
		height: auto;
		padding: 10px;
	}

	.content-2-div-pbm {
		border-top: 1px solid #ddd;
	}

	.content-2-block {
		margin-left: 250px;
	}

	.label {
		display: inline;
		padding: .2em .6em .3em;
		font-size: 75%;
		font-weight: 700;
		line-height: 1;
		color: #fff;
		text-align: center;
		white-space: nowrap;
		vertical-align: baseline;
		border-radius: 1020px;
		margin-left: 30px;
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
		handleCurrentChange(val) {
			var as = ["#/problem", "#/problem2"];
			window.open(`${as[ val - 1]}`, '_self')
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