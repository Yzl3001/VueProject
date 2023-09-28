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
							
							<div class="head-img">
								<input type="file"  id="upload" style="display:none;" accept="image/gif,image/jpeg,image/png,image/jpg" @change="freshImg"/>
								
								<div class="border" >								
									<img :src="imgObjname" :class="imageHP[0]">
									<hr style="margin-top: 20px; margin-bottom: 20px;">
										<a href="javascript:;" @click="uploadIMg" style="color: #333; background-color: #fff;     border-radius: 5px; border: 1px solid transparent; border-color: #ccc; padding: 10px;">{{headTip}}</a>					
									<hr style="margin-top: 20px; margin-bottom: 20px;">				
								</div>
							</div>

						</div>
					</div>
				</div>

				<div class="content-user-right">
					<div class="content-user-right-panel">
						<div class="content-user-right-panel-body">

							<div>
								<h1>个人信息</h1>
								<hr>
							</div>	

							<div>
								<div style="margin-left: 100px; font-size: 20px; font-weight: 700; margin-top: 30px;">	
									用户名：<input type="" name="" v-model="userAccount" style="height: 34px; width: 300px; font-size: 20px;">
								</div>
								<div style="margin-left: 80px; font-size: 20px; font-weight: 700; margin-top: 30px;">		
									邮件地址：<input type="" name="" v-model="emailaddress" style="height: 34px; width: 300px; font-size: 20px;">
								</div>
								<div style="margin-left: 80px; font-size: 20px; font-weight: 700; margin-top: 30px;">
									个人简介：<textarea v-model="Personalprofile" style="height: 100px; width: 300px; font-size: 20px;"></textarea>
								</div>
							</div>

							<div style="text-align: center; margin-top: 30px;">
								<button v-on:click="Updatetheinformation" style="color: #fff; background-color: #449d44; border-color: #398439; border-radius: 5px; padding: 6px 12px;">
									更新信息
								</button>
								 
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
	@import '../../../assets/css/index.css';
	@import '../../../assets/css/user.css';

	.head-img {
		text-align: center;
		margin-bottom: 0.2rem;
		
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
			imgObjname:'',
       		headTip: "更新头像",

			emailaddress: '',
			Personalprofile: '',					
			currentTime: new Date(),
			currentTime1: new Date()
		}
	},
	created() {
		this.emailaddress = localStorage.getItem("useremailaddress")
		this.Personalprofile = localStorage.getItem("userPersonalprofile")
		this.userAccount = localStorage.getItem("userAccount")
		this.userPassword = localStorage.getItem("userPassword")
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
	},
		
    methods: {
    	Updatetheinformation:function() {
    		const userAccount = this.userAccount;    		
    		const useremailaddress = this.emailaddress;
    		const userPersonalprofile = this.Personalprofile;

			localStorage.setItem('useremailaddress', useremailaddress)	
			localStorage.setItem('userPersonalprofile', userPersonalprofile)
			localStorage.setItem('userAccount', userAccount)

			alert("更新成功");

			var as = '#/information'
			window.open(`${as}`, '_self')
        },
		uploadIMg:function() {
			document.getElementById('upload').click();
		},        
		freshImg:function(e){

			let _this = this;
			_this.imgObj = e.target.files['0'];               //得到上传的第一个文件
			let fr = new FileReader();                        //异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容
					
			fr.onload=function() {                             //在读取操作完成时触发
				_this.imgsrc = fr.result;                       // 图片文件赋值给图片标签路径
				let imgObjname = _this.imgsrc;
				// console.log(_this.imgsrc);
				localStorage.setItem('imgObjname', imgObjname);
				// alert("更新成功");				
				location.reload();				
			}

			fr.readAsDataURL(_this.imgObj);                   //将读取到的文件编码成Data URL			
		},
		horizontal() {
		},
		handleSelect() {
		},
		handleSizeChange() {
		},
		handleCurrentChange() {
		}     
    },

}
</script>