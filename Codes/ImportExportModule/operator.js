const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

module.exports.add = add;
module.exports.sub = sub;
// This creates an object

module.exports = { add, sub };
// Object destructuring
