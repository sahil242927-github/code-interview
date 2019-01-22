const Queue = require("./queue");

function wave(sourceOne, sourceTwo) {
  const q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    console.log(sourceOne.peek());
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}
const q1 = new Queue();
q1.add(1);
q1.add(2);
q1.add(3);
q1.add(4);

//console.log(q1);

const q2 = new Queue();
q2.add("Yo");
q2.add("HI");
q2.add("No");

//console.log(q2);

const waveQ = wave(q1, q2);

console.log(waveQ);
