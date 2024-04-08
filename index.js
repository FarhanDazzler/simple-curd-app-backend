const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/products.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json());

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("<h1>Hello World from node server</h1>");
});

mongoose
  .connect(
    "mongodb+srv://farhandazzler1999:Computer@backenddb.aw3vz5r.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB database.");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDB database: ${error}`);
  });
