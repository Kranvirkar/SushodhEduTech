import React, { useState, useEffect } from 'react';
import api from "../services/api";
import config from "../services/config";
import DashboardHeader from "./DashboardHeader";

const DGallery = () => {
    const [imageFile, setImageFile] = useState(null);
    const [title, setTitle] = useState('');
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');
    const [previewUrl, setPreviewUrl] = useState(null);
    const [images, setImages] = useState([]); // Now images not just count

    const fetchImages = async () => {
        try {
            const response = await api.get(`${config.API_BASE_URL}/gallery`);
            setImages(response.data);
        } catch (error) {
            console.error('Failed to fetch images', error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        if (file) {
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!imageFile) {
            setMessage('Please select an image.');
            return;
        }

        const formData = new FormData();
        formData.append('image', imageFile);
        formData.append('title', title);

        try {
            setUploading(true);
            await api.post(`${config.API_BASE_URL}/gallery/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setMessage('Image uploaded successfully!');
            setImageFile(null);
            setTitle('');
            setPreviewUrl(null);
            fetchImages(); // refresh the images
        } catch (err) {
            console.error(err);
            setMessage('Failed to upload image.');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this image?')) {
            try {
                await api.delete(`${config.API_BASE_URL}/gallery/${id}`);
                setMessage('Image deleted successfully!');
                fetchImages(); // refresh the images after delete
            } catch (error) {
                console.error('Failed to delete image', error);
                setMessage('Failed to delete image.');
            }
        }
    };

    return (
        <><DashboardHeader/>
        <div className="container m-5">
            <div className="card shadow p-4">
                <h2 className="mb-4 text-center">Add Gallery Image</h2>

                {/* Show total uploaded */}
                <div className="alert alert-primary text-center">
                    Total Uploaded Images: {images.length}
                </div>

                {/* Upload Form */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="imageUpload" className="form-label">Select Image</label>
                        <input
                            type="file"
                            className="form-control"
                            id="imageUpload"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>

                    {previewUrl && (
                        <div className="mb-3 text-center">
                            <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '10px' }} />
                        </div>
                    )}

                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title (optional)</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary" disabled={uploading}>
                            {uploading ? 'Uploading...' : 'Upload'}
                        </button>
                    </div>

                    {message && (
                        <div className="alert alert-info text-center mt-3" role="alert">
                            {message}
                        </div>
                    )}
                </form>
            </div>

            {/* Uploaded Images List */}
            <div className="mt-5">
                <h3 className="text-center mb-4">Uploaded Images</h3>
                <div className="row">
                    {images.map((img) => (
                        <div className="col-md-3 mb-4" key={img.id}>
                            <div className="card shadow-sm">
                                <img
                                    src={`data:image/jpeg;base64,${img.image}`} // Adjust according to how you send image
                                    alt={img.title || 'Slider Image'}
                                    className="card-img-top"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center">
                                    <h6 className="card-title">{img.title || 'No Title'}</h6>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(img.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
        </>
    );
};

export default DGallery;
