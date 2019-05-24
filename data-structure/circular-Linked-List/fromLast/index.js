/* Direction--
Given a linked list and interger n, returns the element n spaces from the last node in the
list. Do not call the size() method of the linked list. Assume that n will always be less then the
length of the list.

----Example:
const list = new List();
list.insertLast('a');
list.insertLast('b');
list.insertLast('c');
list.insertLast('d');

fromLast(list, 2).data // b

*/

function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  // setting fast to n spaces
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  // move forward both node untill fast hits the last node
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

module.exports = fromLast;
