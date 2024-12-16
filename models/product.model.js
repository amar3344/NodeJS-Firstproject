const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      defaultValue: 0,
    },
    price: {
      type: Number,
      required: true,
      defaultValue: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },{
    versionKey: false,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
