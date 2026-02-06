const express = require("express");
const {
  signUp,
  login,
  home,
  updateUser,
  getProfiles,
  updateProfile,
  deleteProfile,
  mailSending,
} = require("../controller/auth");
const authrization = require("../middleware/authentication");
const upload = require("./../middleware/imageUploading");

// for nodemailer documentation: https://mailtrap.io/blog/expressjs-send-email/

const router = express.Router();

router.post("/createUser", upload.single("avatar"), signUp);

// Read all profiles
router.get("/", getProfiles);

// Update profile (with single file upload middleware)
router.put("/:id", upload.single("avatar"), updateProfile);

// Delete profile
router.delete("/:id", deleteProfile);
// middleware
router.post("/login", login);
router.post("/home", authrization, home);
router.put("/userfinder", updateUser);
router.put("/send-email", mailSending);

module.exports = router;
