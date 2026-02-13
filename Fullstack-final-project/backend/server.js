// console.log('hello world')
const express = require('express');
const Db = require('./Db/dbconnection')
const authRoute = require("./Router/authRouter")
const productRoutes = require("./Router/productRoutes")
require("dotenv").config()
const cookieParser = require("cookie-parser")

const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
Db();
app.get('/', (req, res, next) => {
    res.send('hello world!');
})
app.use("/api/auth", authRoute)
app.use("/api/product", productRoutes)
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`server is running, on port : ${PORT}`)
})