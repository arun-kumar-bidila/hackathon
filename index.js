const app = require("./app");
const db = require("./config/db");
const userModel = require("./model/user.model");
const todoModel = require("./model/todo.model");
require("dotenv").config();
const port = process.env.PORT || 3000;

// The server should listen on all available network interfaces
app.listen(port, '0.0.0.0', () => {
  console.log(`Server started at http://0.0.0.0:${port}`);
});

app.get("/", (req, res) => {
  res.send("hello world");
});
