
const collaborators = [
    "assets/img/cal6.jpg",
    "assets/img/cal5.jpeg",
    "assets/img/cal2.jpeg",
    "assets/img/cal1.jpg",
    "assets/img/cal4.jpeg",
    "assets/img/cal3.jpeg"
];

const CollaboratorsSection = () => {
    return (
        <section id="collaborators" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Collaborators</h2>
                    <p>Our Collaborators</p>
                </div>
                <div className="container">
                    <div className="row">
                        {collaborators.map((image, index) => (
                            <div key={index} className="col-md-4">
                                <div className="thumbnail">
                                    <img
                                        src={image}
                                        alt={`Collaborator ${index + 1}`}
                                        width="70%"
                                        height="150vh"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollaboratorsSection;
