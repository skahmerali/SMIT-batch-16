const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// console.log("secret key", process.env.JWTSECRETKEY);

const authrization = async (req, res, next) => {
  const header = req.header("Authorization"); // Bearer sakjbjsab.diukcskj.buwwibdi98
  //  const header = req.header(`Bearer ${req.token}`);
  console.log("here is a header", header);
  if (!header) {
    return res.send({
      status: 401,
      message: "headers are invalid",
    });
  }
  try {
    const token = header.split(" ")[1]; // Extract token after "Bearer"
    jwt.verify(token, process.env.JWTSECRETKEY, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }
      req.user = user; // Attach decoded user to request
      console.log(req.user);
      next();
    });
    // const decoded = jwt.verify(header, process.env.JWTSECRETKEY);
    // console.log('here is decoded',decoded);
    // req.user = decoded.user;
    // next();
  } catch (err) {
    res.send({
      status: 505,
      message: "user is not authorized",
    });
  }
};
module.exports = authrization;
