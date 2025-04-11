import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentFailure = () => {
    const navigate = useNavigate();

    const handleRetry = () => {
        navigate('/checkout'); // Update this route to your actual payment/checkout page
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light text-center p-4">
            <div className="card shadow-lg border-0 p-4 rounded-4" style={{ maxWidth: '500px', width: '100%' }}>
                <div className="card-body">
                    <div className="text-danger mb-3">
                        <i className="bi bi-x-circle-fill" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <h2 className="card-title mb-3">Payment Failed 😞</h2>
                    <p className="text-muted mb-4">
                        Unfortunately, your transaction was not successful. Please try again or use a different payment method.
                    </p>
                    <button onClick={handleRetry} className="btn btn-danger btn-lg rounded-pill">
                        Retry Payment
                    </button>
                    <div className="mt-3">
                        <a href="/" className="text-decoration-none text-secondary">Back to Home</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentFailure;
