const mongoose = require("mongoose")

module.exports = mongoose.model("education", new mongoose.Schema({
    college: { type: String, required: true },
    degree: { type: String, required: true },
    year: { type: String, required: true }
}, { timestamps: true }))