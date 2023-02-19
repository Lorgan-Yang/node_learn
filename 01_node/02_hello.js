console.log("first");
function sum(a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 2000);
}

sum(123, 456, (result) => {
  sum(result, 7, (result) => {
    console.log(result);
  });
});

console.log("haha");
