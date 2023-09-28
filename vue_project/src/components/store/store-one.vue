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
					<h1 class="content-1-1-h" style="line-height: 20px;">XXXX商店</h1>	
					<el-col :span="12" style="margin: 0 auto; margin-bottom: 10px;">
						<el-autocomplete	
						clearable
						class="inline-input w-20"
						placeholder="xxxxx"
						@select="handleSelect"
						style="width: 352px;"
						/>
						</el-col>				
					<hr style="margin: 0 0 10px 0;">
				</div>

				<div class="content-2">
					
					<div class="content-2-div">
						<div>
							<el-row>
								<el-col :span="7" v-for="(o, index) in 12" :key="o" :offset="index > 0 ? 2 : 0" :style="{marginTop: '40px', marginRight: '20px'}">
									<el-card :body-style="{ padding: '10px'}">
										<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
										<div style="padding: 14px;">
											<span>好吃的汉堡</span>
											<div class="bottom clearfix">
												<button style="margin-left: 90px; border-color: transparent; background: 0 0; color: var(--el-color-primary);">操作按钮</button>
											</div>
										</div>
									</el-card>
								</el-col>
							</el-row>
						</div>
						

					</div>

					<div>
						<div class="content-2-block">						
							<el-pagination
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:page-size="100"
							layout="prev, pager, next, jumper"
							:total="100">
							</el-pagination>
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
	.time {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		float: right;
	}

	.image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}
	.el-row {
		justify-content: center;
	}

	.el-col-offset-2 {
		margin-left: 0 !important; 
	}

	.content-2-block {
		margin-top: 50px;
		margin-left: 500px;
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