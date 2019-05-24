/* 
--Discription

crate a queue data-structure. The Queue should be class with methods
'add' , 'remove', and 'peek'.

peek() => The method returns the head of the Queue.

--Example:
const q = new Queue();
q.add(1);
q.add(2);
q.remove(); returns 1
q.peek(); returns 1 "the head of the queue"

*/

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);

  }

  remove() {
    const removedItem = this.data.pop();
    return (removedItem) ? removedItem : "There is no item to remove";

  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const q = new Queue();
q.add(5);
q.add(6);
q.add(10);

console.log(q);
console.log(q.remove());
console.log(q.remove());
console.log(q.peek());
