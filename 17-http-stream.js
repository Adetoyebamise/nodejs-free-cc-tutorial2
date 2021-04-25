const { createReadStream } = require("fs");
const stream = createReadStream("./contfent/big.txt", {
  highWaterMark: 9000,
  encoding: "utf8",
});
stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (error) => {
  console.log(error);
});

//============
var http = require("http");
var fs = require("fs");

http
  .createServer((request, response) => {
    const text = fs.readFileSync("./content/big.txt", "utf-8");
    response.end(text);
  })
  .listen(5000);
