function fetchData(callback) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const data = "Data received";
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log("Processing data:", data);
}

//   fetchData(processData);

let arr = [1, 3, 4, 5, 6, 7, 7];
console.log(arr.reverse());

var Employee = {
  company: "xyz",
};
var Emp1 = Object.create(Employee);
delete Emp1.company;

console.log(Emp1.company);

const array = {
  name: "roshan",
  name: "roshan",
  name: "roshan",
};

Object.values(array).forEach(function (element, index, array) {
  console.log("element", element); // Output: 1, 2, 3
  console.log("index", index); // Output: 0, 1, 2
  console.log("array", array); // Output: [1, 2, 3]
});

let arrays = [1, 2, 3, 4, 5, 5];

const doubledNumbers = arrays.map(function (number) {
  return number * 2;
});

console.log(doubledNumbers);

console.log("====================================");

console.log(isNaN("John Doe")); //true
console.log(isNaN(25));

console.log("====================================");

const handlePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Data fetched successfully" };
      resolve(data);
      // reject(new Error("Error occurred")); // Uncomment this line to simulate a rejection
    }, 2000);
  })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
handlePromise();

function parentFunc(name) {
    let message = `Hello ${name}`;
    
    function childFunc() {
      console.log(message);
    }
    return childFunc;
  }
  
  let closure = parentFunc(`Jane`);
  console.log(closure());


  const start = performance.now();
const end = performance.now();
console.log(`Time taken: ${end - start} milliseconds`);

//event loop example

console.log("Before delay");
 
function delayBySeconds(sec) {
   let start = now = Date.now()
   while(now-start < (sec*1000)) {
     now = Date.now();
   }
}
 
delayBySeconds(5);
 
// Executes after delay of 5 seconds
console.log("After delay");

console.log('====================================');
function LevelTwo() {
    console.log("Inside Level Two!")
    }
    
    function LevelOne() {
    LevelTwo()
    }
    
    function main() {
    LevelOne()
    }
    
    main()
    
console.log('====================================');

(function(){
    var a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));