const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log("User Hit the resource");
  response.status(200).send("Home Page");
});
app.get("/about", (request, response) => {
  response.status(200).send("About Page");
});
app.all("*", (request, response) => {
  response.status(404).send("<h1>Resource not found </h1>");
});
app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

//htpp methods
// app.get;
// app.post;
// app.put;
// app.delete;
// app.all;
// app.use;
// app.listen;
