const mongoose = require("mongoose")

module.exports = mongoose.model("profile", new mongoose.Schema({
    name: { type: String },
    title: { type: String },
    email: { type: String, required: true, lowercase: true, unique: true, trim: true },
    password: { type: String },
    mobile: { type: String },
    profilePic: { type: String },

    bio: { type: String },
    resume: { type: String },

    github: { type: String },
    linkedin: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    location: { type: String }

}, { timestamps: true }))