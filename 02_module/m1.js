// let a = 10;
// let b = 20;
// console.log("module 1");

// console.log(exports);
// console.log(module.exports);
// console.log(exports === module.exports);
console.log("hello");
// module.exports = { a: 10 };
exports.a = 10;
exports.b = { name: "anguang" };
exports.c = function hello() {
  console.log("ding");
};
