//const { response } = require("express");
const express = require("express");
const app = express();
const morgan = require("morgan");
//const logger = require("./logger");
const authorize = require("./authorize");
// request => middleware seat in between => response
//app.use(authorize);
//app.use(logger);
//app.use(express.static("./public"));
app.use(morgan("tiny"));
app.get("/", (request, response) => {
  response.send("Home Page");
});
app.get("/about", (request, response) => {
  response.send("About Page");
});
app.get("/api/products", (request, response) => {
  response.send("Products");
});
app.get("/api/items", (request, response) => {
  response.send("Items");
});
app.listen(5000, () => {
  console.log(" speak for port 5000 listen");
});
