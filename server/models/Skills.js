const mongoose = require("mongoose")

module.exports = mongoose.model("skills", new mongoose.Schema({

    name: { type: String, required: true },

    level: { type: String, required: true }

}))