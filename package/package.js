//动态规划算法
var M = 5;
var W = 16;
var arrP = [4,5,10,11,13];
var arrW = [3,4,7,8,9];

function show(M,W,arrP,arrW) {
	var result = [];
	for(var i = 0;i<=M;i++) {
		result[i] = []
		for(var j=0;j<=W;j++){
			if(i==0) {
				result[i][j] = 0
			}else if(arrW[i-1] > j){
				result[i][j] = result[i-1][j];
			} else {
				result[i][j] = Math.max(arrP[i-1] + result[i-1][j-arrW[i-1]],result[i-1][j])
			}
		}
	}
	//console.log(result)
	return result[i-1][j-1]
}
console.log(show(M,W,arrP,arrW))


//贪心算法,适用于求部分背包问题
var M = 5;
var W = 16;
var arrP = [4,5,10,11,13];
var arrW = [3,4,7,8,9];

function show(M,W,arrP,arrW) {
	var wholeArr = [];
	var result = 0;
	for(var i=0;i<M;i++) {
		wholeArr.push({p: arrP[i],w:arrW[i],r: arrP[i] / arrW[i]})
	}
	//console.log(wholeArr)
	wholeArr.sort(function(obj1,obj2) {
		return obj2.r - obj1.r
	})
	//console.log(wholeArr)
	for(var i=0;i<wholeArr.length;i++) {
		if(wholeArr[i].w <= W) {
			result += wholeArr[i].p;
			W -= wholeArr[i].w;
		}else {
			result += W/wholeArr[i].w * wholeArr[i].p;
			break;
		}
	}
	return result.toFixed(2);
}
console.log(show(M,W,arrP,arrW))