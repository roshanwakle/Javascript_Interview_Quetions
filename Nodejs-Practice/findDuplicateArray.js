function findDuplicateArray(arr) {
  let index = 0;
  let newArray = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i+1; j < arr.length + 1; j++) {
      if (arr[i] === arr[j]) {
        newArray[index] = arr[i];
        index++;
      }
    }
    return newArray;
  }
}

let exaArary = [2, 3, 4, 5, 5, 6, 5, 3, 6, 3];
let result = findDuplicateArray(exaArary);
console.log(result);
