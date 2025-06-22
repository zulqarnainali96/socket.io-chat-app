const { Router } = require("express");
const { upload, uploadImage } = require("../controllers/uploadController");

const router = Router();

router.route("/upload-file").post(upload.single("image"), uploadImage);
// router.post("/upload-file",upload.single("image"), uploadImage)

module.exports = router