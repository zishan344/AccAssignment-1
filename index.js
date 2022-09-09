const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const jsonData = require("./infos.json");
const middleware = require("./middleware/middleware");
const users = require("./router/v1/users");

app.use(middleware);
app.use("/user", users);

app.get("/", (req, res) => {
  res.send("welcome to home route");
});

app.listen(port, () => {
  console.log("Listing the Port", port);
});
