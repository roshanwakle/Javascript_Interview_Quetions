function palindromeNumber(pl) {
  const number1 = pl.toString();

  const number2 = number1.split("").reverse().join();

  return number1 === number2;
}

console.log(palindromeNumber(122));

//fizzBuzz
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, ...

function fizzBuzz(fizz) {
  for (let i = 0; i < fizz; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(20))


var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));




function reveseString(str){
  let reversed=""
  for(let i= str.length-1;i>=0;i--){
         reversed +=str[i]
  }

  return reversed
}