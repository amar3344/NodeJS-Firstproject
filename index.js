const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");

mongoose.connect("mongodb+srv://amarkumarreddynew:zjq9aCiwMKeWNhSb@firstdb.l5hma.mongodb.net/?retryWrites=true&w=majority&appName=FirstDB").then(() => {
  app.listen(3000);
  console.log("Connected!");
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

app.get("/api/products", async (request, response) => {
  try{
    const products = await Product.find({})
    response.status(200).json(products);
  }catch(errors) {
    response.status(500).json({ message: `amar erros ${errors.message}` });
    return;
  }
})

app.get("/api/product/:id",async (request,response) => {
  try{
    const product = await Product.findById(request.params.id);
    response.status(200).json(product);
  }catch(errors) {
    response.status(500).json({ message: `amar erros ${errors.message}` });
    return;
  }
})

app.put("/api/product/:id", async(req, res) => {
  try{
    const product = await Product.findByIdAndUpdate(req.params.id,req.body);
    if(!product){
      return res.status(404).json({message: "Product not found"})
    }
    const updateProduct = await Product.findById(req.params.id)
    res.status(200).json(updateProduct);
  }catch(error){
    res.status(500).json({ message: `amar erros ${error.message}` });
  }
});

// DELETE API
app.delete("/api/product/:id", async(req,res)=>{
  try{
    const product = await Product.findByIdAndDelete(req.params.id)
    if(!product){
      return res.status(404).json({message: "Product not found"})
    }
    res.status(200).json({message : "Product deleted"});
  }catch(error){
    res.status(500).json({ message: `amar erros ${error.message}` });
  }
})
