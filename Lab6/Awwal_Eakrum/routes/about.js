const express = require("express");
const router = express.Router();
const about = require("../data/about");

router.get("/", (req, res) => {
  console.log("get /about");
  res.json(about);
});

module.exports = router;
