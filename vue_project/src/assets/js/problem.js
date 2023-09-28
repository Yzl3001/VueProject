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
	},
}