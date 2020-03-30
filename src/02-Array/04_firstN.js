/**
 * Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

Test Data : 
console.log(first([7, 9, 0, -2])); = 7
console.log(first([],3)); = []
console.log(first([7, 9, 0, -2],3)); = [7, 9, 0] 
console.log(first([7, 9, 0, -2],6)); = [7, 9, 0, -2] 
console.log(first([7, 9, 0, -2],-3)); = [] 

Tip: Identity each edge cases like: no 'n' parameter, n > array lenght and array empty.
Easy way: slice
Hard way: new array and for loop
*/