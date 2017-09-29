var num = 1000;
var randomNum = Math.ceil(Math.random() * num);
document.title = randomNum;
var arr = [];
for(var i = 0;i < num;i++){
	arr.push(i)
}

//顺序查找
function show1(arr,randomNum) {
	for(var i=0;i<arr.length;i++) {
		if(arr[i] == randomNum) {
			return randomNum
		}
	}
}
console.log(show1(arr,randomNum))

//二分查找
function show2(arr,randomNum) {
	var first = 0;
	var last = arr.length - 1;
	while(first <= last) {
		var midIndex = Math.floor((first + last)/2);
		if(randomNum < arr[midIndex]) {
			last = midIndex - 1
		}else if(randomNum > arr[midIndex]) {
			first = midIndex + 1
		}else {
			return arr[midIndex]
		}
	}
}
console.log(show2(arr,randomNum))

//打乱顺序
var arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.sort(function() {
	return Math.random() - 0.5
}))