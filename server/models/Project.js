const mongoose = require("mongoose")

module.exports = mongoose.model("project", new mongoose.Schema({

    title: { type: String, required: true },

    description: { type: String, required: true },

    skills: [{ type: String, required: true }],

    githubLink: { type: String, required: true },

    liveLink: { type: String, required: true },

    image: { type: String, required: true }

}, { timestamps: true }))