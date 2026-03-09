const router = require("express").Router()
const { loginAdmin, logoutAdmin } = require("../controllers/auth.controller")

router
    .post("/login", loginAdmin)
    .post("/logout", logoutAdmin)

module.exports = router