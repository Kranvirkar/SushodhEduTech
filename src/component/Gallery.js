const Gallery = () => {
    const imagePaths = [
        "PHOTO-2021-12-12-10-37-43.jpg",
        "PHOTO-2021-12-17-12-28-53.jpg",
        "PHOTO-2021-12-17-14-50-14.jpg",
        "PHOTO-2021-12-18-09-29-55.jpg",
        "PHOTO-2021-12-18-09-35-06.jpg",
        "PHOTO-2021-12-18-09-53-47.jpg"
    ];

    return (
        <main id="main">
            {/* Breadcrumbs Section */}
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Gallery</h2>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="container gallery-section">
                <div className="row">
                    {imagePaths.map((fileName, index) => (
                        <div key={index} className="col-md-4 col-sm-6 mb-4">
                            <div className="gallery-item">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/Gallery/${fileName}`}
                                    className="img-fluid rounded"
                                    alt={`Gallery ${index + 1}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Gallery;
