const authorize = (request, response, next) => {
  const { user } = request.query;
  if (user === "john") {
    request.user = { name: "john", id: 3 };
    console.log("authorize");
    next();
  } else {
    response.status(401).send("Unauthorized");
  }
};
module.exports = authorize;
