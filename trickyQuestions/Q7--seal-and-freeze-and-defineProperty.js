/* 
1.  deep copy shallow copy
2.  null === null
3.  event capturing == event bubbling
4.  Javascript context and scopes
5.  can we call function constructor as a function
6.  object.assign
7.  can we consider normal function as a closer
8.  splice vs slice
9.  infinity === inifinity
10  mixins in javascript
11. null === null
12. Difference between object and array
13. How many datatype are in JavaScript
14. what is the difference between null and undefined
15. null === undefined  // false
16. null == undefined // true
17. proto vs prototype
*/

/* seal() = it doesn't allow you to add new property, 
            but allows you to modify */
let fruits = { name: "mango", price: 24 };
Object.seal(fruits);
Object.freeze(fruits);
