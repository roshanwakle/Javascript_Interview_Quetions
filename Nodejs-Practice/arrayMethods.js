 //Array methods

//  1.join()

let array= [2,4,5,3,6,4,2,7]
console.log("Orignal Array",array);
console.log(array.join("  +  "));


//pop method

function popMethod(arr) {
    let popArray = [];
    for (let i = 0; i < arr.length; i++) {
        popArray.push(arr.pop()); // Use arr.pop() to remove and push into popArray
    }
    return popArray;
}
let poparray= [2,4,5,3,6,4,2,7,8,0]
let data=popMethod(poparray)
console.log("data>>>>>",data);


//concat
console.log("concat array",array.concat(poparray));

//Join

console.log("pop method",array.join("join any "));

//reverse

console.log("Reverse array",poparray.reverse());

//shift()
let newArray= ["Roshan","Ayush","Apurv","Ajinkya","Prasath"]
console.log("Shift method",newArray.shift());
console.log(newArray);

//Entries
const newData=newArray.entries()
for(let i in newData){
    console.log(i)
}
console.log(newData);

//Every()

const ages = [32, 33, 16, 40];

const data1=ages.every((item)=>{
    return item >18
})

console.log(data1)