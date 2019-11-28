/* Javascript object supports only one key object
  Example : 
*/

const x = {};
const a = {};
const b = { num: 1 };

x[a] = "a";
x[b] = "b";

/* console.log(x) => return  { '[object Object]': 'b' } 
 it replaces the key "a" with "b" as it supports only object as key
if we do multiple objects then it only remembers the last one.

So this is the reason we use map
*/

/* For creating a map, we have to use a constructor */
const map = new Map();
map.set(a, "a");
map.set(b, "b");

/* NOTES::=> 
  1. you can also chain the above like this
    map.set(a, 'a').set(b,'b');

  2.map store unique key so if you add same key again, it will replace it with new key and value
  
  3.  if we need to iterate a regular object, we have to use for-in loop which is bad,
      but because "Map" has Symbol.iterator, we can use for-of loop which we use for array
  
  4. you can delete a value on map using =>  map.delete(b)

  5. iterating Map
    for (const [key, value] of map.entries()) {
      console.log(`${key} => ${value}`);
    }
  
  6. we can easily convert Map into array
     const arr = [...map];
     console.log(arr);  => [ [ {}, 'a' ], [ { num: 1 }, 'b' ] ]
  */

/* WEAKMAP::=>
    =>  Why need weakMap 
    Once you define a Map key, it holds into memory and it doesn't let it garbage 
    collected even the original key is removed so that's why we need "WeakMap" 

    Definition from MDN :=>
    The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.

    important ::=> WeakMap is not iterable so forEach or for-of will not work
*/

/* WeakMap Example */
let myMap = new Map();
let myWeakMap = new WeakMap();

let obj1 = { foo: "bar" };
let obj2 = { bar: "baz" };

myMap.set(obj1, "hello");
myWeakMap.set(obj2, "hello");

//console.log(myMap.get(obj1)); // hello
//console.log(myWeakMap.get(obj2)); // hello

obj1 = null;
obj2 = null;

console.log(`mayMap obj1 => ${myMap.get(obj1)}`); // undefined
// it is keeping the reference inspite of setting key as null
myMap.forEach((key, val) => console.log(key, val)); // hello { foo: 'bar' }

console.log(`myWeakMap obj2 => ${myWeakMap.get(obj2)}`); // undefined
