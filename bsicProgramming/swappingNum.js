let a= 5
let b=6
console.log("before swapping",a,b)

//a=a+b=11
a= 5+6
// b=a-b=5
b= 11-6

// a=a-b=6
a= 11-5
console.log("after swapping",a,b)


console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();