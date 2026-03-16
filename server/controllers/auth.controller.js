const Profile = require("../models/Profile")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { isEmail } = require("validator")

exports.loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "email and password are required" })
        }
        if (!isEmail(email)) {
            return res.status(400).json({ message: "invalid email" })
        }
        const result = await Profile.findOne({ email })
        if (!result) {
            return res.status(401).json({
                message: process.env.NODE_ENV === "production"
                    ? "Invalid Credentials"
                    : "Email Not Found"
            })
        }
        if (result.role !== "admin") {
            return res.status(401).json({ message: "Access denied. Not an admin" })
        }
        const verify = await bcrypt.compare(password, result.password)
        if (!verify) {
            return res.status(401).json({
                message: process.env.NODE_ENV === "production"
                    ? "Invalid Credentials"
                    : "Invalid Password"
            })
        }
        const token = jwt.sign({ _id: result._id }, process.env.JWT_KEY, { expiresIn: "1d" })
        res.cookie("ADMIN", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 1000 * 60 * 60 * 24
        })
        res.status(200).json({
            message: "admin login successful", result: {
                _id: result._id,
                name: result.name,
                email: result.email,
                mobile: result.mobile,
                role: result.role,
            }
        })
    } catch (error) {
        res.status(500).json({ message: "admin login failed" })
    }
}


exports.logoutAdmin = async (req, res) => {
    try {
        res.clearCookie("ADMIN")
        res.status(200).json({ message: "admin Logout successful" })
    } catch (error) {
        res.status(500).json({ message: "admin logout failed" })
    }
}