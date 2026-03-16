const path = require("path")
const multer = require("multer")

// cloudinary data send
module.exports = multer({ storage: multer.diskStorage({}) }).single("resume")
