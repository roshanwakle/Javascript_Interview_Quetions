const str = "Hi this is Roshan Wakle";
//Find max string
// output= Roshan

function maxCountString(string) {
  let word = string.split(" ");
  let maxString = 0;
  let longestWord = "";
  for (let i in word) {
    if (word[i].length > maxString) {
      maxString = word[i].length;
      longestWord = word[i];
    }
  }
  return longestWord;
}
let res = maxCountString(str);
console.log(res);
