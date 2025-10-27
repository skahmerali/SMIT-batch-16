const jwt = require("jsonwebtoken");
const userModel = require("./../db/userSchema");
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function signUp(req, res) {
  // destructure
  try {
    const { firstName, lastName, email, password } = req.body;
    //here we bcrypt user password
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        const user = {
          firstName,
          lastName,
          email,
          password: hash,
          role: "admin",
        };
        // Store hash in your password DB.
        const result = new userModel(user).save();
        res.send({
          message: "signup successfully",
          result,
          status: 200,
        });
      });
    });
  } catch (err) {
    res.send({
      err,
      status: 500,
      message: "sorry! server is not responding",
    });
  }
}
async function login(req, res) {
  // destructure
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    console.log(user, "here is a user");

    // Load hash from your password DB.
    bcrypt.compare(password, user.password, function (err, result) {
      // result == true

      if (result) {
        console.log(process.env.JWTSECRETKEY, 'process.env.JWTSECRETKEY')
        let token = jwt.sign(
          {
            email: user.email,
            firstName: user.firstName,
            "last name": user.lastName,
            role: user.role,
          },
          process.env.JWTSECRETKEY
        );
        console.log(token);
      }
    });
    res.send({
      status: 200,
      message: "user login successfully",
      token,
    });
  } catch (err) {
    res.send({
      err,
      status: 500,
      message: "sorry! server is not responding",
    });
  }
}

module.exports = { signUp, login };
