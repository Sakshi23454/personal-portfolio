import { APP_URL } from "@/constants/config"
import { CONTACT_FORM_REQUEST, CONTACT_FORM_RESPONSE, DOWNLOAD_RESUME_RESPONSE, GET_EDUCATION_RESPONSE, GET_EXPERIENCE_RESPONSE, GET_PROFILE_RESPONSE, GET_PROJECTS_RESPONSE, GET_SKILLS_RESPONSE, VIEW_STATS_RESPONSE } from "@/types/User"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        // baseUrl: `${APP_URL}/api/user`,
        baseUrl: `/api/user`,
        credentials: "include"
    }),
    tagTypes: [],
    endpoints: (builder) => {
        return {
            getProjects: builder.query<GET_PROJECTS_RESPONSE, void>({
                query: () => {
                    return {
                        url: "/getproject",
                        method: "GET"
                    }
                },
            }),

            getSkills: builder.query<GET_SKILLS_RESPONSE, void>({
                query: () => {
                    return {
                        url: "/getskills",
                        method: "GET"
                    }
                },
            }),

            getExperience: builder.query<GET_EXPERIENCE_RESPONSE, void>({
                query: () => {
                    return {
                        url: "/getexperience",
                        method: "GET"
                    }
                },
            }),

            getEducation: builder.query<GET_EDUCATION_RESPONSE, void>({
                query: () => {
                    return {
                        url: "/geteducation",
                        method: "GET"
                    }
                },
            }),

            getProfile: builder.query<GET_PROFILE_RESPONSE, void>({
                query: () => {
                    return {
                        url: "/getprofile",
                        method: "GET"
                    }
                },
            }),

            downloadResume: builder.query<DOWNLOAD_RESUME_RESPONSE, void>({
                query: () => {
                    return {
                        url: "/downloadresume",
                        method: "GET"
                    }
                },
            }),

            addcontactForm: builder.mutation<CONTACT_FORM_RESPONSE, CONTACT_FORM_REQUEST>({
                query: userData => {
                    return {
                        url: "/addcontactform",
                        method: "POST",
                        body: userData
                    }
                },
            }),

            viewStats: builder.query<VIEW_STATS_RESPONSE, void>({
                query: () => {
                    return {
                        url: "/viewstats",
                        method: "GET"
                    }
                },
            }),
        }
    }
})

export const {
    useGetProjectsQuery,
    useGetSkillsQuery,
    useGetExperienceQuery,
    useGetEducationQuery,
    useGetProfileQuery,
    useDownloadResumeQuery,
    useAddcontactFormMutation,
    useViewStatsQuery
} = userApi