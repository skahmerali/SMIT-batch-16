// console.log('hello world')
const express = require('express');

const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/', (req, res, next) => {
    res.send('hello world!');
})
app.post('/home', (req, res, next) => {
    const userAge = req.body.userAge
    // console.log(userAge);
    if (userAge > 18) {
        res.send('You are allow in the web');
    }else{
        
        res.send('You are not allow in the web');
    }
})

app.listen(PORT, () => {
    console.log(`server is running, on port : ${PORT}`)
})