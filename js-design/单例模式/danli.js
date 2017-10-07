单例模式：又称为单体模式，是指允许实例化一次的对象类。有时我们也用一个对象来规划一个命名空间，
					井井有条地管理对象上的属性和方法


//命名空间的管理员
var lijin = {
	g: function(id) {
		return document.getElementById(id)
	},
	css: function(id,key,value) {
		//通过当前对象this来使用g方法
		this.g(id).style[key] = value;
	}
	//......
}					


//无法修改的静态变量
var Conf = (function(){
	//私有变量
	var conf = {
		MAX_NUM: 100,
		MIN_NUM: 1,
		COUNT: 1000
	}
	//返回取值器对象
	return {
		//取值器方法
		get: function(name) {
			return conf[name] ? conf[name] : null;
		}
	}
})();

var count = Conf.get('COUNT');
console.log(count);

//惰性单例
//惰性载入单例
var LazySingle = (function(){
	//单例实例引用
	var _instance = null;
	// 单例
	function Single() {
		//这里定义私有属性和方法
		return {
			publicMethod: function(){},
			publicProperty: '1.0'
		}
	}
	//获取单例对象接口
	return function(){
		//如果未创建单例将创建单例
		if(!_instance) {
			_instance = Single();
		}
		//返回单例
		return _instance;
	}
})();

//测试
console.log(LazySingle().publicProperty);