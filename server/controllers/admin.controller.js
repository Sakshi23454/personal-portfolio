const Project = require("../models/Project")
const { isMongoId, isEmail, isMobilePhone, isURL, isEmpty } = require("validator")
const Skills = require("../models/Skills")
const Experience = require("../models/Experience")
const Profile = require("../models/Profile")
const bcrypt = require("bcryptjs")
const Contact = require("../models/Contact")
const path = require("path")
const upload = require("../utils/upload")
const cloud = require("./../utils/cloud.js")
const Stats = require("../models/Stats.js")
const Education = require("../models/Education.js")

exports.addProject = async (req, res) => {
    try {
        const { title, description, skills, githublink, livelink, image } = req.body
        if (!title || !description || !skills || !githublink || !livelink || !image) {
            return res.status(400).json({ message: "all fields required" })
        }
        await Project.create({ title, description, skills, githublink, livelink, image })
        res.status(200).json({ message: "project added success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to add project" })
    }
}

exports.readProjects = async (req, res) => {
    try {
        const result = await Project.find().select("title description image githublink livelink skills")
        res.status(200).json({ message: "projects fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to fetch projects" })
    }
}


exports.updateProject = async (req, res) => {
    try {
        const { pid } = req.params
        if (!isMongoId(pid)) {
            return res.status(400).json({ message: "invalid project id" })
        }
        let obj = {}
        const { title, description, skills, githublink, livelink, image } = req.body
        if (title) {
            obj = { ...obj, title }
        }
        if (description) {
            obj = { ...obj, description }
        }
        if (skills) {
            if (!Array.isArray(skills)) {
                return res.status(400).json({ message: "skills must be array" })
            }
            obj = { ...obj, skills }
        }
        if (githublink) {
            if (!isURL(githublink)) {
                return res.status(400).json({ message: "invalid github link" })
            }
            obj = { ...obj, githublink }
        }
        if (livelink) {
            if (!isURL(livelink)) {
                return res.status(400).json({ message: "invalid live link" })
            }
            obj = { ...obj, livelink }
        }
        if (image) {
            obj = { ...obj, image }
        }
        if (obj.title || obj.description || obj.skills || obj.githublink || obj.livelink || obj.image) {
            await Project.findByIdAndUpdate(pid, obj, { runValidators: true })
        }
        res.status(200).json({ message: "project update success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to update project" })
    }
}


exports.deleteProject = async (req, res) => {
    try {
        const { pid } = req.params
        await Project.findByIdAndDelete(pid)
        res.status(200).json({ message: "project delete success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to delete project" })
    }
}

exports.addSkill = async (req, res) => {
    try {
        const { name, category, icon } = req.body
        if (!name || !category || !icon) {
            return res.status(400).json({ message: "Name and category required" })
        }
        await Skills.create({ name, category, icon })
        res.status(200).json({ message: "skill add success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to add skill" })
    }
}

