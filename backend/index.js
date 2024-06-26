// app.js

const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require('dotenv').config();
const cookieParser = require("cookie-parser");
const mongoUrl = process.env.MONGO_URL;
const itemRoutes = require('./routes/authRoutes');
const bodyParser = require("body-parser");


const  SupplierRoutes = require("./routes/SupplierRoutes")
const SupplierOrderRoutes = require("./routes/SupplierOrderRoutes")


const app = express();
dotenv.config;
 
mongoose
  .connect(mongoUrl)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database not connected", err));

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // Allow credentials (e.g., cookies, authorization headers)
  })
);


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", authRoutes);

//suplier
app.use("/api/supplier",SupplierRoutes)
app.use("/api/supplier-order",SupplierOrderRoutes)




const Port = 9000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

