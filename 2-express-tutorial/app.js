const express = require("express");
const app = express();
let { people } = require("./data");
//static asset
app.use(express.static("./methods-public"));
//parse for data
app.use(express.urlencoded({ extended: false }));
app.get("/api/people", (request, response) => {
  response.status(200).json({ success: true, data: people });
});
app.post("/api/people", (requset, response) => {
  const { name } = request.body;
  if (!name) {
    return response
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  response.status(201).json({ success: true, person: name });
});
app.post("/api/postman/people", (request, response) => {
  const { name } = request.body;
  if (!name) {
    return response
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  response.status(200).json({ success: true, data: [...people] });
});
app.post("/login", (request, response) => {
  console.log(request.body);
  const { name } = request.body;
  if (name) {
    return response.status(200).send(`Welcome ${name}`);
  } else {
    response.status(401).send("Please Provide credentials");
  }
  response.send(" YOU PERFORM METHOD POST");
});
app.put("/api/people/", (request, response) => {
  const { id } = request.params;
  const { name } = request.body;
});
app.listen(5000, () => {
  console.log("server is listening at port 5000 ");
});
