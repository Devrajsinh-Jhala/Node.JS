const os = require("os");

// Gives Architecture of OS
console.log(os.arch());
console.log(os.hostname());

// Gives free memory of OS
const freeMemory = os.freemem();
console.log(`${freeMemory / 1024 / 1024 / 1024} GB Free`);

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024} GB Total`);
