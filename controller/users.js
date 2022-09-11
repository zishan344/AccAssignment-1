const jsonData = require("../infos.json");
const fs = require("fs");
module.exports.getAllUser = (req, res) => {
  const { limit } = req.query;
  console.log(jsonData);
  res.send(jsonData.slice(0, limit));
};

module.exports.getRandomUser = (req, res) => {
  const randomElement = jsonData[Math.floor(Math.random() * jsonData.length)];
  res.json(randomElement);
};

module.exports.saveFile = (req, res) => {
  const info = req.body;
  const { id, gender, name, contact, address, photoUrl } = info;
  if ((!id, !gender, !name, !contact, !address, !photoUrl)) {
    res
      .status(404)
      .send({ message: "you have some error please send again on your info" });
  } else {
    jsonData.push(info);
    res.send({ post: "success" });
  }
};
