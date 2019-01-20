/* 
----Direction 
Implement a "peek" method in this Queue class.
Peek should return the last element (The next one to be returned) from
the Queue without removing it

The peek() method of Queue Interface returns the element at the front the container. It does not deletes the element in the container. This method returns the head of the queue. The method does not throws an exception when the Queue is empty, it returns null instead.

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
    return this.data.length;
  }
}

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);

console.log(q.peek());

module.exports = Queue;
