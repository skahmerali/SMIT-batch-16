const expressJS = require("express");
const routing  = require("./router/route");
const connection = require("./db/connection");
const cors = require("cors")

const app = expressJS();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(expressJS.json());
connection();

app.use('/api', routing);


app.listen(PORT, () => console.log("server is running!!!"));