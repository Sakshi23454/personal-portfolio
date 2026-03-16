const router = require("express").Router()
const { loginAdmin, logoutAdmin } = require("../controllers/auth.controller.js")

router
    .post("/login", loginAdmin)
    .post("/logout", logoutAdmin)

module.exports = router