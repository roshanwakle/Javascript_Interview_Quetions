function findLongestWord(str) {
  const word = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > longestWord.length) {
      longestWord = word[i];
    }
  }
  return longestWord;
}

const sentence = "The quick brown fox jumps over the lazy dog";
const longest = findLongestWord(sentence);
console.log(longest); // Output: "jumps"
