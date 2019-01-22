/* 
----Direction 
Implement a "peek" method in this Queue class.
Peek should return the last element (The next one to be returned) from
the Queue without removing it

The peek() method here returns head of the queue
Queue { data: [ 20, 16, 9 ] }  // peek() will return 9

*/
class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record);
  }
  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const q = new Queue();
q.add(9);
q.add(16);
q.add(20);

console.log(q.peek());

console.log(q);

module.exports = Queue;
