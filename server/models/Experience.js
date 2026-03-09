const mongoose = require("mongoose")

module.exports = mongoose.model("experience", new mongoose.Schema({

    company: { type: String, required: true },

    role: { type: String, required: true },

    duration: { type: String, required: true },

    description: { type: String, required: true }

}))