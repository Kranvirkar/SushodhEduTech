import { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState({
        loading: false,
        error: false,
        success: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus({ loading: true, error: false, success: false });

        // Simulate form submission
        setTimeout(() => {
            setFormStatus({ loading: false, error: false, success: true });
            setFormData({ name: "", email: "", subject: "", message: "" });

            setTimeout(() => {
                setFormStatus({ loading: false, error: false, success: false });
            }, 5000);
        }, 1500);
    };

    return (
        <>
            <main className="main">
                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2>Contact Us</h2>
                    </div>
                </div>

                <section id="contact" className="contact section">
                    <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
                        <iframe
                            style={{ border: 0, width: "100%", height: "300px" }}
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7568.93206374418!2d73.855801!3d18.462538!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb24f6c35e0b%3A0xf0c596ded4794d65!2sSuShodh%20(SS)%20Edutech%20and%20Research%20Organisation!5e0!3m2!1sen!2sin!4v1742466649628!5m2!1sen!2sin"
                            title="Google Maps"
                            frameBorder="0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row gy-4">
                            <div className="col-lg-4">
                                <div
                                    className="info-item d-flex"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h3>Address</h3>
                                        <p>
                                            Runwal Platinum, Dr.Homi Bhabha Rd, Ram Nagar, Bavdhan
                                            Pune, Maharashtra 411021
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="info-item d-flex"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    <i className="bi bi-telephone flex-shrink-0"></i>
                                    <div>
                                        <h3>Call Us</h3>
                                        <p>+91 8698288887</p>
                                    </div>
                                </div>

                                <div
                                    className="info-item d-flex"
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                >
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h4>Email:</h4>
                                        <strong>Research Department</strong>
                                        <br />
                                        SuShodhresearch@gmail.com
                                        <br />
                                        reasearch@sushodh.com
                                        <br />
                                        <strong>Administration</strong>
                                        <br />
                                        sushodhedutech@gmail.com
                                        <br />
                                        admin@sushodh.com
                                        <br />
                                        <strong>Careers</strong>
                                        <br />
                                        career@sushodh.com
                                        <br />
                                        sushodhjobs@gmail.com
                                        <br />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <form
                                    onSubmit={handleSubmit}
                                    className="contact-form"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <div className="form-row">
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Your Name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                placeholder="Your Email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="phone"
                                                placeholder="Your Phone no"
                                                required
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <select
                                            className="custom-select col-md-6"
                                            name="help"
                                            id="help"
                                        >
                                            <option>--select option--</option>
                                            <option>PhD/PG Topic and Proposal Help</option>
                                            <option>PhD/PG Thesis Chapters Writing</option>
                                            <option>PhD/PG Literature Review Writing Help</option>
                                            <option>PhD/PG Research Methodology Chapter Help</option>
                                            <option>Questionnaire Design for Research</option>
                                            <option>Research Statistical Analysis Help</option>
                                            <option>Qualitative Analysis Help for Research</option>
                                            <option>PhD/PG Thesis Editing and Proofreading</option>
                                            <option>Journal Paper Publication Assistance</option>
                                            <option>Addressing Comments, Revisions in Thesis</option>
                                            <option>PhD/PG Thesis Viva-Voce Preparation</option>
                                            <option>Systematic Literature Review</option>
                                            <option>PhD/PG Synopsis Writing Service</option>
                                            <option>Conceptual Framework Design</option>
                                            <option>Patent and Copyright services</option>
                                            <option>Research Conference and Workshop</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                    <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        id="message"
                        placeholder="Message"
                        spellCheck="false"
                    ></textarea>
                                        <div className="validate"></div>
                                    </div>

                                    <div className="col-md-12 text-center">
                                        {formStatus.loading && (
                                            <div className="loading">Loading...</div>
                                        )}
                                        {formStatus.error && (
                                            <div className="error-message">
                                                There was an error sending your message.
                                            </div>
                                        )}
                                        {formStatus.success && (
                                            <div className="sent-message">
                                                Your message has been sent. Thank you!
                                            </div>
                                        )}

                                        <button
                                            className="btn-contact"
                                            type="submit"
                                            disabled={formStatus.loading}
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <a
                href="#"
                id="scroll-top"
                className="scroll-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </>
    );
};

export default ContactUs;
