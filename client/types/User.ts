export interface PROJECT {
    _id: string
    title: string
    description: string
    image: string
    githublink: string
    livelink: string
    skills: string[]
}

export type GET_PROJECTS_RESPONSE = {
    message: string
    result: PROJECT[]
}



export interface SKILL {
    _id?: string
    name: string
    icon: string
    category?: string
}

export type GET_SKILLS_RESPONSE = {
    message: string
    result: SKILL[]
}



export interface EXPERIENCE {
    _id: string
    company: string
    role: string
    duration: string
    description: string
}

export type GET_EXPERIENCE_RESPONSE = {
    message: string
    result: EXPERIENCE[]
}



export interface EDUCATION {
    _id?: string
    college: string
    degree: string
    year: string
}

export type GET_EDUCATION_RESPONSE = {
    message: string
    result: {
        _id?: string
        college: string
        degree: string
        year: string
    }[]
}



export interface PROFILE {
    _id?: string
    name: string
    title?: string
    email: string
    mobile: string
    profilePic?: string
    resume?: string
    bio?: string
    github?: string
    linkedin?: string
    location: string
}

export type GET_PROFILE_RESPONSE = {
    message: string
    result: PROFILE
}



export type CONTACT_FORM_REQUEST = {
    name: string
    email: string
    subject: string
    message: string
}

export type CONTACT_FORM_RESPONSE = {
    message: string
}



export interface STATS {
    _id: string
    experience: number
    projects: number
    technologies: number
    clients: number
}

export type VIEW_STATS_RESPONSE = {
    message: string
    result: STATS
}



export type DOWNLOAD_RESUME_RESPONSE = {
    message: string
}