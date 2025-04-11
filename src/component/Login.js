import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const tempErrors = {};

        if (!email.trim()) tempErrors.email = 'Email is required';
        if (!password.trim()) tempErrors.password = 'Password is required';

        setErrors(tempErrors);

        if (Object.keys(tempErrors).length === 0) {
            setLoading(true);
            // Simulate API login
            setTimeout(() => {
                console.log('Login successful:', { email, password });
                setLoading(false);
            }, 1500);
        }
    };

    return (
        <div className="container my-5 py-5 ">
            <div className="row justify-content-center mt-3">
                <div
                    className="col-md-6 shadow p-4 bg-white"
                    style={{ borderRadius: '15px' }}
                >
                    <h2 className="text-center mb-4">Login to Your Account</h2>

                    <form onSubmit={handleLogin} noValidate>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && (
                                <div className="invalid-feedback">{errors.email}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && (
                                <div className="invalid-feedback">{errors.password}</div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100 pay-btn"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
