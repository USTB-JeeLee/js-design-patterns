//策略模式：将定义的一组算法封装起来，使其相互之间可以替换。
//封装的算法具有一定的独立性，不会随客户端变化而变化
//策略对象
优点：策略模式封装了一组代码簇，并且封装的代码互相之间保持独立，便于对算法的重复引用，
      提高了算法的复用率。
缺点：由于每种算法相互独立，这样对于一些复杂的算法处理相同逻辑的部分无法实现共享，这就会
			造成一些资源的浪费。
var PriceStrategy = function() {
	//内部算法对象
	var stragtegy = {
		//100返30
		return30: function(price) {
			//+priceInt转化为数字类型
			return +price+parseInt(price / 100) * 30;
		},
		//100返50
		return50: function(price) {
			return +price+parseInt(price / 100) * 50;
		},
		//9 折
		return90: function(price) {
			//javascript在处理小数乘除法时有bug，故转化为整数
			return 100*90 / 10000 
		},
		//8折
		percent80: function(price) {
			return 100*80 / 10000
		},
		//5折
		percent50: function(price) {
			return 100*50 / 10000
		}
	}
	//策略算法调用接口
	return function(algorithm, price) {
		//如果算法存在，则调用算法，否则返回false
		return stragtegy[algorithm] && stragtegy[algorithm](price)
	}
}()

var price = PriceStrategy('return50','314.67');
console.log(price);

例如jquery中的缓存函数就是用策略模式写的
$('div').animate({width: '200px'},1000,'linear');
$('div').animate({width: '200px'},1000,'swing');


表单验证
//表单正则验证策略对象
var InputStrategy = function() {
	var stragtegy = {
		//是否为空
		notNull: function(value) {
			return /\s+/.test(value) ? '请输入内容' : '';
		},
		//是否为一个数字
		number: function(value) {
			return /^[0-9]+(\.[0-9]+)?$/.test(value) ? '' : '请输入数字';
		},
		//是否为本地电话
		phone: function(value) {
			return /^\d{3}\-\d{8}$|^\d{4}\-\d{7}$/.test(value) ? '' : '请输入正确的电话号码格式如010-1234567或0418-1234567';
		}
	}

	return {
		//验证接口type算法value表单值
		check: function(type, value) {
			//去除收尾空白符
			value = value.replace(/^\s+|\s+$/g,'');
			return stragtegy[type] ? stragtegy[type](value) : '没有该类型的检测方法'
		},
		//添加策略
		addStrategy: function(type,fn) {
			stragtegy[type] = fn;
		}
	}
}();

//拓展，可以延伸算法
InputStrategy.addStrategy('nickName',function(value) {
	return /^[a-zA-Z]\w{3,7}$/.test(value) ? '' : '请输入4位昵称，如：YYQH'
});