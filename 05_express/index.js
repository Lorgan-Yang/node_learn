const express = require("express");
const app = express();
app.get("/hello", (req, res) => {
  res.send("hello router");
});
app.listen(3000, () => {
  console.log("listen 3000");
});
