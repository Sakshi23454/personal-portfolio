const { addProject, updateProject, deleteProject, addSkill, deleteSkill, addExperience, deleteExperience, updateExperience, addEducation, updateEducation, deleteEducation, addProfile, updateProfile, addResume, getContacts } = require("../controllers/admin.controller")

const router = require("express").Router()

router
    .post("/addproject", addProject)
    .put("/update-project/:pid", updateProject)
    .delete("/delete-project/:pid", deleteProject)
    .post("/addskill", addSkill)
    .delete("/delete-skill/:sid", deleteSkill)
    .post("/addexperience", addExperience)
    .put("/update-experience/:eid", updateExperience)
    .delete("/delete-experience/:eid", deleteExperience)
    .post("/addeducation", addEducation)
    .put("/update-education/:eid", updateEducation)
    .delete("/delete-education/:eid", deleteEducation)
    .post("/addprofile", addProfile)
    .put("/update-profile/:pid", updateProfile)
    .post("/addresume", addResume)
    .get("/getcontacts", getContacts)

module.exports = router