Promise.resolve(10).then((r) => console.log(r));

function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

// Promise.all([sum(123, 456), sum(5, 6), Promise.reject("哈哈"), sum(33, 44)])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((result) => console.log(result));

// Promise.allSettled([
//   sum(123, 456),
//   sum(5, 6),
//   Promise.reject("哈哈"),
//   sum(33, 44),
// ])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((result) => console.log(result));

Promise.any([
  sum(123, 456),
  sum(5, 6),
  Promise.resolve("哈哈xxxxxx"),
  sum(33, 44),
])
  .then((result) => {
    console.log(result);
  })
  .catch((result) => console.log("error", result));
