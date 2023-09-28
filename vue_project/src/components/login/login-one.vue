<template>
	<div class="login">
		<div class="mylogin">
			<!-- <el-card class="post-card"  @click="shenhe"> </el-card> -->
			<h4 style="text-align: center;">登录</h4>
			<el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="0px">
	     	<el-form-item label="" prop="account" style="margin-top: 10px">
	     		<el-row>
					<el-col :span="3">
				    	<div id="images1"></div>
					</el-col>
					<el-col :span="21">
						<el-input
                class="inps"
                placeholder="账号"
                v-model="loginForm.account"
              >
              </el-input>
					</el-col>
				</el-row>
	     	</el-form-item>

			<el-form-item label="" prop="passWord">
				<el-row>
					<el-col :span="3">
						<div id="images2"></div>
					</el-col>
					<el-col :span="21">
						<el-input
                class="inps"
                type="password"
                placeholder="密码"
                v-model="loginForm.passWord"
              ></el-input>
					</el-col>
				</el-row>
			</el-form-item>
        
	     	</el-form>

			<el-form-item style="margin-top: 40px; text-align: center;">
				<el-button type="primary" round class="submitBtn" v-on:click="submitForm">
					登录
				</el-button>
			</el-form-item>

			<div class="unlogin">
				<router-link :to="{ path: '' }"> 忘记密码 </router-link>
				|
				<router-link :to="{ path: '' }">
				<a href="" target="_blank" align="right">注册新账号</a>
				</router-link>
			</div>
		</div>
	</div>
</template>

<style>
  @import '../../assets/css/login.css';
</style>

<script type="text/javascript" src="../../assets/js/login.js">		
</script>