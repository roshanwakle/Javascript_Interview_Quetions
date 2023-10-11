// 1.Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

function removeDup(arr) {
  const duplicate = [];

  for (let i = 0; i < arr.length; i++) {
    if (duplicate.indexOf(arr[i]) === -1) {
      duplicate.push(arr[i]);
    }
  }
  // console.log(">>>>>>>>>>>>>>", duplicate);
  return duplicate;
}
const array = [2, 4, 3, 5, 6, 5, 4, 7,10];
const data = removeDup(array);
console.log("data>>>>>>>>>>>>",data);


//Second Approch

const  removeDuplicateFromArray=(array)=>{
     return array.filter((item,index)=>
           array.indexOf(item)=== index
     )
}
const arr = [2, 4, 3, 5, 6, 5, 4, 7,6,7,10,10];
console.log(removeDuplicateFromArray(arr));


