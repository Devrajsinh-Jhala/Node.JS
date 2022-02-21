const fs = require("fs");

const myData = {
  name: "Devraj",
  Age: 18,
  surName: "Jhala",
};

// console.log(myData.Age);

// const jsonData = JSON.stringify(myData);
// console.log(jsonData);
// // {"name":"Devraj","Age":18,"surName":"Jhala"}
// // Output 👆

// // Converting back to original from JSON
// const originalData = JSON.parse(jsonData);
// console.log(originalData);

// Task:
// 1) Convert data above to JSON
// 2) Add to other file
// 3) Read the file
// 4) Convert back from JSON
// 5) console.log()

const jsonData = JSON.stringify(myData);

fs.writeFile("JSON_NodeJS/read.json", jsonData, (err) => {
  console.log(err);
});

fs.readFile("JSON_NodeJS/read.json", "utf-8", (err, data) => {
  console.log(err);
  console.log(data);
  const originalData = JSON.parse(jsonData);
  console.log(originalData);
});
