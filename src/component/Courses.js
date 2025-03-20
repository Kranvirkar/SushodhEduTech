const courses = [
    {
        title: "Certificate Classes",
        description: "• Certificate Course in Research Methodology\n• Certificate Course in Biostatistics\n• Certificate course in Medical writing\n• Short term course in health care fraternity",
        category: "Healthcare Education",
        price: "$200"
    },
    {
        title: "Nursing Coaching",
        description: "• Coaching for Nursing Central and state government exam\n• Coaching and counseling for IELTS/TOEFL/HAAD/OET/PROMETRIC",
        category: "Nursing",
        price: "$180"
    },
    {
        title: "Paramedical Courses",
        description: "• Diploma in x-ray technology.\n• Diploma in Dialysis Technology\n• Diploma in operation theatre\n• Diploma in Cosmetology & Beauty Parlor Management\n• Diploma in Medical Laboratory\n• Diploma in Optometry",
        category: "Medical",
        price: "$250"
    },
    {
        title: "Skill test clinical training.",
        description: "• Simulation Lab\n• Foundation Lab\n• Clinical Laboratory",
        category: "Practical Training",
        price: "$150"
    },
    {
        title: "Coaching & Counseling",
        description: "Coaching and counseling for IELTS/TOEFL/HAAD/OET/PROMETRIC",
        category: "Language",
        price: "$120"
    },
    {
        title: "Test Series",
        description: "Online Test Series for Nursing Coaching",
        category: "Assessment",
        price: "$80"
    }
];

const trainers = [
    { name: "Dr. Smith", students: 50, likes: 65 },
    { name: "Dr. Johnson", students: 35, likes: 42 },
    { name: "Dr. Williams", students: 20, likes: 85 },
    { name: "Dr. Brown", students: 45, likes: 60 },
    { name: "Dr. Davis", students: 30, likes: 50 },
    { name: "Dr. Miller", students: 25, likes: 70 }
];

const Courses = () => {
    return (
        <main id="main" data-aos="fade-in">
            {/* Page Title */}
            <div className="breadcrumbs">
                <div className="container">
                    <h2>Courses</h2>
                </div>
            </div>

            {/* Courses Section */}
            <section id="courses" className="courses">
                <div className="container aos-init aos-animate" data-aos="fade-up">
                    <div className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">

                        {/* Certificate Classes */}
                        <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
                            <div className="course-item">
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Certificate Classes</h4>
                                        <p className="price"></p>
                                    </div>
                                    <h3><a href="course-details.html"></a></h3>
                                    <p>
                                        • Certificate Course in Research Methodology<br/>
                                        • Certificate Course in Biostatistics<br/>
                                        • Certificate course in Medical writing<br/>
                                        • Short term course in health care fraternity
                                    </p>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <span></span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Paramedical Courses */}
                        <div className="col-lg-6 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="course-item">
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Paramedical Courses</h4>
                                        <p className="price"></p>
                                    </div>
                                    <h3><a href="course-details.html"></a></h3>
                                    <p>
                                        • Diploma in X-ray Technology.<br/>
                                        • Diploma in Dialysis Technology<br/>
                                        • Diploma in Operation Theatre<br/>
                                        • Diploma in Medical Laboratory<br/>
                                        • Diploma in Optometry
                                    </p>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <span></span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Courses;