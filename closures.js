/* COSURE USE CASES */
/* you can use a closure anywhere that you might normally use an object with only a single method */

// Example 1 => closure as function factory
const makeAdder = x => y => y + x;

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(5)); // 10
console.log(add10(10)); // 20

// Example 2 => Private function with closure
/* Note: we have used iffi function to create a single lexical environment that is shared by three functions: counter.increment, counter.decrement, and counter.value. */
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

counter.increment();
console.log(counter.value());

// Example 3 => Private function with closure
/* We could store the counter function in a separate variable makeCounter and use it to create several counters. */

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
};

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
console.log(counter1.value()); /* Alerts 2 */
counter1.decrement();
console.log(counter1.value()); /* Alerts 1 */
console.log(counter2.value()); /* Alerts 0 */

// Example 4 => Creating closures in loops: A common mistake */

/* 
    If you try this code out, you'll see that it doesn't work as expected 
    The reason for this is that the functions assigned to "onfocus" are closures;
    Note: "Three closures" have been created by the loop, but each one shares the same single lexical environment,

    Because the loop has already run its course by that time, the item variable object has been left pointing to the last entry in the helpText list.
*/

/* This is the HTML for form 
    <p id="help">Helpful notes will appear here</p>
    <p>E-mail: <input type="text" id="email" name="email"></p>
    <p>Name: <input type="text" id="name" name="name"></p>
    <p>Age: <input type="text" id="age" name="age"></p>
*/

function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" }
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    };
  }
}

// solution 1 to the above problem is by  "function factory"
function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

//
function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" }
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

// solution 2 to the above problem is by  "anonymous closures"
function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" }
  ];

  for (var i = 0; i < helpText.length; i++) {
    (function() {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = function() {
        showHelp(item.help);
      };
    })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
  }
}

// solution 3 to the above problem is by  "let keyword"
function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" }
  ];

  for (var i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    };
  }
}

/* It is unwise to unnecessarily create functions within other functions if closures are not needed for a particular task, as it will negatively affect script performance both in terms of processing speed and memory consumption */
