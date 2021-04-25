const http = require("http");
// const server = http.createServer((request, response) => {
//   response.end("Welcome");
// });
// Using event Emitter API
const server = http.createServer();
//emits request event
server.on("request", (request, response) => {
  response.end("Welcome");
});
server.listen(5000, () => {});
