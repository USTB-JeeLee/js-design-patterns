// 浅拷贝
var shllowCopy = function(obj) {
	//判断是数组还是对象
	if(typeof obj !== 'object') {
		return 
	}
	var newObj = obj instanceof Array ? [] : {};
	for(var key in obj) {
		if(obj.hasOwnProperty(key)) {
			newObj[key] = obj[key];
		}
	}

	return newObj;
}


// 深拷贝
var deepCopy = function(obj) {
	//判断是数组还是对象
	if(typeof obj !== 'object') {
		return 
	}
	var newObj = obj instanceof Array ? [] : {};
	for(var key in obj) {
		if(obj.hasOwnProperty(key)) {
			newObj[key] = type obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
		}
	}

	return newObj;
}