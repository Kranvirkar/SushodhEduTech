import {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const ContactUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // State for form fields
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        help: "",
        message: "",
    });

    const [status, setStatus] = useState({ loading: false, success: null });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: null });

        // Simulate sending form data
        setTimeout(() => {
            setStatus({ loading: false, success: true });
        }, 2000);
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
                    <div>
                        <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
                            <iframe
                                style={{border: 0, width: "100%", height: "300px"}}
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7568.93206374418!2d73.855801!3d18.462538!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb24f6c35e0b%3A0xf0c596ded4794d65!2sSuShodh%20(SS)%20Edutech%20and%20Research%20Organisation!5e0!3m2!1sen!2sin!4v1742466649628!5m2!1sen!2sin"
                                title="Google Maps"
                                frameBorder="0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="container aos-init aos-animate" data-aos="fade-up">
                            <div className="row mt-5">
                                {/* Left Column - Location & Phone */}
                                <div className="col-lg-6">
                                    <div className="info">
                                        <div className="address">
                                            <i className="icofont-google-map"></i>
                                            <h4>Location:</h4>
                                            <p>Runwal Platinum, Dr. Homi Bhabha Rd, Ram Nagar, Bavdhan, Pune,
                                                Maharashtra 411021</p>
                                        </div>
                                        <div className="phone">
                                            <i className="icofont-phone"></i>
                                            <h4>Call:</h4>
                                            <p>8698288887</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Email */}
                                <div className="col-lg-6">
                                    <div className="info">
                                        <div className="address">
                                            <i className="icofont-envelope"></i>
                                            <h4>Email:</h4>
                                        <p>
                                            <strong>Research Department</strong><br/>
                                            SuShodhresearch@gmail.com<br/>
                                            research@sushodh.com<br/>
                                            <strong>Administration</strong><br/>
                                            sushodhedutech@gmail.com<br/>
                                            admin@sushodh.com<br/>
                                            <strong>Careers</strong><br/>
                                            career@sushodh.com<br/>
                                            sushodhjobs@gmail.com
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container aos-init aos-animate" data-aos="fade-up">
                            <div className="row mt-5">
                                {/* WhatsApp Image */}
                                <div className="col-lg-4">
                                <img src="assets/img/whtsapp.png"
                                         alt="WhatsApp"
                                         className=" full-size-img"
                                    />
                                </div>

                                {/* Form */}
                                <div className="col-lg-8 mt-8 mt-lg-0">
                                    <form onSubmit={handleSubmit} className="php-email-form">
                                        <div className="form-row">
                                            <div className="col-md-6 form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="col-md-6 form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Your Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="col-md-6 form-group">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    className="form-control"
                                                    placeholder="Your Phone No"
                                                    pattern="[0-9]{10}"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Select Dropdown */}
                                        <div className="form-group">
                                            <select className="custom-select col-md-6" name="help" value={formData.help}
                                                    onChange={handleChange} required>
                                                <option value="">-- Select Option --</option>
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
                                                <option>Patent and Copyright Services</option>
                                                <option>Research Conference and Workshop</option>
                                            </select>
                                        </div>

                                        {/* Message Textarea */}
                                        <div className="form-group">
              <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
              ></textarea>
                                        </div>

                                        {/* Submission Status */}
                                        <div className="mb-3">
                                            {status.loading && <div className="loading">Loading...</div>}
                                            {status.success &&
                                                <div className="sent-message">Your message has been sent. Thank
                                                    you!</div>}
                                        </div>

                                        {/* Submit Button */}
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Send Message</button>
                                        </div>
                                    </form>
                                </div>
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
