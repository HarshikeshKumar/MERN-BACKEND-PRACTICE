import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

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

app.listen(3000, () => {
  console.log("Server is running at PORT: 3000");
});
