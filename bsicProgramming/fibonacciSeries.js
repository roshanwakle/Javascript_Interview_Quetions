function fibonacciSeries(num) {
    //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
  let a = 0;
  let b = 1;
  let c;

  for (let i = 2; i < num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fibonacciSeries(13))