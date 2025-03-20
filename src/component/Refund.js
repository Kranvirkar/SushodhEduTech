import Header from "./Header";
import Events from "./Events";
import Footer from "./Footer";


const Refund = () => {
    return (
        <main id="main" >
            {/* Breadcrumbs */}
            <div className="breadcrumbs aos-init aos-animate" data-aos="fade-in">
                <div className="container">
                    <h2>Refund Policy</h2>
                </div>
            </div>

            <div className="container aos-init aos-animate about" data-aos="fade-up">
                <p>
                    Our commitment at <strong>SuShodh</strong> is to provide high-quality
                    research services that meet or exceed your expectations. We understand
                    that circumstances may arise that lead to the need for a refund.
                    Therefore, we have established a clear refund policy to address such
                    situations.
                </p>
                <br/>
                <p>Refunds will be issued under the following conditions:</p>
                <br/>
                <p>
                    <strong>1. Work Not Completed:</strong> If, for any reason, we are
                    unable to fulfill the agreed-upon research services and the work has not
                    commenced, a full refund will be processed promptly. We value
                    transparency and want to ensure that you receive the service you paid
                    for.
                </p>
                <p>
                    <strong>2. Completed Work:</strong> Once the research work has been
                    initiated and substantial effort has been invested, we cannot provide a
                    refund. We are committed to delivering comprehensive and valuable
                    results, and resources have been allocated to your project.
                </p>
                <p>
                    To request a refund, please contact our customer support team at
                    within 3 days of the service agreement. Refund processing times may
                    vary, but we strive to handle requests promptly.
                </p>
                <p>
                    <strong>SuShodh</strong> is dedicated to customer satisfaction, and our
                    refund policy is designed to uphold our commitment to delivering
                    exceptional research services. We appreciate your understanding and
                    trust in our services.
                </p>
            </div>

        </main>

    );
};

export default Refund;