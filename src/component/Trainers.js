const Trainers = () => {
    return (
        <section id="trainers" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Trainers</h2>
                    <p>Our Professional Trainers</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                        <img src="assets/img/teacher.jpg" className="img-fluid" alt="Trainers" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <ul>
                            <li><i className="icofont-check-circled"></i> Research Writers</li>
                            <li><i className="icofont-check-circled"></i> Statisticians</li>
                            <li><i className="icofont-check-circled"></i> Subject Matter Experts (SME)</li>
                            <li><i className="icofont-check-circled"></i> Language Editors</li>
                            <li><i className="icofont-check-circled"></i> Language Translators</li>
                            <li><i className="icofont-check-circled"></i> Medical Writers</li>
                            <li><i className="icofont-check-circled"></i> Nursing Writers</li>
                            <li><i className="icofont-check-circled"></i> English Proof Readers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trainers;