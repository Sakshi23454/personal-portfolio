const { getProjects, getSkills, getExperience, getEducation, addcontactForm, getProfile, viewStats } = require("../controllers/user.controller.js")

const router = require("express").Router()

router
    .get("/getproject", getProjects)
    .get("/getskills", getSkills)
    .get("/getexperience", getExperience)
    .get("/geteducation", getEducation)
    .get("/getprofile", getProfile)
    .post("/addcontactform", addcontactForm)
    .get("/viewstats", viewStats)

module.exports = router