function findLongestWord(sentence) {
  let word = sentence.split(" ");
  let logestWord = "";
  for (let i = 0; i < word.length; i++) {
    const currentword = word[i];

    if (currentword.length > logestWord.length) {
      logestWord = currentword;
    }
  }
  return logestWord;
}

console.log(findLongestWord("My name is roshan"));