exports.readSkill = async (req, res) => {
    try {
        const result = await Skills.find()
        if (result.length === 0) {
            return res.status(404).json({ message: "No skills found" })
        }
        // if (!result) {
        //     return res.status(404).json({ message: "No skills found" })
        // }
        res.status(200).json({ message: "skills read success", result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to read skills" })
    }
}


exports.deleteSkill = async (req, res) => {
    try {
        const { sid } = req.params
        const result = await Skills.findByIdAndDelete(sid)
        if (!result) {
            return res.status(404).json({ message: "Skill not found" })
        }
        res.status(200).json({ message: "skill delete success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to delete skill" })
    }
}

exports.addExperience = async (req, res) => {
    try {
        const { company, role, duration, description } = req.body
        await Experience.create({ company, role, duration, description })
        res.status(200).json({ message: "experience add success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to add experience" })
    }
}

exports.readExperience = async (req, res) => {
    try {
        const result = await Experience.find()
        res.status(200).json({ message: "experience fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to fetch experience" })
    }
}


exports.deleteExperience = async (req, res) => {
    try {
        const { eid } = req.params
        await Experience.findByIdAndDelete(eid)
        res.status(200).json({ message: "experience delete success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to delete experience" })
    }
}

exports.updateExperience = async (req, res) => {
    try {
        const { eid } = req.params
        if (!isMongoId(eid)) {
            return res.status(400).json({ message: "invalid experience id" })
        }
        let obj = {}
        const { company, role, duration, description } = req.body
        if (company) {
            obj = { ...obj, company }
        }
        if (role) {
            obj = { ...obj, role }
        }
        if (duration) {
            obj = { ...obj, duration }
        }
        if (description) {
            obj = { ...obj, description }
        }
        if (obj.company || obj.role || obj.duration || obj.description) {
            await Experience.findByIdAndUpdate(eid, obj, { runValidators: true })
        }
        res.status(200).json({ message: "experience update success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to update experience" })
    }
}

exports.addEducation = async (req, res) => {
    try {
        const { college, degree, year } = req.body
        if (!college || !degree || !year) {
            return res.status(400).json({ message: "all fields required" })
        }
        await Education.create({ college, degree, year })
        res.status(200).json({ message: "education add success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to add education" })
    }
}

exports.deleteEducation = async (req, res) => {
    try {
        const { eid } = req.params
        const result = await Education.findByIdAndDelete(eid)
        if (!result) {
            return res.status(404).json({ message: "education not found" })
        }
        res.status(200).json({ message: "education delete success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to delete education" })
    }
}

exports.updateEducation = async (req, res) => {
    try {
        const { eid } = req.params
        if (!isMongoId(eid)) {
            return res.status(400).json({ message: "invalid education id" })
        }
        let obj = {}
        const { college, degree, year } = req.body

        if (college) {
            obj = { ...obj, college }
        }
        if (degree) {
            obj = { ...obj, degree }
        }
        if (year) {
            obj = { ...obj, year }
        }
        if (obj.college || obj.degree || obj.year) {
            await Education.findByIdAndUpdate(eid, obj, { runValidators: true })
        }
        res.status(200).json({ message: "education update success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to update education" })
    }
}

exports.readEducation = async (req, res) => {
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


// exports.addProfile = async (req, res) => {
//     try {
//         const { name, title, email, password, mobile, profilePic, bio, github, linkedin, location } = req.body
//         if (isEmpty(name) || isEmpty(title) || isEmpty(email) || isEmpty(password) || isEmpty(mobile) || isEmpty(profilePic) || isEmpty(bio) || isEmpty(github) || isEmpty(linkedin) || isEmpty(location)) {
//             return res.status(400).json({ message: "all fields are required" })
//         }
//         if (!isEmail(email)) {
//             return res.status(400).json({ message: "invalid email" })
//         }
//         if (!isMobilePhone(mobile, "en-IN")) {
//             return res.status(400).json({ message: "invalid mobile" })
//         }
//         if (!isURL(github)) {
//             return res.status(400).json({ message: "invalid github link" })
//         }
//         if (!isURL(linkedin)) {
//             return res.status(400).json({ message: "invalid linkedin link" })
//         }
//         const result = await Profile.findOne({ email })
//         if (result) {
//             return res.status(400).json({ message: "profile already exists with this email" })
//         }
//         const hashedPassword = await bcrypt.hash(password, 10)
//         await Profile.create({ name, title, email, password: hashedPassword, mobile, profilePic, bio, github, linkedin, location, role: "user" })
//         res.status(200).json({ message: "user profile add success" })
//     } catch (error) {
//         res.status(500).json({ message: "unable to add user profile" })
//     }
// }

exports.addProfile = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ message: err.message })
            }
            if (!req.file) {
                return res.status(400).json({
                    message: "profile pic is required"
                })
            }
            console.log(req.body)
            console.log(req.file)
            const { secure_url } = await cloud.uploader.upload(req.file.path)
            const result = await Profile.findOne({ role: "user" })
            if (!result) {
                return res.status(404).json({ message: "profile not found" })
            }
            result.profilePic = secure_url
            await result.save()
            res.status(201).json({ message: "profile pic add success" })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to add profile pic" })
    }
}

exports.updateProfile = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ message: err.message })
            }
            if (req.file) {
                const result = await Profile.findOne({ role: "user" })

                await cloud.uploader.destroy(path.basename(result.profilePic).split(".")[0])
                const { secure_url } = await cloud.uploader.upload(req.file.path)

                result.profilePic = secure_url
                await result.save()
                res.status(201).json({ message: "profile pic update success" })
            } else {
                const result = await Profile.findOne({ role: "user" })
                await Profile.findByIdAndUpdate(result._id, req.body)
                res.status(201).json({ message: "profile update success" })
            }
        })
    } catch (error) {
        res.status(500).json({ message: "unable to update profile" })
    }
}

exports.readProfile = async (req, res) => {
    try {
        const result = await Profile.findOne({ role: "user" }).select("name title email mobile bio   github linkedin location profilePic resume")
        res.status(200).json({ message: "profile fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to fetch profile" })
    }
}


exports.getContacts = async (req, res) => {
    try {
        // Sorts results by createdAt field -1 → Descending order, Means latest messages appear first
        const result = await Contact.find().sort({ createdAt: -1 })
        res.status(200).json({ message: "contact details fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to get contact details" })
    }
}


exports.addStats = async (req, res) => {
    try {
        const { experience, projects, technologies, clients } = req.body
        let result = await Stats.findOne()
        if (!result) {
            result = await Stats.create({
                experience,
                projects,
                technologies,
                clients
            })
        } else {
            result.experience = experience
            result.projects = projects
            result.technologies = technologies
            result.clients = clients
            await result.save()
        }
        res.status(200).json({ message: "Stats saved successfully" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


exports.readStats = async (req, res) => {
    try {
        const result = await Stats.findOne()
        res.status(200).json({ message: "Stats fetched successfully", result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


exports.addResume = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ message: err.message })
            }
            if (!req.file) {
                return res.status(400).json({
                    message: "resume file is required"
                })
            }
            console.log(req.file)
            const { secure_url } = await cloud.uploader.upload(req.file.path)
            const result = await Profile.findOne({ role: "user" })
            if (!result) {
                return res.status(404).json({ message: "profile not found" })
            }
            result.resume = secure_url
            await result.save()
            res.status(200).json({ message: "resume upload success" })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}



exports.deleteResume = async (req, res) => {
    try {
        const result = await Profile.findOne({ role: "user" })
        if (!result || !result.resume) {
            return res.status(404).json({ message: "resume not found" })
        }
        const public_id = path.basename(result.resume).split(".")[0]
        await cloud.uploader.destroy(public_id)
        result.resume = undefined
        await result.save()
        res.status(200).json({ message: "resume delete success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to delete resume" })
    }
}