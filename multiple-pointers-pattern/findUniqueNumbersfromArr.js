/* We used 2 loops and separate array and & object 
which is extra space complexity. Solution can be improved */
const uniqueValueValues = (arr) => {
    let frequency = {}
    let uniqueValues = []
    for(let num of arr) {
      frequency[num] = (frequency[num] || 0) + 1
    }
    
    for(let key in frequency) {
     if(frequency[key] === 1) 
       uniqueValues.push(key)
    }
    return uniqueValues.length ? uniqueValues : 'No unique value'  ;
  }
  

  uniqueValueValues([1,1,2,2,4,4,5,5,6,2,3,4,3,6])
  