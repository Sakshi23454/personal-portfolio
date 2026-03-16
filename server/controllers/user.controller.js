const { visitorcontactTemplate } = require("../email-templates/visitorcontactTemplate")
const Contact = require("../models/Contact")
const Experience = require("../models/Experience")
const Profile = require("../models/Profile")
const Project = require("../models/Project")
const Skills = require("../models/Skills")
const { isEmail, isEmpty } = require("validator")
const { sendEmail } = require("../utils/email")
const { admingetcontactTemplate } = require("../email-templates/admingetcontactTemplate")
const Stats = require("../models/Stats")
const Education = require("../models/Education")


exports.getProjects = async (req, res) => {
    try {
        const result = await Project.find().select("title description image githublink livelink skills")
        res.status(200).json({ message: "projects fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to fetch projects" })
    }
}

exports.getSkills = async (req, res) => {
    try {
        const result = await Skills.find()
        if (!result) {
            return res.status(404).json({ message: "No skills found" })
        }
        res.status(200).json({ message: "skills fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to fetch skills" })
    }
}

exports.getExperience = async (req, res) => {
    try {
        const result = await Experience.find()
        res.status(200).json({ message: "experience fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to fetch experience" })
    }
}

exports.getEducation = async (req, res) => {
    try {
        const result = await Education.find()
        if (!result) {
            return res.status(404).json({ message: "education not found" })
        }
        res.status(200).json({ message: "education fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to fetch education" })
    }
}

exports.getProfile = async (req, res) => {
    try {
        const result = await Profile.findOne({ role: "user" }).select("name title email mobile  bio    github linkedin location profilePic resume")
        res.status(200).json({ message: "profile fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to fetch profile" })
    }
}


exports.addcontactForm = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body
        if (isEmpty(name) || isEmpty(email) || isEmpty(subject) || isEmpty(message)) {
            return res.status(400).json({ message: "all fields are required" })
        }
        if (!isEmail(email)) {
            return res.status(400).json({ message: "invalid email" })
        }
        await Contact.create({ name, email, subject, message })
        // confirmation mail to visitor
        await sendEmail({
            email: email,
            subject: "Contact Confirmation",
            message: visitorcontactTemplate({
                name,
                email,
                subject,
                message
            })
        })
        // notification mail to admin
        await sendEmail({
            email: process.env.ADMIN_EMAIL,
            subject: "New Contact Message",
            message: admingetcontactTemplate({
                name,
                email,
                subject,
                message
            })
        })
        res.status(200).json({ message: "message sent successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to send message" })
    }
}


exports.viewStats = async (req, res) => {
    try {
        const result = await Stats.findOne()
        res.status(200).json({ message: "Stats fetched successfully", result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}