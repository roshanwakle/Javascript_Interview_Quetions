// The Set object is a built-in JavaScript object that allows you to store unique values of any type.
//  By passing the arr array as an argument to Set, it creates a new Set instance with unique elements.
//   In this case, the Set will contain the unique values from the arr array.
let arr = [1, 2, 2, 3, 4, 4, 5]
const uniqueArray = [...new Set(arr)];

console.log(uniqueArray);
