let input=[1,2,-2,11,7,1];
// output=7;


function secondLargestNumber(inpt){
  let data =inpt.sort((a,b)=>b-a);
  console.log(data);

  let secondLargest=data[1]

  return secondLargest
}

const largest = secondLargestNumber(input)
console.log(">>>>>>>>>>>>",largest);