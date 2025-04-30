import { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/gallery');

                // Assuming response.data is like:
                // [{ id: 1, title: 'Image 1', image: 'BASE64_STRING' }, {...}]
                setImages(response.data);

            } catch (error) {
                console.error('Error fetching gallery images:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <main id="main">
            {/* Breadcrumbs Section */}
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Gallery</h2>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="container gallery-section mt-3">
                <div className="row">
                    {images.map((img) => (
                        <div key={img.id} className="col-md-4 col-sm-6 mb-4">
                            <div className="gallery-item">
                                <img
                                    src={`data:image/jpeg;base64,${img.image}`} // base64 image
                                    alt={img.title || 'Gallery Image'}
                                    className="card-img-top img-fluid rounded"
                                    style={{ height: '200px', objectFit: 'cover' }}
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
