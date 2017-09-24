//JSONP实现原理
<script>
	window.callback = function(data) {
		//这是我们跨域得到的信息
		console.log(data)
	}
</script>

<script src="http://coding.m.imooc.com/api.js"></script>
//以上将返回callback({x:200, y:100})