const promise = new Promise((resolve, reject) => {
  throw new Error("sind");
  setTimeout(() => {
    reject("xxxxxxxxxx");
  }, 2000);
});

promise
  .then(
    (result) => {
      console.log("xxxxxxxxxxx" + result);
    },
    (reason) => {
      console.log("ding");
    }
  )
  .catch((error) => {
    console.log("xxx", error);
  })
  .finally(() => {
    console.log("done");
  });
