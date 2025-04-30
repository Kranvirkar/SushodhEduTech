import { useState, useEffect } from "react";
import api from "../services/api";
import config from "../services/config"; // Make sure you have axios wrapper (or use axios directly)

const Carousel = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Fetch images from backend
    const fetchSliderImages = async () => {
      try {
        const response = await api.get(`${config.API_BASE_URL}/sliderImages`);
        setSliderImages(response.data);
      } catch (error) {
        console.error("Failed to fetch slider images", error);
      }
    };

    fetchSliderImages();
  }, []);

  return (
    <section
      id="carousel"
      className="about"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          {sliderImages.map((_, index) => (
            <li
              key={index}
              data-target="#carouselExampleIndicators"
              data-slide-to={index}
              className={index === 0 ? "active" : ""}
            ></li>
          ))}
        </ol>

        <div className="carousel-inner">
          {sliderImages.map((img, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={img.id}
            >
              <img
                className="d-block w-100"
                src={`data:image/jpeg;base64,${img.image}`} // backend sending base64 string
                alt={img.title || `Slide ${index + 1}`}
                style={{
                  height: isMobile ? "auto" : "600px",
                  maxHeight: isMobile ? "300px" : "none",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
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
