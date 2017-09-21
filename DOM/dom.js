Array.prototype.unique = function(){
	var object = {};
	var arr = [];
	for(var i = 0;i<this.length;i++){
		if(!object[this[i]]) {
			arr.push(this[i])
			object[this[i]] = 1
		}
	}
	return arr
}
var arr1 = ['12','232','12',232,334,2,2,23,4];
console.log(arr1.unique())

function toUpperCase(data) {
	for(var key in data){
		data[key.slice(0,1).toUpperCase() + key.slice(1)] = data[key];
		delete data[key]
	}
	return data
}

console.log(toUpperCase({"myKey": "myValue"}))

var tree = {
	value:1, 
	left: {
		value:2,
		left: {
			value: 4
		}
	},
	right: {
		value: 3
		left: {
			value: 5,
			left: {
				value: 7
			},
			right: {
				value: 8
			}
		},
		right: {
			value: 6
		}
	}
}

var preOrder = function(node) {
	if(node) {
		console.log(node.value);
		preOrder(node.left);
		preOrder(node.right)
	}
}
preOrder(tree)

var A = 'A',B,C,D,E,F,H,G,H,I,J,K;
var tree = {  
	value: A,
	left: {  
		value: B,
		left: {  
			value: D,
			left: {  
				value: H  
			},  
			right: {  
				value: I 
			}  
		},
		right: {  
			value: E,
			left: {  
				value: J  
			},  
			right: {  
				value: K 
			}  
		}  
	},  
	right: {  
		value: C,  
		left: {  
			value: F 
		},  
		right: {  
			value: G
		}  
	}  
}  

var preOrder = function (node) {  
	if (node) {  
		console.log(node.value);  
		preOrder(node.left);  
		preOrder(node.right);  
	}  
}  

preOrder(tree);  