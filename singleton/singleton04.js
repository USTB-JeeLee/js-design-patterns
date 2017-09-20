/*1.普通的单体
2.具有局部变量的强大单体
3.惰性单体
4.分支单体*/

/*单体模式在JS中使用非常地频繁
通过确保单体对象只存在一个实例
你就可以确信自己所有的代码中使用的是全局资源*/

/*分支单体
用处：
在做Ajax的时候根据不同的浏览器获得不同的XHR(XMLHttpRequest)
在不同的分辨率的情况下初始化不一样的界面(PACT2)*/

(function(){
	//得到机器的分辨率
	var screenWidth = window.screen.width;
	var screenHeight = window.screen.height;
	var portalInfo = (function(){
		var $1366 = {info: '121323'}
		var $1024 = {info: '35454'}
		if(screenWidth == 1366){
			return $1366
		}else if(screenWidth == 1024){
			return $1024
		}
	})();
	alert(portalInfo.info)
})()