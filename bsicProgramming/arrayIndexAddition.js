
function arrayIndexAdd(arr){
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
          if (i !== j) {
            sum += arr[j];
          }
        }
        output.push(sum);
      }
      return output;
      
}
const arr = [2, 7, 11, 4, -2];
const result = arrayIndexAdd(arr);
console.log(result);
