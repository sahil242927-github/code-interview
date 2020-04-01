class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// Example of how node works inside Linked List
/* let fistNode = new Node("Hi");
fistNode.next = new Node("There");
fistNode.next.next = new Node("how");
fistNode.next.next.next = new Node("are");
fistNode.next.next.next.next = new Node("you"); */

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let i = 0;
    let current = this.head;
    while (i !== index) {
      i++;
      current = current.next;
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}

let list = new SinglyLinkedList();

list.push(10);
list.push(20);
list.push(30);
list.traverse();
//list.unshift(50);
//console.log("Updated List");
list.traverse();
list.set(0, 50);
list.traverse();
console.log(list.get(1));
