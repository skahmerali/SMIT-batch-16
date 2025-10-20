// imports/require from third party or any builin functions
const express = require("express");
const userData = require('./router/route');
// https://zweck.io/jwt-authentication-in-node-js-with-middleware-a-secure-approach-for-web-applications/
// Describe local and global varriables

// vulnorable way
// const PORT = 5000 || 3000 || 7000;
// expacted right soultion to find the available port
const PORT = 5000 || process.env.PORT;

const app = express();

// middleware
app.use(express.json());

// these are the types of API's
// app.post("/createUser", async(req, res) => {
//   // destructure
//   try{
//       const { email, name } = req.body;
//       console.log(email);
//       console.log(name);
//       res.send({
//         status: 200,
//         message: "user created successfully",
//       })
//     }catch(err){
//         res.send({
//             err, 
//             status: 500,
//             message: "sorry! server is not responding"
//         })
//     }
// });
app.use('/api', userData);

// req will be come from frontend (user provided data)
// res will send to frontend the from server/backend (server responded data/result)
app.get("/", (req, res) => {
  res.send("hello world");
  // console.log("hello world");
});

// app.put("/api/user",()=>{
//  const id = req.params 
// });
// app.delete();

app.listen(PORT, () => {
  // template littrels
  console.log(`Server is running ${PORT}`);
});
