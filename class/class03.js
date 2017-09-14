/*javascript原型模式(prototype)
1.原型是一个对象，其他的对象可以通过他实现属性的继承
	所有的对象在默认的情况下都有一个原型，因为原型本身也是对象
	一个类的真正原型是被类的内部的[prototype]属性所指出
2.什么可以称之为对象
	在javascript一个对象就是任何的无序的键值对的集合 function var a = {}
	如果它不是一个主数据类型(undefined,null,boolean,number,String)
	其他的通通叫做对象
	*/
	(function(){
		/*javascript中的原型(prototype)是和函数(function)紧密结合的
		var o = {}他不是用function 他有原型吗？
		答：必须的
		每一个通过new操作符生成出来的对象都持有一个属性__proto__，
		这个属性保存了创建他的构造函数的prototype的原型的引用*/
		function Person(){}		//定义一个空对象
		Person.prototype.name = "JeeLee";
		Person.prototype.showName = function() {
			//这个this表示调用本函数的一个具体实例化的类
			alert(this.name)
		}
		new Person().showName();

		//cat空类
		var cat = {};
		//默认隐藏的调用下面的代码
		Object.getPrototypeOf(cat).name = "JeeLee";
		cat.__proto__.master = "lijin";
		//测试
		cat.age = 2;
		cat["sex"] = "MAN";
		alert(cat.name + " " + cat.age + " " + cat["sex"] + " " +cat.master);

		//利用原型链实现类的继承
		function per() {
			this.getName = function(str) {
				alert(str)
			}
		}
		per.prototype.getAge = function(age) {
			alert(age)
		}
		var a = {};  //空类
		a.__proto__ = per.prototype;
		a.getAge(2)		//2
		//a.getName("JeeLee");		//a.getName is not a function


		/*简单方式实现继承
		JS是无法实现多继承的*/
		var b = {};
		b.__proto__ = new per();
		//改变constructor函数
		b.__proto__.constructor = b;
		b.getAge(2);
		b.getName("lijin");

		function m() {
			this.showM = function() {
				alert("I AM M")
			}
		}

		function n() {
			this.showN = function() {
				alert("I AM N")
			}
		}

		function k(){}
		n.prototype = new m();
		n.prototype.constructor = n;

		k.prototype = new n();
		k.prototype.constructor = k;

		var boo = new k();
		boo.showN();
		boo.showM();

	})()