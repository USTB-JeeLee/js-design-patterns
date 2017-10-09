//快速排序算法：从数组中选定一个基数，然后把数组中的每一项与此基数做比较，
//小的放入一个新数组，大的放入另外一个新数组。
//然后再采用这样的方法操作新数组。直到所有子集只剩下一个元素，排序完成。
var examplearr=[8,94,15,88,55,76,21,39];
function fastsort(arr){
    if(arr.length<2){
        return arr;
    }
    var left=[];
    var right=[];
    var pivotIndex=Math.floor(arr.length/2);
    var pivot=arr.splice(pivotIndex,1)[0];
    for(i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }
    }
    return fastsort(left).concat([pivot],fastsort(right));
}
console.log(fastsort(examplearr));

function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value)
}

asyncPrint('hello world', 50);

function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve,ms);
    })
}

async function asyncPrint(value,ms) {
    await timeout(ms);
    console.log(value);
}
