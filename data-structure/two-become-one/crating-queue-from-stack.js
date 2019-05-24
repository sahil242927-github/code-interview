/* The most popular question "bar none"

Implement a Queue data structure using two stacks.
// Do not create an array inside of the Queue class.

*/

const Stack = require("./Stack");

class Queue {

  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record)
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop())
    }
    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop())
    }
    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop())
    }
    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop())
    }
    return record;
  }
}

const q = new Queue();
q.add("green");
q.add("blue");
q.add("red");
console.log(q)
q.remove();
console.log(q.peek());
