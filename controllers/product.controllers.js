const Product = require("../models/product.model.js")

const getProducts = async (request,response) =>{
    try{
        const products = await Product.find({})
        response.status(200).json(products);
      }catch(errors) {
        response.status(500).json({ message: `amar erros ${errors.message}` });
        return;
      }
}

const getSingleProduct = async(request,response)=>{
    try{
        const product = await Product.findById(request.params.id);
        response.status(200).json(product);
      }catch(errors) {
        response.status(500).json({ message: `amar erros ${errors.message}` });
        return;
      }
}

const addItemsToServer = async(request,response) =>{
    try {
        const product = await Product.create(request.body);
        console.log("product",request.body)
        response.status(201).json(product);
      } catch (errors) {
        response.status(500).json({ message: `amar erros ${errors.message}` });
        return;
      }
}

const updateItem = async(req,res) =>{
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
}

const deleteItem = async(req,res)=>{
  try{
    const product = await Product.findByIdAndDelete(req.params.id)
    if(!product){
      return res.status(404).json({message: "Product not found"})
    }
    res.status(200).json({message : "Product deleted"});
  }catch(error){
    res.status(500).json({ message: `amar erros ${error.message}` });
  }
}



module.exports = {
    getProducts,
    getSingleProduct,
    addItemsToServer,
    updateItem,
    deleteItem
}