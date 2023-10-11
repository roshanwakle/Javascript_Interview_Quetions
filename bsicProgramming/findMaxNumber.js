const maxNumber=(num)=>{
   let maxNumber =num[0];

   for(let i =0;i<num.length;i++){
      if(num[i]>maxNumber){
          maxNumber=num[i]
      }
   }
   return maxNumber;
}

// console.log(maxNumber([7374,84,89,0,83,7497276]))


function secondLargestNum(num){
let largest=Number.NEGATIVE_INFINITY
let secondLargest =Number.NEGATIVE_INFINITY

for(let i=0;i<num.length;i++){
   if(num[i]>largest){
       secondLargest=largest;
       largest=num[i]
   }else if(num[i]>secondLargest){
        secondLargest=num[i]  
   }
}
return secondLargest

}

const numbers = [5, 2, 9, 3, 10,11 ,7];
const secondLargestNumber = secondLargestNum(numbers);
console.log("Second largest number:", secondLargestNumber);

