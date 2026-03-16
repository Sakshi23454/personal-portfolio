require("dotenv").config({ path: "./../.env" })
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const Profile = require("../models/Profile")
exports.seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db connected")
        const result = await Profile.findOne({ role: "admin" })
        if (result) {
            console.log("admin already present")
        } else {
            const hash = await bcrypt.hash("123", 10)
            const admin = await Profile.create({
                name: "admin",
                email: "admin@gmail.com",
                password: hash,
                mobile: "8983357193",
                role: "admin"
            })
            // await Profile.findByIdAndUpdate(admin._id, { $unset: { education: 1 } })
            console.log("admin seed complete")
        }

        const user = await Profile.findOne({ role: "user" })
        if (user) {
            console.log("user already present")
        } else {
            await Profile.create({
                name: "Sakshi Markal",
                title: "Full Stack MERN Developer",
                email: "sakshimarkal66@gmail.com",
                mobile: "8983357193",
                profilePic: "xx",
                resume: "xx",
                bio: "Passionate web developer",
                github: "https://github.com/Sakshi23454",
                linkedin: "https://www.linkedin.com/in/sakshi-markal-526a30295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                role: "user",
                location: "Chh.Sambhajinagar, MH, India",
                // education: []
            })
            console.log("user seed complete")
        }
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}