const express = require("express");

const app = express();

// Middleweres..............
function mid1(req, res, next) {
  console.log("Mid1");
  next();
}
function mid2(req, res, next) {
  console.log("Mid2");
  next();
}
function mid3(req, res, next) {
  console.log("Mid3");
  next();
}

app.get("/", mid1, mid2, mid3, (req, res) => {
  return res.json({
    message: "Welcome to the Home Page",
  });
});

app.get("/ping", [mid1, mid2], (req, res) => {
  return res.json({
    message: "Pong",
  });
});

app.get("/name", (req, res) => {
  return res.json({
    message: "My Name Is GAURAV SINGH",
  });
});

app.post("/hello", (req, res) => {
  return res.json({
    message: "hello",
  });
});

app.listen(3000, () => {
  console.log("Server is Running at PORT: 3000");
});
