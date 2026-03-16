const mongoose = require("mongoose")

module.exports = mongoose.model("stats", new mongoose.Schema({

    experience: { type: String, required: true },
    projects: { type: String, required: true },
    technologies: { type: String, required: true },
    clients: { type: String, required: true }

}, { timestamps: true }))