const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(express.static('public'));

/**MONGOOSE SETUP */

const PORT = 3001
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  app.listen(PORT, () => console.log(`Server connected successfully on PORT: ${PORT}`));

}).catch((err) =>  console.log(`${err} did not connected on MONGODB`));
