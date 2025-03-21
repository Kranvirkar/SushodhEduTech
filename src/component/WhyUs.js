import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
    return (
        <section id="why-us" className="why-us">
            <div className="container aos-init aos-animate" data-aos="fade-up">
                {/* Section Title */}
                <div className="section-title">
                    <h2>Services</h2>
                    <p>Our Services</p>
                </div>

                <div className="row">
                    {/* Left Side - Description */}
                    <div className="col-lg-2 d-flex align-items-stretch">
                        <div className="content">
                            <h3>PhD/PG Research Guidance</h3>
                            <p>
                                Ethical research guidance and consulting services for scholars and faculty.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Services List */}
                    <div
                        className="col-lg-10 d-flex align-items-stretch aos-init aos-animate"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className="col-xl-3 d-flex align-items-stretch"
                                    >
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
    { title: "PhD/PG Topic and Proposal Help", description: "Consultation to assist you in selecting an appropriate research subject and developing a dissertation-worthy proposal." },
    { title: "PhD/PG Thesis Chapters Writing", description: "Assist with writing and formatting chapters, ensuring proper structure, style, and flow." },
    { title: "PhD/PG Literature Review Writing Help", description: "Evaluate and analyze available literature to support your study." },
    { title: "PhD/PG Research Methodology Chapter Help", description: "Select the most appropriate research paradigm for your study." },
    { title: "Questionnaire Design for Research", description: "Create a questionnaire using qualitative, quantitative, or mixed methods research." },
    { title: "Research Statistical Analysis Help", description: "Analyze data using SPSS, AMOS, or STATA, specific to the research subject." },
    { title: "Qualitative Analysis Help for Research", description: "Analyze participant behavior and observations using thematic analysis." },
    { title: "PhD/PG Thesis Editing and Proofreading", description: "Ensure research is error-free with proper format, language, and grammar." },
    { title: "Journal Paper Publication Assistance", description: "Assistance in writing and publishing research in UGC CARE, SCOPUS, IEEE, and more." },
    { title: "Addressing Comments, Revisions in Thesis", description: "Integrate all committee comments for expedited approvals." },
    { title: "PhD/PG Thesis Viva-Voce Preparation", description: "Prepare for anticipated questions during viva-voce." },
    { title: "Systematic Literature Review", description: "Conduct a structured review to achieve higher credibility and clarity." },
    { title: "PhD/PG Synopsis Writing Service", description: "Summarize research with introduction, scope, methodology, and findings." },
    { title: "Conceptual Framework Design", description: "Illustrate cause-effect relationships between research variables." },
    { title: "Patent and Copyright Services", description: "Secure intellectual property rights for innovations." },
    { title: "Research Conference and Workshop", description: "Organize on-demand research events with certification and MOUs." }
];

export default WhyUs;