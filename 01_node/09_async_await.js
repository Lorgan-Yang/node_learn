async function fn2() {
  return 10;
}

// let result = fn2();

// console.log(result);

// fn2().then((result) => {
//   console.log(result);
// });

// let vv=async () => {
//   let bb = await fn2();
//   console.log(bb);
// };

// console.log("xxxxxxxxxxx");

function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(a + b), 1000);
  });
}

async function fn3() {
  //   sum(1, 2)
  //     .then((r) => sum(r, 3))
  //     .then((r) => sum(r, 4))
  //     .then((r) => console.log(r));
  try {
    let result = await sum(1, 2);
    console.log(result);
    console.log("xxxx333");
  } catch (ex) {
    console.log(ex);
  }
}

(async () => {
  await console.log("dingxxx");
})();

fn3();
