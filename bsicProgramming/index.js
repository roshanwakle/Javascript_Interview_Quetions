// write as program to find second largest element from given array.

const array = ["12","50","45","200","65","300"];



// write a program to swap two number without using third variable
let a = 2
let b=3

a=a+b
b=a-b
a=a-b;

console.log("after swaping",a,b)

//Reverse String

function reverseString(str) {
    return str.split('').reverse().join('');
  }
console.log(reverseString("Roshan"))


function reverse(str){
    let reverse="";
    for(let i =str.length-1;i>0;i--){
       reverse+=str[i]
    }

    return reverse
}

console.log(reverse("hfyufyufygy")
)


