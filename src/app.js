const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Home page 123");
});

// app.use("/hello", (req, res) => {
//   res.send("Hello page");
// });

app.use("/test", (req, res) => {
  res.send("Test page");
});

app.listen(7777, () => {
  console.log("Server started");
});
