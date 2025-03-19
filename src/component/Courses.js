
const courses = [
    {
        title: "Certificate Classes",
        description:
            "• Certificate Course in Research Methodology\n• Certificate Course in Biostatistics\n• Certificate course in Medical writing\n• Short term course in health care fraternity",
    },
    {
        title: "Nursing Coaching",
        description:
            "• Coaching for Nursing Central and state government exam\n• Coaching and counseling for IELTS/TOEFL/HAAD/OET/PROMETRIC",
    },
    {
        title: "Paramedical Courses",
        description:
            "• Diploma in x-ray technology.\n• Diploma in Dialysis Technology\n• Diploma in operation theatre\n• Diploma in Cosmetology & Beauty Parlor Management\n• Diploma in Medical Laboratory\n• Diploma in Optometry",
    },
    {
        title: "Skill test clinical training.",
        description: "• Simulation Lab\n• Foundation Lab\n• Clinical Laboratory",
    },
    {
        title: "Coaching & Counseling",
        description:
            "Coaching and counseling for IELTS/TOEFL/HAAD/OET/PROMETRIC",
    },
    {
        title: "Test Series",
        description: "Online Test Series for Nursing Coaching",
    },
];

const Courses = () => {
    return (
        <main id="main" data-aos="fade-in">
            <div className="breadcrumbs">
                <div className="container">
                    <h2>Courses</h2>
                </div>
            </div>

            <section id="courses" className="courses">
                <div className="container" data-aos="fade-up">
                    <div className="row" data-aos="zoom-in" data-aos-delay="100">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                            >
                                <div className="course-item">
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4>{course.title}</h4>
                                        </div>
                                        <h3>
                                            <a href="course-details.html"></a>
                                        </h3>
                                        <p>{course.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Courses;