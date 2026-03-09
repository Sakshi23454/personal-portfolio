exports.loginAdmin = async (req, res) => {
    try {
        res.json({ message: "admin Login successful" })
    } catch (error) {
        res.status(500).json({ message: "admin login failed" })
    }
}

exports.logoutAdmin = async (req, res) => {
    try {
        res.json({ message: "admin Logout successful" })
    } catch (error) {
        res.status(500).json({ message: "admin logout failed" })
    }
}