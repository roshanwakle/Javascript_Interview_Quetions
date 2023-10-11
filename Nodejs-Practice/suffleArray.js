function shuffleArray(array){
   let len= array.length,
   shuffleArray

    for(shuffleArray=len-1;shuffleArray>0;shuffleArray--){
       let randomIndex= Math.floor(Math.random()* (shuffleArray+1));
       var temp= array[shuffleArray]
       array[shuffleArray]=array[randomIndex];
       array[randomIndex]=temp;


    }
}

let array = [1,2,3,4,5];
console.log("Array before Shuffling", array);

console.log("Shuffling array");
shuffleArray(array);

console.log("Array after Shuffling", array);