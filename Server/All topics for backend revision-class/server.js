const expressJS = require("express");
const routing  = require("./router/route");
const connection = require("./db/connection");

const app = expressJS();
const PORT = process.env.PORT || 3000;

app.use(expressJS.json());
connection();

app.use('/api', routing);


app.listen(PORT, () => console.log("server is running!!!"));