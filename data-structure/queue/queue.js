/* 
--Discription

crate a queue data-structure. The Queue should be class with methods
'add' and 'remove'.

--Example:
const q = new Queue();
q.add(1);
q.remove(); returns 1

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
q.add(5);
q.add(6);
q.add(10);

console.log(q);
console.log(q.remove());
console.log(q.peek());
