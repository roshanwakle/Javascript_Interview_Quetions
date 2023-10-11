// Question 1

let obj = [
  {
    age: 22,
    firstName: "Roshan",
    lastName: "Wakle",
  },
  {
    age: 21,
    firstName: "Yesh",
    lastName: "Wakle",
  },
  {
    age: 40,
    firstName: "Akash",
    lastName: "patil",
  },
];

let objectFilter = obj.filter((data) => data.age < 30);

let result = objectFilter.map((key) => ({
  firstName: key.firstName,
  lastName: key.lastName,
  age: key.age,
}));

console.log(">>>>>>>>>>>>>>>>>>>>>>", result);
//question 2

let array =[2,5,10.25,30];

let fiterArray = array.filter(data=> data<25)

console.log("fiterArray",fiterArray)


//Quetion 3

let arr = [[3, 1], [2], [4, 12]];

// Use the reduce method to find the sum of arrays within the main array
let sum = arr.reduce((acc, curr) => acc.concat(curr), []).reduce((a, b) => a + b, 0);

let flattenedArray = arr.flat();

// Use the reduce method to calculate the sum of the flattened array
// let sum = flattenedArray.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
