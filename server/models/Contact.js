const mongoose = require("mongoose")

module.exports = mongoose.model("contact", new mongoose.Schema({

    name: { type: String, required: true },

    email: { type: String, required: true, lowercase: true, unique: true, trim: true },

    subject: { type: String, required: true },

    message: { type: String, required: true }

}, { timestamps: true }))