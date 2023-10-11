function swapArray(array1,array2){
    array1= array1+array2;
    array2= array1-array2;
    array1= array1-array2
  return [array1,array2]
}

console.log(swapArray(1,3));


function swapingArray(a,b){
    let temp =a;
    a=b;
    b=temp;
    return [a,b]
}

console.log(swapingArray(1,3));

const data =Math.floor(Math.random()*10);
console.log(data);