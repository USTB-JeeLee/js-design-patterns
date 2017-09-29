var arr = [12,23,23,23,12,12,232,34];
console.log(Array.from(new Set(arr)))

//找出数组中最大的数
var arr = [12,344,4655,6,673,2,45];
function max(prev,next) {
	return Math.max(prev,next)
}
console.log(arr.reduce(max))

var arr = [12,344,4655,6,673,2,45];
console.log(Math.max.apply(null,arr))

var arr = [12,344,4655,6,673,2,45];
function max(arr){
	return Math.max(...arr)
}
console.log(max(arr))


//找出数组中最大的三个数
var arr = [12,23,23,23,12,12,232,34];
var number = Array.from(new Set(arr));
var bubble = number.sort(function(a,b){
	return a - b
});
console.log(bubble.slice(bubble.length-4))

//数组扁平化
var arr = [2,[23,43,[343,45]]];
function flatten(arr) {
	while(arr.some(item => Array.isArray(item))){
		arr = [].concat(...arr)
	}
	return arr
}
console.log(flatten(arr))

var deepCopy = function (obj) {
    if (typeof obj !== 'object') {
        return
    }
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj
}
var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}];
var arr2 = deepCopy(arr)
arr[0] = 'new';
console.log(arr2)
console.log(arr)