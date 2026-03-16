"use client"
import { useGetExperienceQuery } from '@/redux/apis/user.api'
import React from 'react'

const Experience = () => {
    const { data } = useGetExperienceQuery()

    return <>
        <div className="container" style={{ marginTop: "110px" }}>
            <h2 className="text-center mb-4">Work Experience</h2>
            {data?.result?.map((item) => (
                <div key={item._id} className="card shadow-sm mb-4 border-0  bg-light">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <h5 className="fw-bold mb-1">
                                    {item.role}
                                </h5>
                                <p className="text-primary small mb-2">
                                    <i className="bi bi-building me-1"></i>
                                    {item.company}
                                </p>
                            </div>
                            <span className="badge bg-light text-dark border px-3 py-2">
                                <i className="bi bi-calendar me-1"></i>
                                {item.duration}
                            </span>
                        </div>
                        <p className="text-muted mt-2">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}

        </div>
    </>
}

export default Experience