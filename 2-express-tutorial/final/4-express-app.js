const express = require("express");
const app = express();
const { products } = require("./data");
app.get("/", (request, response) => {
  response.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});
app.get("/api/products", (request, response) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  response.json(newProducts);
});
app.get("/api/products/:productID", (request, response) => {
  const { productID } = request.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return response.status(404).send("<h1>Product does not exist</h1>");
  }
  response.json(singleProduct);
});
app.get("/api/products/:productID/reviews/:reviewID", (request, response) => {
  console.log(request.params);
  response.send("Let have your review");
});
app.listen(5000, () => {
  console.log("Server is not deaf on 5000");
});
