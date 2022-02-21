const fs = require("fs");

fs.writeFile("fs_Async/read.txt", "Hello I am Devraj", (err) => {
  console.log("File created successfully");
  console.log(err);
});
// To use Async, we have to use callBack functions.

fs.appendFile("fs_Async/read.txt", "\nLearning Node.js", (err) => {
  console.log(err);
});

fs.readFile("fs_Async/read.txt", "utf-8", (err, data) => {
  console.log(data);
  console.log(err);
});

fs.rename("fs_Async/read.txt", "fs_Async/Read.txt", (err) => {
  console.log(err);
});
