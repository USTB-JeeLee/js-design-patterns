反转字符串
第一种：用for循环加上charAt
function reverse(str) {
	const len = str.length;
	let newStr = "";

	for(let i =0;i<len;i++){
		newStr = str.charAt(i) + newStr
	}

	return newStr
}
console.log(reverse('abcdefg'))

第二种：递归+slice
function reverse(str) {
	if(str.length === 1) {
		return str
	}
	return str.slice(-1) + reverse(str.slice(0,-1))
}
console.log(reverse('abcdefg'))

第三种：使用reduce方法
function reverse(str){
	return str.split("").reduce((prev,next) => next + prev)
}
console.log(reverse('abcdefg'))

第四种：使用reverse()方法
function reverse(str) {
	return str.split('').reverse().join('')
}
console.log(reverse('abcdefgh'))

