const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



app.get(('/ahmer'), function (req, res, next) {
    res.send('hello world!!!');
})

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})