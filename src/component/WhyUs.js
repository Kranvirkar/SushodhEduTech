
const WhyUs = () => {
    return (
        <section id="why-us" className="why-us">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Services</h2>
                    <p>Our Services</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Why Choose Sushodh?</h3>
                            <p>
                                SuShodh is a premier research institute located in central India to uplift the quality and standard of education and
                                Research. SuShodh Organization is Certified By the Ministry of Corporate Affairs, Government of India. SuShodh is established
                                by professionals with evidence-based experience and facilitates multidisciplinary research teams for guidance and support.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                {services.map((service, index) => (
                                    <div key={index} className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0">
                                            <i className="bx bx-cube-alt"></i>
                                            <h4>{service.title}</h4>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const services = [
    { title: "E-Classroom", description: "Well-equipped classrooms with updated technology, Audio-video facility, Projector teaching." },
    { title: "Library", description: "Books, Research Journal, Newspaper, Reading room." },
    { title: "Parking", description: "2-wheeler and 4-wheeler parking available." },
    { title: "E-Library", description: "E-journal, Research thesis format for all universities." },
    { title: "Simulation Lab", description: "A simulation center with realistic clinical sim lab rooms for practicing clinical expertise." },
    { title: "Drinking Water", description: "Providing access to safe drinking water." }
];

export default WhyUs;