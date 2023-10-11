const str = "My Name is Roshan";
output= "yM emaN si nahsoR"

function reverseString(string){
    let newStr=""
   for(let i=string.length-1;i>=0;i--){
      newStr=newStr+string[i]
   }
   return newStr;
}

function reverseWord(string){
  let words= string.split(" ");
  let reverseWord= words.map(word=> reverseString(word));
  console.log("reveseWord",reverseWord);

  return reverseWord.join(" ");
}

let res= reverseWord(str);
console.log(">>>>>>>>>>>>",res);