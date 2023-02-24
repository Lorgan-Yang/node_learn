const express = require("express");
const app = express();
app.use((req, res,next) => {
  console.log("middle ware");
  next();
});
app.get("/", (req, res) => {
  //   console.log(req.headers);
  console.log("xxxxxxxxxxxxxxxxxxx");
  res.status(404);
  res.send("not found la");
  //   res.sendStatus(404);
});

app.post("/hello", (req, res) => {
  const person = { name: "hello", age: 18 };
  res.json(person).send();
});

app.listen(8081, () => {
  console.log("staring...");
});
