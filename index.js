const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const jsonData = require("./infos.json");
const middleware = require("./middleware/middleware");
const users = require("./router/v1/users");

app.use(middleware);
app.use("/users/v1/allData", users);

app.get("/hallo", (req, res) => {
  res.send(jsonData);
});

app.listen(port, () => {
  console.log("Listing the Port", port);
});
