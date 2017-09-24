//一个人的寂寞-单体模式
//命名空间管理员
var Ming = {
	g: function(id) {
		return document.getElementById(id)
	},
	css: function(id,key,value) {
		//通过当前对象this来使用g方法
		this.g[id].style[key] = value
	}
	//...
}

//无法修改的静态变量
var Conf = (function() {
	//私有变量
	var Conf = {
		MAX_NUM = 100,
		MIN_NUM = 1,
		COUNT: 1000
	}
	//返回取值器对象
	return {
		//取值器方法
		get: function(name) {
			return Conf[name] ? Conf[name] : null;
		}
	}
})();

var count = Conf.get('COUNT');
console.log(count);