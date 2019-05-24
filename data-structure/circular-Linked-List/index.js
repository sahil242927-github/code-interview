const { LinkedList } = require("../linked-lists");

function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    // exact same instance in memory
    if (slow === fast) {
      return true;
    }
  }

  // this is not a circular list
  return false;
}
const list = new LinkedList();
list.insertAt(100, 0);
list.insertAt(200, 1);
list.insertAt(300, 2);
list.insertAt(400, 3);

// creating circular list
list.getAt(3).next = list.getAt(2);

console.log(list.getAt(2).next);
console.log(circular(list));

module.export = circular;
