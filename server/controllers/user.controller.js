exports.getProjects = async (req, res) => {
    try {
        res.status(200).json({ message: "projects fetch success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to fetch projects" })
    }
}

exports.getSkills = async (req, res) => {
    try {
        res.status(200).json({ message: "skills fetch success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to fetch skills" })
    }
}

exports.getExperience = async (req, res) => {
    try {
        res.status(200).json({ message: "experience fetch success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to fetch experience" })
    }
}

exports.getEducation = async (req, res) => {
    try {
        res.status(200).json({ message: "education fetch success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to fetch education" })
    }
}

exports.getSocialLinks = async (req, res) => {
    try {
        res.status(200).json({ message: "social links fetch success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to fetch social links" })
    }
}

exports.viewResume = async (req, res) => {
    try {
        res.status(200).json({ message: "resume fetch success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to fetch resume" })
    }
}

exports.addcontactForm = async (req, res) => {
    try {
        res.status(200).json({ message: "message sent successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to send message" })
    }
}