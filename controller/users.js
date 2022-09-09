const jsonData = require("../infos.json");
module.exports.getAllUser = (req, res) => {
  const { limit } = req.query;

  res.send(jsonData.slice(0, limit));
};

module.exports.getRandomUser = (req, res) => {
  const randomElement = jsonData[Math.floor(Math.random() * jsonData.length)];
  res.json(randomElement);
};
