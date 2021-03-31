const getCountOfUniqueValues = (arr) => {
    if(arr.length === 0) return 0;
     let i = 0;
 
     // if left & right are same, move the right 
    // if left and right are not same move the left
    // and replace left value from right
     for(let j =1; j < arr.length; j++) {
         if(arr[i] !== arr[j]) {
              i++ 
             arr[i] = arr[j]
         } 
     }
   return i + 1
   
 }
 
 console.log(getCountOfUniqueValues([1,1,1,2]))