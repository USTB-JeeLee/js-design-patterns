function BinaryTree() {
	var Node = function(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}

	var root = null;

	var insertNode = function(node, newNode) {
		if(newNode.key < node.key) {
			if(node.left === null) {
				node.left = newNode
			} else {
				insertNode(node.left,newNode)
			}
		}else {
			if(node.right === null) {
				node.right = newNode
			} else {
				insertNode(node.right,newNode)
			}
		}
	}

	this.insert = function(key) {
		var newNode = new Node(key);
		if(root === null) {
			root = newNode;
		}else {
			insertNode(root, newNode)
		}
	}

	var inOrderTraverseNode = function(node,callback) {
		if(node !== null) {
			callback(node.key);
			inOrderTraverseNode(node.left,callback);
			
			inOrderTraverseNode(node.right,callback)
		}
	}

	this.inOrderTraverse = function(callback) {
		inOrderTraverseNode(root,callback)
	}

	var minNode = function(node) {
		if(node) {
			while (node && node.left !== null) {
				node = node.left
			}

			return node.key
		}

		return null;
	}

	this.min = function() {
		return minNode(root);
	}

	var maxNode = function(node) {
		if(node) {
			while (node && node.right !== null) {
				node = node.right
			}

			return node.key
		}
	}

	this.max = function() {
		return maxNode(root)
	}
}	

var nodes = [8,5,4,3,67,23,787,46,87,23,1];
var binaryTree = new BinaryTree();
nodes.forEach(function(key){
	binaryTree.insert(key);
})

var callback = function(key) {
	console.log(key)
}

binaryTree.inOrderTraverse(callback)
console.log("min node is:" + binaryTree.min())
console.log("max node is:" + binaryTree.max())