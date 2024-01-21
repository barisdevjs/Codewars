class Node {
  constructor (data, children = null) {
    this.data = data;
    this.children = children;
  }
}


function treeToArray (tree) {

    // make a breadth first traversal of the tree
    // and push the data to an array
    let queue = [tree];
    let result = [];
    while (queue.length) {
        let node = queue.shift();
        result.push(node.data);
        if (node.children) {
            queue = queue.concat(node.children);
        }
    }
    return result;
    
}
console.log(treeToArray((new Node(1, [new Node(2, [new Node(3), new Node(4), new Node(5)]), new Node(3, [new Node(7)])]))));