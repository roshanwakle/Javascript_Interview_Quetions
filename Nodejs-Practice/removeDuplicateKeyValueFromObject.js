let obj1={a:12,b:4,c:5,d:10};
let obj2={a:12,b:7,c:9,d:10};
// outpot ={a:12,d:10}
let data={}

console.log(">>>>>>>>>>>>.",Object.keys(obj1));
console.log(">>>>>>>>>>>>.",Object.values(obj1));


for(let key in obj1){
   
       if(obj1[key]=== obj2[key]){
           data[key]=obj1[key]
       }
   
}

console.log(data);


