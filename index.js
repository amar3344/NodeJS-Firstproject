const express = require("express");
const app = express();

const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route.js")
const userRegistration = require("./routes/userSignupLogin.js")
const protectedRoute = require("./routes/protectedRoute.js");
const verifyToken = require("./middlewares/verifyToken.js");

mongoose.connect("mongodb+srv://amarkumarreddynew:zjq9aCiwMKeWNhSb@firstdb.l5hma.mongodb.net/?retryWrites=true&w=majority&appName=FirstDB").then(() => {
  app.listen(3000);
  console.log("Connected!");
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/",verifyToken);

app.use("/register",userRegistration);
app.use("/api/products",productRoutes);



