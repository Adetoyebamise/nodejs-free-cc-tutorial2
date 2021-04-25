const logger = (request, response, next) => {
  const method = request.method;
  const url = request.url;
  const time = new Date().getFullYear();
  response.send("Testing");
  next();
};
