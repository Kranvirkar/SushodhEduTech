import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const transactionId = searchParams.get('transactionId');

    useEffect(() => {
        // You can log the transaction or trigger analytics here
        console.log('Payment successful. Transaction ID:', transactionId);
    }, [transactionId]);

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light text-center p-4">
            <div className="card shadow-lg border-0 p-4 rounded-4" style={{ maxWidth: '500px', width: '100%' }}>
                <div className="card-body">
                    <div className="text-success mb-3">
                        <i className="bi bi-check-circle-fill" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <h2 className="card-title mb-3">Payment Successful 🎉</h2>
                    <p className="text-muted mb-4">
                        Thank you! Your transaction has been completed successfully.
                    </p>
                    <div className="mb-3">
                        <strong>Transaction ID:</strong>
                        <div className="text-break">{transactionId}</div>
                    </div>
                    <a href="/" className="btn btn-success btn-lg rounded-pill mt-3">
                        Go to Homepage
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
