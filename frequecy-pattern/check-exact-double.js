/* 
Q: We have given 2 arrays & we need to check
each item of the first array has square for each item in the
second array.

return true / false
*/

/* The BigO of this function is O(n^2) since indexOf & splice
iterates the entire array */
const checkDouble = (arr1, arr2) => {
    if(arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        /* Attention!: indexOf iterates the entire
        array so the BigO of "indexOf" is O(n) */
        let checkIndex = arr2.indexOf(arr1[i] ** 2)
        
        if(checkIndex === -1) {
            return false
        }
        /* Attention!: splice iterates the entire
        array so the BigO of "splice" is O(n) */
        arr2.splice(checkIndex, 1)
    } 
    return true;  
}
//console.log(checkDouble([1,2,3], [1,4,9]))



/* Optimize the above function by using
 2 separate loop as they are vastly better than nested loop */

 /* AttentionL!! : we did not use nested loop rather 2 
 separate loop so the function's BigO is O(n) */
 const checkDoubleOptimized = (arr1, arr2) => {
     if(arr1.length !== arr2.length) return false;

    const frequencyObj1 = {}
    const frequencyObj2 = {}

    for(let val of arr1){
        frequencyObj1[val] = (frequencyObj1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyObj2[val] = (frequencyObj2[val] || 0) + 1
    }
    console.log(frequencyObj1)
    console.log(frequencyObj2)

    // checking for squared value
    for(let key in frequencyObj1) {
        if(!(key ** 2 in frequencyObj2)) return false

        // checking for frequencies
        if((frequencyObj2[key ** 2] !== frequencyObj1[key])) return false
    }
    return true;
 }
 console.log(checkDoubleOptimized([1,2,3,2],[1,4,9,4]))

