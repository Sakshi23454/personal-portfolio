export type PROJECT_CREATE_REQUEST = {
    sk: string,
    title: string
    description: string
    skills?: string[]
    githublink: string
    livelink: string
    image: string
}

export type PROJECT_CREATE_RESPONSE = {
    message: string
}

export type PROJECT_READ_RESPONSE = {
    message: string
    result: {
        _id: string
        title: string
        description: string
        image: string
        githublink: string
        livelink: string
        skills: string[]
    }[]
}

export type PROJECT_UPDATE_REQUEST = {
    _id: string
    title: string
    description: string
    skills: string[]
    githublink: string
    livelink: string
    image: string
}

export type PROJECT_UPDATE_RESPONSE = {
    message: string
}


export type PROJECT_DELETE_REQUEST = {
    _id: string
}

export type PROJECT_DELETE_RESPONSE = {
    message: string
}


export type SKILL_CREATE_REQUEST = {
    name: string
    category: string
    icon: string
}

export type SKILL_CREATE_RESPONSE = {
    message: string
}

export type READ_SKILLS_RESPONSE = {
    message: string
    result: {
        _id: string
        name: string
        category: string
        icon: string
    }[]
}

export type SKILL_DELETE_REQUEST = {
    _id: string
}

export type SKILL_DELETE_RESPONSE = {
    message: string
}


export type EXPERIENCE_CREATE_REQUEST = {
    company: string
    role: string
    duration: string
    description: string
}

export type EXPERIENCE_CREATE_RESPONSE = {
    message: string
}

export type EXPERIENCE_READ_RESPONSE = {
    message: string
    result: {
        _id: string
        company: string
        role: string
        duration: string
        description: string
    }[]
}

export type EXPERIENCE_DELETE_REQUEST = {
    _id: string
}

export type EXPERIENCE_DELETE_RESPONSE = {
    message: string
}


export type EXPERIENCE_UPDATE_REQUEST = {
    _id: string
    company: string
    role: string
    duration: string
    description: string
}

export type EXPERIENCE_UPDATE_RESPONSE = {
    message: string
}


export type EDUCATION_CREATE_REQUEST = {
    _id?: string
    college: string
    degree: string
    year: string
}

export type EDUCATION_CREATE_RESPONSE = {
    message: string
}

export type EDUCATION_READ_RESPONSE = {
    message: string
    result: {
        _id?: string
        college: string
        degree: string
        year: string
    }[]

}

export type EDUCATION_DELETE_REQUEST = {
    _id: string
}

export type EDUCATION_DELETE_RESPONSE = {
    message: string
}


export type EDUCATION_UPDATE_REQUEST = {
    _id: string
    college: string
    degree: string
    year: string
}

export type EDUCATION_UPDATE_RESPONSE = {
    message: string
}


export interface EDUCATION {
    _id?: string
    college: string
    degree: string
    year: string
}


export type PROFILE_CREATE_REQUEST = {
    name: string
    title: string
    email: string
    password: string
    mobile: string
    bio: string
    github: string
    linkedin: string
    location: string
}

export type PROFILE_CREATE_RESPONSE = {
    message: string
}


export type PROFILE_UPDATE_REQUEST = {
    _id?: string
    name?: string
    title?: string
    email?: string
    mobile?: string
    github?: string
    linkedin?: string
    ProfilePic?: string
    resume?: string
    bio?: string
    location?: string
}

export type PROFILE_UPDATE_RESPONSE = {
    message: string
}

// export type PROFILE_READ_RESPONSE = {
//     message: string
//     result: {
//         _id: string
//         name: string
//         title: string
//         email: string
//         mobile: string
//         bio: string
//         github: string
//         linkedin: string
//         location: string
//     }[]
// }

export type PROFILE_READ_RESPONSE = {
    message: string
    result: {
        _id: string
        name: string
        title: string
        email: string
        mobile: string
        bio: string
        ProfilePic?: string
        resume?: string
        github: string
        linkedin: string
        location: string
    }
}

export interface CONTACT {
    _id: string
    name: string
    email: string
    subject: string
    message: string
    createdAt?: Date
}

export type GET_CONTACT_RESPONSE = {
    message: string
    result: CONTACT[]
}


export type STATS_CREATE_REQUEST = {
    _id?: string
    experience: string
    projects: string
    technologies: string
    clients: string
}

export type STATS_CREATE_RESPONSE = {
    message: string
}

export type GET_STATS_RESPONSE = {
    message: string
    result: {
        _id?: string
        experience: string
        projects: string
        technologies: string
        clients: string
    }
}

export type RESUME_UPLOAD_RESPONSE = {
    message: string
}

export type RESUME_DELETE_RESPONSE = {
    message: string
}