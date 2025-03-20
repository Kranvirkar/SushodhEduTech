import Footer from "./Footer";

const TermService = () => {
    return (
        <main id="main">
            {/* Breadcrumbs */}
            <div className="breadcrumbs aos-init aos-animate" data-aos="fade-in">
                <div className="container">
                    <h2>Terms of Services</h2>
                </div>
            </div>

            <section id="about" className="about">
                <div className="container aos-init aos-animate" data-aos="fade-up">
                    <p>
                        <strong>1. Access:</strong> Users must agree to access the website for
                        educational and research purposes only.
                    </p>
                    <p>
                        <strong>2. Privacy:</strong> Personal information will be handled
                        securely, adhering to privacy laws.
                    </p>
                    <p>
                        <strong>3. Copyright:</strong> Users must respect intellectual
                        property rights and cite sources appropriately.
                    </p>
                    <p>
                        <strong>4. Prohibited Content:</strong> Any illegal, offensive, or
                        harmful content is strictly prohibited.
                    </p>
                    <p>
                        <strong>5. Compliance:</strong> Users must comply with applicable laws
                        and regulations.
                    </p>
                    <p>
                        <strong>6. User Conduct:</strong> Respectful and responsible behavior
                        is expected from all users.
                    </p>
                    <p>
                        <strong>7. Modifications:</strong> The terms may be updated, and
                        users are responsible for staying informed.
                    </p>
                    <p>
                        <strong>8. Termination:</strong> Violation of terms may result in
                        account suspension or termination.
                    </p>
                    <p>
                        <strong>9. Disclaimers:</strong> The website provides information
                        as-is; no guarantees are made.
                    </p>
                    <p>
                        <strong>10. Governing Law:</strong> Any disputes are subject to the
                        jurisdiction of specified laws or courts by SuShodh authority only.
                    </p>
                </div>
            </section>
        </main>

    );
    <Footer></Footer>
};

export default TermService;