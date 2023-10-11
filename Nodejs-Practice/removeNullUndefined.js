// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]

const arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];
let outputArray = [];

function removeUnwantedValues(array) {
  let outputArray = [];

  for (let i = 0; i < array.length; i++) {
    if (
      array[i] !== null &&
      !isNaN(array[i]) &&
      array[i] !== false &&
      array[i] !== undefined &&
      array[i] !== ""
    ) {
      outputArray.push(array[i]);
    }
  }

  return outputArray;
}

const filteredArray = removeUnwantedValues(arr);
console.log(filteredArray); // Output: [15, -22, 47]

//Write approche
const data = arr.filter((ele) => ele);
console.log(">>>>>>>>>>>>>>>>>>>>", data);
