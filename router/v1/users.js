const express = require("express");
const router = express.Router();
const jsonData = require("../../infos.json");

router.route("/").get((req, res) => {
  res.send(jsonData);
});

module.exports = router;
