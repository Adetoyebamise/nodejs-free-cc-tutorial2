const express = require("express");
const app = express();
const path = require("path");
//setup static and middleware
app.use(express.static("./public"));
//app.get("/", (request, response) => {
//response.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// adding to static assets
// SSR
//});
app.all("*", (request, response) => {
  response.status(404).send("Resource not found");
});
app.listen(5000, () => {
  console.log(" server runnning on port 5000");
});
