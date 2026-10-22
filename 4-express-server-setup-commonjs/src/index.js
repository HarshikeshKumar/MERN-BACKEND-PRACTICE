const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Welcome to the Home Page",
  });
});

app.get("/ping", (req, res) => {
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
