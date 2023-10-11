// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// outputArray-[4, 5, 8, 10, 12, 13]


// step 1:Check both arrays length bu using one variable
// step 2:loop abobe variable
// step 3: Addtion of both array and check null or not 
// step 4:push the data in emty array

function additionOfArary(arr1, arr2) {
  let result = [];

  let arrayLength = (arr1.length, arr2.length);
  console.log(arrayLength,">>>>>>>>>>>>>>>");
  arr1.length = arrayLength;
  arr2.length = arrayLength;
  for (let i = 0; i < arrayLength; i++) {
    let data = (arr1[i] || 0) + (arr2[i] || 0);
    result.push(data);
  }

  return result;
}
let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];
const result = additionOfArary(array1, array2);
console.log(result);


