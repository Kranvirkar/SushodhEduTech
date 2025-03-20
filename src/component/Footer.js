import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>SuShodh</h3>
                            <p>
                                Runwal Platinum,<br/> Dr. Homi Bhabha Rd, Ram Nagar,<br/>
                                Bavdhan Pune, Maharashtra 411021<br/>
                                <br/>
                                <strong>Phone:</strong> 8698288887<br/>
                                <strong>Email:</strong> <br/>
                                <strong>Research Department</strong><br/>
                                <a href="mailto:SuShodhresearch@gmail.com">SuShodhresearch@gmail.com</a><br/>
                                <a href="mailto:reasearch@sushodh.com">reasearch@sushodh.com</a><br/>
                                <strong>Administration</strong><br/>
                                <a href="mailto:sushodhedutech@gmail.com">sushodhedutech@gmail.com</a><br/>
                                <a href="mailto:admin@sushodh.com">admin@sushodh.com</a><br/>
                                <strong>Careers</strong><br/>
                                <a href="mailto:career@sushodh.com">career@sushodh.com</a><br/>
                                <a href="mailto:sushodhjobs@gmail.com">sushodhjobs@gmail.com</a><br/>
                            </p>
                        </div>


                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <Link to="/courses">Courses</Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <Link to="/events">Events</Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <Link to="/terms">Terms of service</Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <Link to="/terms">Privacy policy</Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <Link to="/refund">Refund policy</Link>
                                </li>
                            </ul>
                        </div>


                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <Link to="/about">About Sushodh</Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <Link to="/gallery">Gallery</Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <a href="reasearch.php">Research Guidance
                                    Process</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i><li><Link to="/contact">Contact us</Link></li>
                                </li>
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