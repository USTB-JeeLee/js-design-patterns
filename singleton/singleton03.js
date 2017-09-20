/*1.普通的单体
2.具有局部变量的强大单体
3.惰性单体
4.分支单体*/

/*单体模式在JS中使用非常地频繁
通过确保单体对象只存在一个实例
你就可以确信自己所有的代码中使用的是全局资源*/

(function(){
	//模拟一个Ajax操作
	function Ajax(){}
	Ajax.request = function(url,fn){
		if(true) {
			fn('lijin',"vue.js")
		}
	}
	//我们用闭包的原理解决在01例子中出现的问题
	var userInfo = (function(){
			var userInfo = "";  //私有变量
			function init(){
				//利用闭包是单体有自己的私有局部变量
			var name = ""
			var code = ""
			//利用Ajax访问数据库来取得数据
			Ajax.request('www.baidu.com',function(n,c){
				name = n;
				code = c;
			})
			return {
				name: name,
				code: code
			}
		}
		
		return {
			getInstance: function(){
				if(userInfo){
					return userInfo
				}else{
					userInfo = init();
					return userInfo
				}
			}
		}
	})()
	//测试
	alert(userInfo.getInstance().name)
})()