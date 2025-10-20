const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

dotenv.config();

console.log('secret key', process.env.JWTSECRETKEY);

const authrization = async (req, res, next) => {
    const header = req.header("Authorization");
    console.log(header);
    if (!header) {
        res.send({
            status: 401,
            message: "headers are invalid"
        })
    }
    try {
        const decoded = jwt.verify(header, process.env.JWTSECRETKEY);
        console.log(decoded);
        req.user = decoded.user;
        next();
    }
    catch (err) {
        res.send({
            status: 505,
            message: "user is not authorized"
        })
    }
};
module.exports = authrization;