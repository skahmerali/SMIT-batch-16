// What  is Node js : Runtime Enviornment
const fs = require("fs");
// let http = require('http')
const express = require("express");
let Port = process.env.PORT || 3000;

const app = express();
// http.createServer(function async(req, res) {
// app.get('/', async (req, res) => {
//     // res.end("hello world")
//     try {
//         fs.writeFile('data.txt', 'bye bye saylani', (err) => {
//             if (err) throw err;
//             console.log('The file has been saved!');
//         });
//         fs.readFile('data.txt', 'utf8', (err, data) => {
//             if (err) throw err;
//             console.log(data);
//         });
//     }
//     catch (err) {
//         console.log(err);
//     }
//     // res.writeHead(200, { 'Content-Type': 'text/html' });
//     // res.end('Hello World!');
// });
// }).listen(3000);

app.listen(Port, () => { console.log("server is running!!!") })
