const Carousel = () => {
    return (
        <section id="carousel" className="about">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    {[
                        "assets/img/Sushodh/Slider 1.jpg",
                        "assets/img/Sushodh/Slider 2.jpg",
                        "assets/img/Sushodh/Slider 2a.jpeg",
                        "assets/img/Sushodh/Slider 3.jpg",
                        "assets/img/Sushodh/Slider 4.jpg",
                        "assets/img/Sushodh/Slider 5.jpeg"
                    ].map((src, index) => (
                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                            <img className="d-block w-65" src={src} alt={`Slide ${index + 1}`} width="100%" height="600vh" />
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <i style={{ fontSize: "60px" }} className="fas fa-arrow-alt-circle-right"></i>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" style={{ color: "red" }} aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>
    );
};

export default Carousel;