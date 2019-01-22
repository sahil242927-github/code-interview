/* 
--- Direction
// The stack should be a class with methods 'push', 'remove', and 'peek'

Example:

const s = new Stack()
s.push(1)
s.push(2)
s.remove() // returns 2
s.remove() // returns 1

*/

class Stack {
  constructor() {
    this.data = [];
  }
  push(record) {
    this.data.push(record);
  }
  remove() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}
module.exports = Stack;
