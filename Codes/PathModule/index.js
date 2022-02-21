const path = require("path");

console.log(
  path.dirname("C:/Users/Admin/Desktop/NodeJS/Codes/OSModule/index.js")
);
console.log(
  path.extname("C:/Users/Admin/Desktop/NodeJS/Codes/OSModule/index.js")
);

console.log(
  path.parse("C:/Users/Admin/Desktop/NodeJS/Codes/OSModule/index.js")
);

// path.parse() returns an object so we can access elements of object with . operator.
const pathName = path.parse(
  "C:/Users/Admin/Desktop/NodeJS/Codes/OSModule/index.js"
);

console.log(pathName.root);
