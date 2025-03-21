
const Hero = () => {
    // Static News Data
    const newsData = [
        {
            title: "1. SCOPUS/UGC/Wos Journal List",
            link: "https://docs.google.com/spreadsheets/d/1jNsA1XyJunK5MlqDlwjEPG-jxq3v1sImbaAOzSUTajQ/edit?usp=sharing",
        },
        {
            title: "2. SuShodh Events and Programs",
            link: "https://docs.google.com/spreadsheets/d/1sYhtzxgH8VaRHT3rNAGk416lEBZ9RAZXiCwNhti6OKo/edit?usp=sharing",
        },
        {
            title: "3. SuShodh Available Data collection Tool and Questionnaire",
            link: "https://docs.google.com/spreadsheets/d/1HQQsHTkQWCscth-dnVBhRAJ7AiCm2pmgwh0GsCHqXMY/edit?usp=sharing",
        },
        {
            title: "4. SuShodh New Research Areas in Medical, Nursing, and Paramedical stream",
            link: "https://docs.google.com/spreadsheets/d/1-THHXIkbQJoFRamEYLeLK-6aTKQHtGO4YONetEzI8rs/edit?usp=sharing",
        },
        {
            title: "5. Grab the opportunity to switch/Become Nursing faculty in INC Recognized Nursing College",
            link: "https://docs.google.com/forms/u/4/d/e/1FAIpQLSdpMce_PI8NRbbBISDCEMug3BeHgaxZ1OIJgHmTU6lNsVTvyg/viewform?usp=send_form",
        },
    ];
    return (
        <section className="d-flex justify-content-center align-items-center">
            <div className="container-fluid">
                <div className="row">
                    {/* Left Side - Image and Button */}
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <div
                            className="img-responsive aos-init aos-animate"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                            style={{float: "left"}}
                        >
                            <img
                                src="assets/img/Sushodh/banner.jpg"
                                alt="Sushodh Banner"
                                style={{
                                    height: "auto",
                                    maxWidth: "100%",
                                    margin: "auto",
                                    display: "block",
                                }}
                            />
                            <a
                                href="#why-us"
                                className="btn-get-started text-center"
                                style={{textAlign: "center", display: "block", marginTop: "10px"}}
                            >
                                Get Started
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Scrolling News Section */}
                    <div className="holder col-md-4 col-sm-6 col-xs-12">
                        <div className="tickercontainer">
                            <div className="mask">
                                <ul className="newsticker">
                                    {newsData.map((item, index) => (
                                        <li key={index}>
                                            <span>{item.title}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <img src="assets/img/new_icon1.gif" alt="New"/>
                                            <br/>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                Link
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;