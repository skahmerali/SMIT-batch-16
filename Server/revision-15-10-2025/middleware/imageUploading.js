const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Ensure the 'uploads' folder exists (Multer can create it if a string is provided to dest)
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    // Generate a unique filename using timestamp and original extension
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB (optional)
  fileFilter: function (req, file, cb) { // Optional file filter for validation
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Only images of type jpeg, jpg, png, gif are allowed'));
  }
});

module.exports = upload;
