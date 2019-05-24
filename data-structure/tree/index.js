/* ---Directions:

1. Create a Node class. The constructor should accept an argument
   that gets assign to the data property and initialize an empty array
   for storing children.
   The class should have methods "add" and "remove"

2. Create a Tree class. The Tree constructor should initialize a "root" property null.

3. implement "traverseBSF" and "traverseDFS" on the tree class. Each method should except
   a function that gets called with each element in the tree.

*/

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }
  remove(data) {
    this.children = this.children.filter(child => child !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }
  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

const node = new Node("CEO");
console.log(`node : ${JSON.stringify(node)}`);
const tree = new Tree();
node.add("CTO");
node.add("CMO");
node.add("COO");

node.children[0].children.push(new Node("VP Engineering"));
node.children[0].children.push(new Node("VP Infrastructure"));

tree.root = node;
console.log(JSON.stringify(tree.root));

let letters = [];
tree.traverseDF(node => {
  letters.push(node.data);
});

console.log(letters);
