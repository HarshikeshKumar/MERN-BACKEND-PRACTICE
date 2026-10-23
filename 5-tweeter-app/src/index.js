import express from "express";
import { PORT } from "./config/serverConfig.js";

import apiRouter from "./routes/apiRoutes/apiRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/api", apiRouter);

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

app.get(/.*/, (req, res) => {
  return res.status(404).json({
    message: "Not Found",
    status: 404,
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running at PORT: ${PORT}`);
});
