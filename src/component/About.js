const About = () => {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>About</h2>
                    <p>About Us</p>
                </div>
                <div className="row">
                    <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                        <img
                            src="assets/img/Sushodh logo 2 aug 2020.png"
                            className="img-fluid"
                            alt="Sushodh Logo"
                            width="400"
                            height="400"
                        />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <h3>Work Personally Grow Professionally.</h3>
                        <p className="font-italic">
                            SuShodh is a premier research institute located in central India to uplift the
                            quality and standard of education and research. SuShodh Organization is Certified
                            By Ministry of Corporate Affairs, Government of India. SuShodh is established by
                            professionals who have evidence-based experience and will facilitate the initiation
                            of multidisciplinary research teams drawing on capacities for guidance and support
                            in research areas.
                        </p>
                        <ul>
                            <li><i className="icofont-check-circled"></i> Research Institute</li>
                            <li><i className="icofont-check-circled"></i> Education and Technology</li>
                            <li><i className="icofont-check-circled"></i> Publication and Writing</li>
                            <li><i className="icofont-check-circled"></i> Patent and Copyright Services</li>
                        </ul>
                        <a href="about.html" className="learn-more-btn">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;