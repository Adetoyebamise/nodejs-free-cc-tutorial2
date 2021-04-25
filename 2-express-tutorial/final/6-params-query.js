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
app.get("/api/v1/query", (request, response) => {
  console.log(request.query);
  const { search, limit } = request.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    //response.status(200).send("No products matched your search");
    return response.status(200).json({ sucess: true, data: [] });
  }
  // response.status(200).json;
  // response.end("got the query");
  return response.status(200).json(sortedProducts);
});
app.listen(5000, () => {
  console.log("Server is not deaf on 5000");
});
