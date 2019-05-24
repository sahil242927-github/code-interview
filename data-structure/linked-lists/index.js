/* Linked list is an ordered collection of data. */
/* collection contains a number of different nodes */

/* NODE CLASS TO CREATE LINKED LIST NODES */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    //this.head = new Node(data, this.head);

    // code reuse
    this.insertAt(data, 0);
  }
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      node = node.next;
      counter++;
    }
    return counter;
  }
  getFirst() {
    //return this.head;

    // code reuse
    return this.getAt(0);
  }
  getLast() {
    /* if (!this.head) return null;

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    } */

    // code reuse
    return this.getAt(this.size() - 1);
  }
  clear() {
    return (this.head = null);
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    // if there is no second node
    if (!this.head.next) {
      return this.head;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // chain is empty
      this.head = new Node(data);
    }
  }
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }
  removeAt(index) {
    // if the list is empty
    if (!this.head) {
      return null;
    }

    // this solution will also work if there is only one node
    // so "this.head.next" will point to null
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    // if the given index is not found, the getAt() will return null;
    // if the index is greater then list only by one then we also need to handle that case
    // by adding condition "!previous.next"
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }
  insertAt(data, index) {
    // if the list is empty
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    // if previous.next returns null the this is our last index
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
}

/*const list = new LinkedList();
// list.inserFirst(15);
list.inserFirst(5);
list.inserFirst(225);
list.inserFirst(25);

//console.log(list.size());
//console.log(list.removeFirst());
list.insertLast(100);
//console.log(JSON.stringify(list));*/

module.exports = { Node, LinkedList };
