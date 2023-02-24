const fs = require("node:fs/promises");
const path = require("node:path");
// fs.mkdir(path.resolve(__dirname, "./hello2/abc"), { recursive: true }).then(
//   (r) => {
//     console.log("success");
//   }
// );

// fs.rmdir(path.resolve(__dirname, "./hello2/abc"), { recursive: true }).then(
//   (r) => {
//     console.log("success");
//   }
// );

fs.copyFile(
  path.resolve(__dirname, "bb.jpg"),
  path.resolve(__dirname, "aa.jpg")
).then((r) => {
  console.log("success");
});
