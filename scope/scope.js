说明this几种不同的使用场景
1.作为构造函数执行
2.作为对象属性执行
3.作为普通函数执行
4.call apply bind

function Foo(name) {
	this.name = name
}
var f = new Foo('lijin')

var obj = {
	name: 'A',
	printName: function(){
		console.log(this.name)
	}
}
obj.printName()

function fn(){
	console.log(this)  //this === window
}
fn()

//call apply bind
function fn1(name, age) {
	alert(name)
	console.log(this)
}
fn1.call({x:100},'lijin',20)

var fn2 = function(name, age) {
	alert(name)
	console.log(this)
}.bind({y:200})
fn2('lijin',20)


作用域
1.没有块级作用域
2.只有函数和全局作用域
//无块级作用域
if(true) {
	var name = 'lijin'
}
console.log(name)

//函数和全局作用域
var a = 100
function fn() {
	var a = 200
	console.log('fn',a)
}
console.log('global',a)
fn()

//作用域链
var a = 100
function fn() {
	var b =200

	//当前作用域没有定义的变量，即'自由变量'
	console.log(a) //100
	console.log(b) //200
}

闭包使用场景
1.函数作为返回值
2.函数作为参数传递
function F1() {
	var a = 100

	//返回一个函数(函数作为返回值)
	return function(){
		console.log(a)
	}
}

//f1得到一个函数
var f1 = F1()
var a = 200
f1() //100

//函数作为参数传递
function F1() {
	var a = 100

	//返回一个函数(函数作为返回值)
	return function(){
		console.log(a)		//自由变量，父作用域寻找
	}
}
var f1 = F1()

function F2(fn) {
	var a = 200
	fn()
}
F2(f1)

实际开发中闭包的应用
function isFirstLoad() {
	var _list = []
	return function(id) {
		if(_list.indexOf(id) >= 0){
			return false
		}else{
			_list.push(id)
			return true
		}
	}
}

//测试
var firstLoad= isFirstLoad()
firstLoad(10)
firstLoad(10)
firstLoad(20)

创建10个<a>标签 点击的时候弹出来对应的序号
var i
for(var i = 0;i < 10;i++){
	(function(i){
		var a = document.createElement('a')
		a.innerHTML = i + '<br>'
		a.addEventListener('click',function(e){
			e.preventDefault()
			alert(i)
		})
		document.body.appendChild(a)
	})(i)		//自执行函数，就是不用调用，只要定义完成，立即执行的函数
}