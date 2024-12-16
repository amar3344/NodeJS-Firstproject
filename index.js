const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");

mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
  app.listen(3000);
  console.log("Connected!");
});

app.get("/", (request, response) => {
  response.send("hello amar");
});

app.post("/api/products", async (request, response) => {
  try {
    const product = await Product.create(request.body);
    response.status(201).json(product);
  } catch (errors) {
    response.status(500).json({ message: `amar erros ${errors.message}` });
    return;
  }
});

app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});
