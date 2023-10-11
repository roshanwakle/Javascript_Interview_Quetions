

function findTotalLeapYear(start_year,end_year){
      let total_year= [];

      for(let year=start_year;year<=end_year;year++){
          if((year% 4 ===0 && year % 100 !== 0 || year % 400 === 0)){

            total_year.push(year)
          }
      }

      return total_year;

}
let firtYear= 2000;
let secondYear= 2023;
const result =findLeapYear(firtYear,secondYear);
console.log(result);

function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("leap year");
  } else {
    console.log("not leap year");
  }
}

const finalresult = checkLeapYear(2000);
