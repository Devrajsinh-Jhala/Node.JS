const fs = require("fs");

// const data = fs.readFileSync("fs_Async/Read.txt", "utf-8");
// console.log(data);
// console.log("After the data displayed...");

// Output:
// Hello I am Devraj
// Learning Node.js
// After the data displayed...

const asyncData = fs.readFile("fs_Async/Read.txt", "utf-8", (err, data) => {
  console.log(data);
  console.log(err);
});
console.log("After the data displayed...");

// Output:
// After the data displayed...
// Hello I am Devraj
// Learning Node.js
// null

// Notice the position of After the data displayed
