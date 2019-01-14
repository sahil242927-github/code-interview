/* 
1. Runtime complexity describe the performance of an Algorithm
2. How much processing power/time is required to run your algorithm
   if we double the input

   Runtime complexity is a term to describe how pereformant an algorithm is
   We use it to compare different solutions to a given problem
*/

/* 
Example 1 ::

String Reverse
--------------
abc  -->  cba

Details: each additional character == 1 step throug 1 loop
This would be `N` or `Linear` runtime.
There is a one-2-one relationship between input and the amount of work we have to do



Example 2 ::

Steps Algorithm
--------------
#-----
##----
###---
####--
#####-
######

Details: As we start to increase the value of `n` into our algorithm,
we have to significantly more things each time n was is increased by 1

n = 2, we have to do 4 things
n = 3, we have to do 9 things
n = 4, we have to do 16 things

This would be `N^2` or Quadractic runtime


Big `O` Notation
--------------------
O(n)    -->  Linear
O(1)    -->  Constant
O(N^2)  -->  Quadratic


=> Identifying Runtime Complexity 
    -----------------------------
    1. Iterating with a single for loop 
       through a single collection               ==>       O(n) `Linear`   

    2. Iterating through half a collection       ==>       Still O(n) `Linear`

    3. Iterating with 2 different collections	   ==>       O(n + m)
       with separate for loops
       Example: you are reversing 2 different
       string with 2 separate loops each for 1
       and there is no relation in them

    4. Two nested for loops iterating over the   ==>      O(N^2) `Quadratic`  === O(n*n)
       the same collection
       Example: Steps Algorithm
       
  
    5. Two nested for loops iterating over the   ==>      O(n*m) 
       the different collection
       Example: The collections have diffent           
                length                

    6. Any Sorting Algorithm                     ==>      O(n*log(n))    
    
    
    7. Searching A sorted Array                  ==>      O(log(n))    



=> Space complexity:   How much more memory is required by doubling the problem set?
   ----------------
   Example: Revering a string. For every additional charater, 
            we need to run the loop so the amount of memory is linear

            With Steps algorithm, here we would need Quadratic (N^2) amount of memory
  
  





*/
