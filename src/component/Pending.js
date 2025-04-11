import React from 'react';
import { Spinner } from 'react-bootstrap';

const PaymentPending = () => {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light text-center p-4">
            <div className="card shadow border-0 p-4 rounded-4" style={{ maxWidth: '500px', width: '100%' }}>
                <div className="card-body">
                    <div className="text-warning mb-3">
                        <i className="bi bi-hourglass-split" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <h2 className="card-title mb-3">Payment is Pending</h2>
                    <p className="text-muted mb-4">
                        Your payment is currently being processed. This may take a few moments.
                        You will receive an update shortly.
                    </p>
                    <Spinner animation="border" variant="warning" className="mb-3" />
                    <div className="mt-3">
                        <a href="/" className="text-decoration-none text-secondary">Back to Home</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPending;
