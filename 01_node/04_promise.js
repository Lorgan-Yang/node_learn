const promise = new Promise((resolve, reject) => {
  reject("data....");
});

promise
  .then((result) => {
    console.log(result);
    return "helloxxxxxxxxx";
  })
  .catch((result) => {
    console.log("catch...", result);
    return result;
  })
  .then((result) => console.log("then...", result));

function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

sum(1, 2)
  .then((result) => result + 3)
  .then((result) => result + 4)
  .then((result) => console.log(result));
