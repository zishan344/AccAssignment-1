const jsonData = require("../infos.json");
module.exports.getAllUser = (req, res) => {
  res.send(jsonData);
};
const months = ["January", "February", "March", "April", "May", "June", "July"];

module.exports.getRandomUser = (req, res) => {
  //   const data = JSON.parse(jsonData);
  //   console.log(data);
  //   console.log(data);
  const randomElement = jsonData[Math.floor(Math.random() * jsonData.length)];
  res.json(randomElement);
};
