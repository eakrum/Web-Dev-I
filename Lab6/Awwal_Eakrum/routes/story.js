const express = require("express");
const router = express.Router();
const story = require("../data/story");

router.get("/", (req, res) => {
  console.log("get /story");
  res.json(story);
});

module.exports = router;
