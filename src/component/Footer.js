

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>SuShodh</h3>
                            <p>
                                Valmiki Apartment, Ground floor,<br /> Raghav Nagar, Dhankawadi,<br /> Pune, Maharashtra 411043<br /><br />
                                <strong>Phone:</strong> 8698288887<br />
                                <strong>Email:</strong>
                                <p>Research Department</p>Researchguru2021@gmail.com<br />research@sushodh.com<br />
                                <p>Administration</p>sushodhedutech@gmail.com<br />admin@sushodh.com<br />
                                <p>Careers</p>career@sushodh.com<br />sushodhjobs@gmail.com<br />
                            </p>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="index.html">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="courses.html">Courses</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="events.html">Events</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="nursing.html">Nursing Academy</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="softech.html">Softech Solution</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="research.html">Research Institute</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="healthcs.html">Health Care Services</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container d-md-flex py-4">
                <div className="mr-md-auto text-center text-md-left">
                    <div className="copyright">
                        &copy; Copyright <strong><span>SuShodh</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by SuShodh
                    </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="https://twitter.com/SushodhO" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="https://www.facebook.com/SuShodhedutech/?modal=admin_todo_tour" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="https://www.instagram.com/sushodhedutech/" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UClUeQ7rbOR_kKF4xl6taQ4w/" className="google-plus"><i className="bx bxl-youtube"></i></a>
                    <a href="https://www.linkedin.com/in/sushodh-edutech-research-organization-b47a761a5/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;