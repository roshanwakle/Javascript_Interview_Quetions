// 25. Write a JavaScript function to sort the following array of objects by title value.
// Sample object :

var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

function sortArray(a, b) {
  let sort1 = a.title.toUpperCase();
  let sort2 = b.title.toUpperCase();
 console.log(">>>>>>>>>>>>>>>>>>>>>>>>",sort1);
//  console.log(">>>>>>>>>>>>>>>>>>>>>>>>",sort2);

  if (sort1 < sort2) {
    return -1;
  }
  if (sort1 > sort2) {
    return 1;
  }
  return 0;
}

const data =library.sort(sortArray);
// console.log(data);


for (let i = 0; i < data.length; i++) {
    const book = library[i];
    console.log(`[object Object] {
    author: "${book.author}",
    libraryID: ${book.libraryID},
    title: "${book.title}"
  }`);
  }

  
  
  
  
  
  