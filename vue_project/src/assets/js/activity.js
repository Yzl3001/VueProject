export default {
    data () {
		return {	
			imageHP:['imageone', 'imagetwo'],		
			currentPage1: 5,
			currentTime: '',
			currentTime1: ''
		}
	},
    methods: {
    	errorHandler() {
    	},
    	horizontal() {
    	},
    	handleSelect() {
    	},
    	handleSizeChange() {
    	},
		handleCurrentChange(val) {
			var as = ["#/activity", "#/activity2", "#/activity3",];
			window.open(`${as[ val - 1]}`, '_self')
		},
		Exit:function() {
			console.log("1111")
			localStorage.clear();
			window.open(`#/login`, '_self')
		},
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