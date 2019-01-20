/* 
--Discription

crate a queue data-structure. The Queue should be class with methods
'add' and 'remove'.

Adding to the queue should store an element until it is removed.

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
}
