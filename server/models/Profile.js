const mongoose = require("mongoose")

module.exports = mongoose.model("profile", new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true, trim: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    profilePic: { type: String },

    bio: { type: String, required: true },
    education: { String, required: true },
    github: { type: String, required: true },
    linkedin: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    location: { type: String, required: true }

}, { timestamps: true }))