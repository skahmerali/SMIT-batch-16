// const abc = async (params) => {
//     try {
//         alert ("helo world ");
//         pro (sadasda)
//      }
//     catch (err) {
//         console.log(err)
//     }
// }

// const http = require('node:http');

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({
//         data: 'Hello World!',
//     }));

// }).listen(3000,() => {
//     console.log('app is running on port : 3000')
// });
const express = require('express');
const cors = 

// const app = express();

app.get('/', (req, res) => {
    res.send('hello world')
})
app.post('/home', (req, res) => {
    console.log(req.body, 30);
    if(req.body.user === 'ahmer'){
        res.send('Welcome')
    }
})
app.listen(3000, () => {
    console.log('server is running on port 3000')
})