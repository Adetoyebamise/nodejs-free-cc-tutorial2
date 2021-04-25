//const { response } = require("express");
const express = require("express");
const app = express();
const logger = require("./logger");
// request => middleware seat in between => response
app.use(logger);
app.get("/", logger, (request, response) => {
  response.send("Home Page");
});
app.get("/about", logger, (request, response) => {
  response.send("About Page");
});
app.get("/api/products", logger, (request, response) => {
  response.send("Products");
});
app.get("/items", logger, (request, response) => {
  response.send("Items");
});
app.listen(5000, () => {
  console.log(" speak for port 5000 listen");
});
