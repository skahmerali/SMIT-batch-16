const expressJS = require("express");
const routing  = require("./router/route");

const app = expressJS();
const PORT = 3000 || process.env.PORT;

app.use(expressJS.json());

app.use('/api', routing);


app.listen(PORT, () => console.log("server is running!!!"));