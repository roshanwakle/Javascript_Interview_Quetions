const countVowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let count = 0;

  for (let i = 0; i < str.toString().length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};
console.log(countVowel("aeiouyhcwh"));
