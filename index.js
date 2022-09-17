const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cartRoute = require("./routes/cart");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://Admin:Admin123+@mindfulness.tglek.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

var corsOptions = {
  origin:
    "https://63255e563cd2e07f436de993--resonant-licorice-b9748e.netlify.app/",
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1/carts", cartRoute);

app.listen(process.env.PORT || 5001, () => {
  console.log("Backend server is running!");
});

// app.listen(5001, () => {
//   console.log("Backend cart server is running!");
// });
