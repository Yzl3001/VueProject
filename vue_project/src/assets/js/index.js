export default {
    data () {
		return {	
			imageHP:['imageone', 'imagetwo'],			
			images: ["img-one", "img-two", "img-three", "img-four"],
			value: [],
			count: 10,
			loading: false,
			currentTime: '',
			currentTime1: ''
		}
	},
    computed: {
		noMore () {
			return this.count >= 30
			},
			disabled () {
				return this.loading || this.noMore
		}
	},
    methods: {
		load () {
			this.loading = true
				setTimeout(() => {
					this.count += 2
					this.loading = false
				}, 700)
		},
		jump:function(i){
			var as = ["https://element-plus.gitee.io/zh-CN/", "https://www.nowcoder.com/login", "https://passport.csdn.net/login?code=applets", "https://passport.bilibili.com/login"];
			window.open(`${as[i - 1]}`, '_blank')
		},
		Exit:function() {
			console.log("1111")
			localStorage.clear();
			window.open(`#/login`, '_self')
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
