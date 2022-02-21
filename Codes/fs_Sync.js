const fs = require("fs");

fs.writeFileSync("test.txt", "Hello I am Devraj using writeFileSync");
// writeFileSync will write the data on the file and if file doesnt exsits, it will create new one.
// Also if data is present, it will override it and write the new one.

fs.appendFileSync("test.txt", "\nNow using appendFileSync");
// If you want to append existing data

const buf_data = fs.readFileSync("test.txt");
// If you want to read the data but here data will be in form of Buffer so we have to use toString method.

const converted_data = buf_data.toString();
console.log(converted_data);

fs.renameSync("test.txt", "Test.txt");
// If you want to rename the file
