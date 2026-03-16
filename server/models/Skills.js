const mongoose = require("mongoose")

module.exports = mongoose.model("skills", new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    icon: { type: String, required: true }
}, { timestamps: true }))