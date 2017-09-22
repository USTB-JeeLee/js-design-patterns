cookie，localStorage和sessionStorage的区别
1.容量：cookie存储量太小，只有4KB；HTML5专门为存储设计，最大容量为5M
2.是否会携带到ajax中：cookie所有HTTP请求都带着，会影响获取资源的效率
3.API易用性：cookie的API简单，需要封装才能用document.cookie = ...；localStorage.setItem(key,value);
						 localStorage.getItem(key)