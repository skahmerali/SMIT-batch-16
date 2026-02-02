const jwt = require("jsonwebtoken");
const userModel = require("./../db/userSchema");
const fs = require("fs"); // For file system operations (like deleting old files)
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function signUp(req, res) {
  try {
    // destructure
    const { firstName, lastName, email, password, role } = req.body;
    const avatar = req.file ? req.file.filename : null;
    //here we are doing bcryption user password
    bcrypt.genSalt(saltRounds, function (err, salt) {
      // i.e : askndjasndjisnadine99inedin980r32jndw9o pasword in hash
      bcrypt.hash(password, salt, function (err, hash) {
        const user = {
          firstName,
          lastName,
          email,
          password: hash,
          role,
          profilePath: avatar,
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

// Read Profiles (R)
const getProfiles = async (req, res) => {
  try {
    const profiles = await userModel.find();
    res.status(200).json({ success: true, data: profiles });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update Profile (U)
const updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    let updateData = { name, email };

    if (req.file) {
      // If a new file is uploaded, handle deleting the old one
      const oldProfile = await userModel.findById(req.params.id);
      if (oldProfile && oldProfile.avatar) {
        fs.unlinkSync(`uploads/${oldProfile.avatar}`); // Delete old file
      }
      updateData.avatar = req.file.filename;
    }

    const profile = await userModel.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!profile)
      return res
        .status(404)
        .json({ success: false, message: "Profile not found" });
    res.status(200).json({ success: true, data: profile });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Delete Profile (D)
const deleteProfile = async (req, res) => {
  try {
    const profile = await userModel.findByIdAndDelete(req.params.id);
    if (!profile)
      return res
        .status(404)
        .json({ success: false, message: "Profile not found" });

    if (profile.avatar) {
      fs.unlinkSync(`uploads/${profile.avatar}`); // Delete associated file
    }
    res.status(200).json({ success: true, message: "Profile deleted" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

async function login(req, res) {
  // destructure
  try {
    console.log("hello this is front end request");
    const { email, password } = req.body;
    // email= "ahmer@gmail.com";
    const dbUser = await userModel.findOne({ email });
    console.log(dbUser);
    // user = { email: "shiekhahmerali@gmail.com", name: "sheikh ahmer", password: "jnjasdjsa2433432#@#@"}
    // console.log(dbUser, "here is a user");
    // password= "saylani zindabad";
    // Load hash from your password DB.
    // bcrypt.compare(password, dbUser.password, function (err, result) {
    // result == true

    // if (result) {
    // console.log(process.env.JWTSECRETKEY, "process.env.JWTSECRETKEY");
    // let token = jwt.sign(
    //   {
    //     email: dbUser.email,
    //     firstName: dbUser.fName,
    //     "last name": dbUser.lName,
    //     // role: dbUser.role,
    //   },
    //   process.env.JWTSECRETKEY,
    //   { expiresIn: "1d" },
    // );
    // console.log(token);
    // res.cookie("jwtToken", token, {
    //   httpOnly: true,
    //   maxAge: "1d", // 1 day in milliseconds
    // });
    res.send({
      status: 200,
      message: "user login successfully",
      dbUser,
      // token,
    });
    // }
    // });
  } catch (err) {
    res.send({
      err,
      status: 500,
      message: "sorry! server is not responding",
    });
  }
}

async function home(req, res) {
  const { user } = req;
  console.log(user, "this is line 42");
  // destructure
  try {
    if (user.role === "admin") {
      res.send({
        status: 200,
        message: "Welcome Admin",
      });
    }
    res.send({
      status: 200,
      message: "Welcome user",
    });
  } catch (err) {
    res.send({
      err,
      status: 500,
      message: "sorry! server is not responding",
    });
  }
}

async function updateUser(req, res) {
  try {
    const { firstName, lastName } = req.body;
    const { id } = req.query;
    console.log({ firstName, lastName, id });
    const userFound = await userModel.findById({ _id: id }).exec();
    console.log(userFound);
    userFound.firstName = firstName;
    await userModel.save(userFound);
    res.send({
      status: 200,
      message: "user is good to go",
    });
  } catch (err) {
    res.send({
      status: 500,
      message: "user not authorized",
      err,
    });
  }
}
module.exports = {
  signUp,
  login,
  home,
  updateUser,
  updateProfile,
  deleteProfile,
  getProfiles,
};
