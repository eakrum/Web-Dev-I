const express = require("express");
const router = express.Router();
const education = require("../data/education");

router.get("/", (req, res) => {
  console.log("get /education");
  res.json(education);
});

module.exports = router;
