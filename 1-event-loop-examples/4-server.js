const http = require("http");

const server = http.createServer((request, response) => {
  console.log("request event");
  response.end("Hello world");
});

server.listen(5000, () => {
  console.log("server listening on port : 5000 ...");
});
