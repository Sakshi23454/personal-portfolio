"use client"
import { useGetProfileQuery, useGetProjectsQuery, useGetSkillsQuery, useViewStatsQuery } from "@/redux/apis/user.api"

const Home = () => {

    const { data } = useGetProfileQuery()
    const { data: statData } = useViewStatsQuery()
    const { data: projectData } = useGetProjectsQuery()
    const { data: skillData } = useGetSkillsQuery()

    return (
        <div className="container" style={{ marginTop: "150px" }}>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1 className="fw-bold"> Hi, I'm</h1>
                    <h1 className="fw-bold text-primary fs-1">{data?.result?.name}</h1>
                    <p className="text-muted mt-3 fs-5" style={{ maxWidth: "500px" }}>
                        {data?.result?.bio || "MERN Stack Developer crafting beautiful web experiences"}
                    </p>
                    <p className="text-muted mt-2 fs-5">A MERN Stack Developer focused on building fast, scalable, and responsive web applications with modern technologies.</p>
                    <div className="d-flex gap-3 mt-4">
                        <a href="/contact" className="btn btn-outline-dark">Let's Connect</a>
                        {data?.result?.resume && (
                            <a href={data.result.resume} download className="btn btn-outline-primary"  >
                                <i className="bi bi-download me-2"></i>Download Resume</a>)}
                    </div>
                </div>

                <div className="col-md-6 text-center mt-4 mt-md-0">
                    {data?.result?.profilePic && (
                        <img src={data.result.profilePic} alt="profile" style={{ width: "400px", height: "400px", borderRadius: "50%", objectFit: "cover", border: "13px solid #cfe8ff" }} />
                    )}
                </div>
            </div>

            {/* Stats Section */}
            <div className="section-2 bg-light" >
                <div className="row align-items-center mt-5 pt-5  g-0">
                    <div className="col-md-4 mb-4">
                        <a href="/about" className="btn px-4 py-3 fw-semibold" style={{ backgroundColor: "#4da6ff", color: "white", borderRadius: "8px" }} > Know More About Me</a>
                    </div>

                    <div className="col-md-8">
                        <div className="row g-3">
                            <div className="col-6 col-md-3">
                                <div className="card text-center shadow-sm border-0">
                                    <div className="card-body">
                                        <h4 className="fw-bold text-primary">{statData?.result?.experience}</h4>
                                        <p className="text-muted small mb-0">Experience</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="card text-center shadow-sm border-0">
                                    <div className="card-body">
                                        <h4 className="fw-bold text-primary">{statData?.result?.projects}</h4>
                                        <p className="text-muted small mb-0">Projects</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="card text-center shadow-sm border-0">
                                    <div className="card-body">
                                        <h4 className="fw-bold text-primary">{statData?.result?.technologies}</h4>
                                        <p className="text-muted small mb-0">Technologies</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="card text-center shadow-sm border-0">
                                    <div className="card-body">
                                        <h4 className="fw-bold text-primary">{statData?.result?.clients}</h4>
                                        <p className="text-muted small mb-0">Clients</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Projects  section*/}
            <div className="section-3 py-5 mt-3">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Projects</h2>
                    <p className="text-muted">
                        Some of the projects I have worked on
                    </p>
                </div>
                <div className="row g-4">
                    {projectData?.result?.slice(0, 2).map(item => (
                        <div className="col-md-6" key={item._id}>
                            <div className="card shadow-sm border-0 h-100">
                                <img src={item.image} alt={item.title} className="card-img-top"
                                    style={{ height: "350px", width: "545px", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="fw-bold">{item.title} </h5>
                                    <p className="text-muted small">{item.description} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5">
                    <a href="/projects" className="btn btn-outline-primary px-4 py-2 fw-semibold" > View All Projects </a>
                </div>
            </div>

            {/* Skills section */}
            <div className="section-4 bg-light py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Skills</h2>
                </div>
                <div className="row g-4">
                    {skillData?.result?.slice(0, 5).map(item => (
                        <div className="col-6 col-md" key={item._id}>
                            <div className="card border-0 shadow-sm text-center h-100">
                                <div className="card-body">
                                    <img src={item.icon} alt={item.name} style={{ width: "50px", height: "50px", objectFit: "contain" }} className="mb-3" />
                                    <h6 className="fw-semibold mb-0">
                                        {item.name}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5">
                    <a href="/skills" className="btn btn-outline-primary px-4 py-2 fw-semibold">
                        View All Skills
                    </a>
                </div>
            </div>


            {/* contact section */}
            <div className="section-5 py-5 text-center mt-3">
                <div className="container">
                    {/* <h2 className="fw-bold mb-3">Contact Me</h2> */}
                    <p className="text-muted mb-4" style={{ maxWidth: "600px", margin: "auto" }}>
                        I'm always open to new opportunities, collaborations, or freelance projects. If you’d like to work together, feel free to reach out.</p>
                    <a href="/contact" className="btn btn-outline-primary px-4 py-2 fw-semibold">
                        Get In Touch
                    </a>
                </div>
            </div>

        </div >
    )
}

export default Home