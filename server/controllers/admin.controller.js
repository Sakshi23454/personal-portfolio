exports.addProject = async (req, res) => {
    try {
        res.status(200).json({ message: "project added success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to add project" })
    }
}

exports.updateProject = async (req, res) => {
    try {
        res.status(200).json({ message: "project update success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to update project" })
    }
}

exports.deleteProject = async (req, res) => {
    try {
        res.status(200).json({ message: "project delete success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to delete project" })
    }
}

exports.addSkill = async (req, res) => {
    try {
        res.status(200).json({ message: "skill add success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to add skill" })
    }
}

exports.deleteSkill = async (req, res) => {
    try {
        res.status(200).json({ message: "skill delete success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to delete skill" })
    }
}

exports.addExperience = async (req, res) => {
    try {
        res.status(200).json({ message: "experience add success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to add experience" })
    }
}

exports.deleteExperience = async (req, res) => {
    try {
        res.status(200).json({ message: "experience delete success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to delete experience" })
    }
}

exports.updateExperience = async (req, res) => {
    try {
        res.status(200).json({ message: "experience update success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to update experience" })
    }
}

exports.addEducation = async (req, res) => {
    try {
        res.status(200).json({ message: "education add success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to add education" })
    }
}

exports.deleteEducation = async (req, res) => {
    try {
        res.status(200).json({ message: "education delete success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to delete education" })
    }
}

exports.updateEducation = async (req, res) => {
    try {
        res.status(200).json({ message: "education update success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to update education" })
    }
}

exports.addProfile = async (req, res) => {
    try {
        res.status(200).json({ message: "user profile add success" })
    } catch (error) {
        res.status(500).json({ message: "unable to add user profile" })
    }
}

exports.updateProfile = async (req, res) => {
    try {
        res.status(200).json({ message: "update profile success" })
    } catch (error) {
        res.status(500).json({ message: "unable to update profile" })
    }
}

exports.addResume = async (req, res) => {
    try {
        res.status(200).json({ message: "resume add success" })
    } catch (error) {
        res.status(500).json({ message: "unable to add resume" })
    }
}

exports.getContacts = async (req, res) => {
    try {
        res.status(200).json({ message: "contact details fetch success" })
    } catch (error) {
        res.status(500).json({ message: "unable to get contact details" })
    }
}