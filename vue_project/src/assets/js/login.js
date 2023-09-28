export default {
	data:function(){
		return {
			loginForm: {
				account: "",
				passWord: "",
			},
			loginRules: {
				account: [{ required: true, message: "请输入账号", trigger: "blur" }],
				passWord: [{ required: true, message: "请输入密码", trigger: "blur" }],
			},
		}
	},
	methods:{			
		submitForm:function() {				
			const userAccount = this.loginForm.account;
			const userPassword = this.loginForm.passWord;
			if (!userAccount) {
				return this.$message({
					type: "error",
					message: "账号不能为空！",
				});
			}
			if (!userPassword) {
				return this.$message({
				type: "error",
				message: "密码不能为空！",
				});
			}
			// console.log("用户输入的账号为：", userAccount);
			// console.log("用户输入的密码为：", userPassword);
			localStorage.setItem('userAccount', userAccount)
			localStorage.setItem('userPassword', userPassword)
			var as = "#/index";
			window.open(`${as}`, '_self')
		}
	}
}