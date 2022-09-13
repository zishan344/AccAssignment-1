let jsonData = require("../infos.json");
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

module.exports.simpleUpdate = (req, res) => {
  const id = req.params.id;
  const check = Number(id);

  if (isNaN(check)) {
    res.status(404).send({ message: "Invalid Id. Please provide a valid Id" });
  }
  // const update = req.body;
  else {
    const findArray = jsonData.find((u) => u.id == id);
    (findArray.id = id), (findArray.contact = req.body.contact);
    res.send(findArray);
  }
};

// module.exports.multipleUpdate = (req, res) => {};
/* 
module.exports.deleteData = (req, res) => {
  const id = req.params.id;
  const check = Number(id);

  if (isNaN(check)) {
    res.status(404).send({ message: "Invalid Id. Please provide a valid Id" });
  } else {
    const filter = jsonData.filter((t) => t.id !== id);
    jsonData = filter;
    res.send(jsonData);
  }
};
 */
module.exports.deleteData = (req, res) => {
  const { id } = req.params;
  jsonData = jsonData.filter((t) => t.id !== Number(id));
  res.send(jsonData);
};
