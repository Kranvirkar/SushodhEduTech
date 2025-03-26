import { useState, useEffect } from "react";

const Carousel = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="carousel"
      className="about"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "0px !important",
      }}
    >
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        style={{
          padding: isMobile ? "20px" : "50px",
          width: isMobile ? "100%" : "75%",
        }}
      >
        <ol className="carousel-indicators">
          {[...Array(6).keys()].map((index) => (
            <li
              key={index}
              data-target="#carouselExampleIndicators"
              data-slide-to={index}
              className={index === 0 ? "active" : ""}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {[
            "assets/img/Sushodh/Slider 1.jpg",
            "assets/img/Sushodh/Slider 2.jpg",
            "assets/img/Sushodh/Slider 2a.jpeg",
            "assets/img/Sushodh/Slider 3.jpg",
            "assets/img/Sushodh/Slider 4.jpg",
            "assets/img/Sushodh/Slider 5.jpeg",
          ].map((src, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                className="d-block w-100"
                src={src}
                alt={`Slide ${index + 1}`}
                style={{
                  height: isMobile ? "auto" : "600px",
                  maxHeight: isMobile ? "300px" : "none",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <i
            style={{ fontSize: "60px" }}
            className="fas fa-arrow-alt-circle-left"
          ></i>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <i
            style={{ fontSize: "60px" }}
            className="fas fa-arrow-alt-circle-right"
          ></i>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
};

export default Carousel;
