function factorialNumber(number) {
  let fact = 1;

  for (let i = 2; i <= number; i++) {
    fact *= i;
  }
  return fact;
}
// console.log(factorialNumber(7));

function squreRootFind(num){
   return Math.sqrt(num)
}
console.log(squreRootFind(25))
