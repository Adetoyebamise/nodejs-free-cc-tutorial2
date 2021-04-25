const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "content-type": "text/html" });
    response.write(homePage);
    response.end();
  } else if (request.url === "/about") {
    response.writeHead(200, { "content-type": "text/html" });
    response.write("<h1>Learn More About us</h1>");
    response.end();
  } else if (request.url === "/styles.css") {
    response.writeHead(200, { "content-type": "text/css" });
    response.write(homeStyles);
    response.end();
  } else if (request.url === "/logo.svg") {
    response.writeHead(200, { "content-type": "image/svg+xml" });
    response.write(homeImage);
    response.end();
  } else if (request.url === "/browser-app.js") {
    response.writeHead(200, { "content-type": "text/javascript" });
    response.write(homeLogic);
    response.end();
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.write("<h1> Not Found</h1>");
    response.end();
  }
});

server.listen(5000);
