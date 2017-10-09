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
}	

	var nodes = [8,5,4,3,67,23,787,46,87,23,1];
	var binaryTree = new BinaryTree();
	nodes.forEach(function(key){
		console.log(binaryTree.insert(key));
	})
