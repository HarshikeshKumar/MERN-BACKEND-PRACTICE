import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "V2 Tweet Router",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "V2 Tweet Router With ID",
    id: req.params.id,
  });
});

router.post("/create", (req, res) => {
  return res.json({
    message: "Create V2 Tweet",
    data: req.body,
  });
});

export default router;
