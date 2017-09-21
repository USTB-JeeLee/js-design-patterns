前端使用异步的场景有哪些
1.定时任务：setTimeout,setInterval
2.网络请求：ajax请求，动态<img>加载
3.事件绑定

//ajax请求代码示例
console.log('start')
$.get('/data.json',function(data1){
	console.log(data1)
})
console.log('end')

//<img>加载示例
console.log('start')
var img = document.createElement('img')
img.onload = function(){
	console.log('loaded')
}
img.src = '/xxx.png'
console.log('end')

//事件绑定示例
console.log('start')
document.getElementById('btn1').addEventListener('click',function(){
	alert('clicked')
})
onsole.log('end')

同步和异步的区别是什么
1.同步会阻塞代码，而异步不会
2.alert是同步，setTimeout是异步