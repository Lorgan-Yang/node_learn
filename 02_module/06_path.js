const path = require("node:path");
// console.log(path);
console.log(path.resolve());
console.log(path.resolve("./hello.js"));
console.log(path.resolve(__dirname, "./hello.js"));

const fs = require("fs/promises");
// const buf = fs.readFileSync(path.resolve(__dirname, "./hello.txt"));
// console.log(buf.toString());

// fs.readFile(path.resolve(__dirname, "./hello.txt"), (err, buf) => {
//   console.log(buf.toString());
// });

// fs.readFile(path.resolve(__dirname, "./hello.txt"))
//   .then((buf) => {
//     console.log(buf.toString());
//   })
//   .catch((e) => {
//     console.log("error");
//   });

// // let fn = async () => {
// //   const buf = await fs.readFile(path.resolve(__dirname, "./hello.txt"));
// //   console.log(buf.toString());
// // };

// // fn();

// (async () => {
//   try {
//     const buf = await fs.readFile(path.resolve(__dirname, "./hello.txt"));
//     console.log(buf.toString());
//   } catch (e) {
//     console.log(e);
//   }
// })();

// fs.appendFile(path.resolve(__dirname, "./hello123.txt"), "Hello world").then(
//   (r) => {
//     console.log(r);
//   }
// );

fs.readFile("C:\\Users\\86137\\Desktop\\aa.jpg")
  .then((buf) => {
    return fs.appendFile(path.resolve(__dirname, "bb.jpg"), buf);
  })
  .then(() => {
    console.log("success");
  });
