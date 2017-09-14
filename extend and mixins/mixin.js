//掺元类
//有的适合不需要严格的继承，我们真正需要的是一个类(几个)中的一些函数
(function(){
	//我们准备将要被聚合的函数
	var JSON = {};
	JSON.prototype = {
		toJSONString: function() {
			var outPut = [];
			for(key in this) {
				outPut.push(key+"-->"+this[key])
			}
			return outPut
		}
	}
	//制作聚合函数
	function mixin(receivingClass,givingClass) {
		for(methodName in givingClass.prototype) {
			//本类中没有这个的情况下我再聚合，否则跳过
			if(!receivingClass.prototype[methodName]) {
				receivingClass.prototype[methodName] = givingClass.prototype[methodName]
			}
		}
	}

	var o = function() {
		this.name = "JeeLee";
		this.age = 21;
	}
	mixin(o,JSON);
	var a = new o();
	document.write(a.toJSONString())
})