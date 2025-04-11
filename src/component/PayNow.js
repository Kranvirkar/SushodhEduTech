import { useState } from "react";
import api from "../services/api";
import axios from "axios"; // Adjust path as needed

export const PayNow = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const url = "/create-payment";

    const validate = () => {
        const errs = {};
        if (!name.trim()) errs.name = "Name is required.";
        if (!mobileNumber.match(/^\d{10}$/)) errs.mobileNumber = "Enter a valid 10-digit mobile number.";
        if (isNaN(parseInt(amount)) || parseInt(amount) <= 0) {
            errs.amount = "Enter a valid amount greater than 0.";
        }
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        try {
            const res = await axios.post("http://localhost:3001/api/create-payment", {
                amount: parseInt(amount),
                mobileNumber: mobileNumber.trim(),
                name: name.trim(),
                email,
            });

            if (res.data?.qrUrl) {
                window.location.href = res.data.qrUrl;
            } else {
                alert("Payment link not received from server.");
            }
        } catch (error) {
            console.error("Payment initiation failed:", error);
            alert("Failed to initiate payment. Please try again.");
        }
        setLoading(false);
    };

    return(
        <div className="container my-5 py-5 ">
            <div className="row justify-content-center mt-3">
                <div className="col-md-6 shadow p-4  bg-white " style={{borderRadius:"15px"}}>
                    <h2 className="text-center mb-4 ">Pay with PhonePe</h2>

                    <form onSubmit={handlePayment} noValidate>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''} `}
                                placeholder="Enter Full Name"
                                value={name}
                                maxLength="50"
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                            <input
                                id="mobileNumber"
                                type="tel"
                                className={`form-control ${errors.mobileNumber ? 'is-invalid' : ''}`}
                                placeholder="Enter 10-digit Mobile Number"
                                value={mobileNumber}
                                maxLength="10"
                                onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                            />
                            {errors.mobileNumber && <div className="invalid-feedback">{errors.mobileNumber}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="amount" className="form-label">Amount (₹)</label>
                            <input
                                id="amount"
                                type="number"
                                className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
                                placeholder="Enter Amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                            {errors.amount && <div className="invalid-feedback">{errors.amount}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                id="email"
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                placeholder="Enter Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100 pay-btn"
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : `Pay ₹${amount || '___'}`}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
