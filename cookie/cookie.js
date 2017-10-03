cookie，localStorage和sessionStorage的区别
1.容量：cookie存储量太小，只有4KB；HTML5专门为存储设计，最大容量为5M
2.是否会携带到ajax中：cookie所有HTTP请求都带着，会影响获取资源的效率
3.API易用性：cookie的API简单，需要封装才能用document.cookie = ...；
						 localStorage.setItem(key,value);
						 localStorage.getItem(key)


//设置cookie封装
function setCookie(name, value, iDay) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + iDay);

	document.cookie = name + '=' + value + ';expires=' + oDate;
}						 

setCookie('userName','lijin',365);
setCookie('password','123456',14);

//获取cookie封装
function getCookie(name) {
	var arr = document.cookie.split('; ');

	for(var i=0;i<arr.length;i++){
		var arr2 = arr[i].split('=');

		for(arr2[0] == name) {
			return arr2[1]
		}
	}

	return '';	
}


//删除cookie封装
function removeCookie(name) {
	setCookie(name,1,-1);
}