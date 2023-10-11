// 15. We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red.

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"];

for(let i=0;i<color.length;i++){
   let ordinal = i+1;
   let choice = ordinal <=3 ? `${ordinal}${o[ordinal]}`:`${ordinal}${o[0]}`;
//    console.log("`${ordinal}${o[ordinal]}`",`${ordinal}${o[0]}`);
   console.log(">>>>>>>>>>>>",choice ,"choice is",color[i]);
}