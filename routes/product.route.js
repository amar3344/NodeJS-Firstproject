const express = require('express');
const router = express.Router();
const {getProducts,getSingleProduct,addItemsToServer,updateItem,deleteItem} = require("../controllers/product.controllers.js")

router.get("/",getProducts)
router.get("/:id",getSingleProduct)
router.post("/",addItemsToServer)
router.put("/:id",updateItem)
router.delete("/:id",deleteItem)

module.exports = router;