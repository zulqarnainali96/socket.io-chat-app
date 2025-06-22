// controllers/uploadController.js
const cloudinary = require("../utils/cloudinary.config");
const multer = require("multer");
const fs = require("fs");

// Multer config for temporary storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "profile_pics",
    });

    // Delete local file after upload
    fs.unlinkSync(req.file.path);

    res.status(200).json({
      message: "Upload successful",
      url: result.secure_url,
    });
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
};

module.exports = {
  upload,
  uploadImage,
};
