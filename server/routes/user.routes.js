const { getProjects, getSkills, getExperience, getEducation, getSocialLinks, viewResume, addcontactForm } = require("../controllers/user.controller")

const router = require("express").Router()

router
    .get("/getproject", getProjects)
    .get("/getskills", getSkills)
    .get("/getexperience", getExperience)
    .get("/geteducation", getEducation)
    .get("/getsociallinks", getSocialLinks)
    .get("/viewresume", viewResume)
    .post("/addcontactform", addcontactForm)

module.exports = router