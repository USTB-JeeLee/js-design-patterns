/*1.普通的单体
2.具有局部变量的强大单体
3.惰性单体
4.分支单体*/

/*单体模式在JS中使用非常地频繁
通过确保单体对象只存在一个实例
你就可以确信自己所有的代码中使用的是全局资源*/

(function(){
	//先看来一个最简单的单体
	//例如用户登录后的信息可以用一个单体存储
	var UserInfo = {
		name: 'lijin',
		code: '010101',
		deptName: 'PD',
		deptCode: 'PD001',
		getName: function(){
			return 'JeeLee'
		}
	}
	alert(UserInfo.getName());
})()