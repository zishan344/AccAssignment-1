const express = require("express");
const router = express.Router();
const jsonData = require("../../infos.json");
const allUser = require("../../controller/users");

router.route("/all").get(allUser.getAllUser);
router.route("/random").get(allUser.getRandomUser);
router.route("/save").post(allUser.saveFile);
module.exports = router;
