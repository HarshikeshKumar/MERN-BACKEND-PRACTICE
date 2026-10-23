import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "V2 Comment Router",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "V2 Comment Router With ID",
    id: req.params.id,
  });
});

export default router;
