//console.log("stream Example");
const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    // const text = fs.readFileSync("./content/big.txt", "utf-8");
    // response.end(text);
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(response);
    });
  })
  .listen(5000);
