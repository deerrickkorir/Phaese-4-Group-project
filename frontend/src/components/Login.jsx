import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import './Login.css'; // Import the CSS file

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            console.error("Provide Email and Password");
            return;
        }
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);
            alert('Login successful');
        } catch (error) {
            console.log("errorCode:", error.code, "errorMessage:", error.message);
            alert('Error during login');
        }
    };

    return (
        <section className="vh-100 bg-image-vertical">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-black">
                        <div className="px-5 ms-xl-4">
                            <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }}></i>
                            <span className="h1 fw-bold mb-0">Logo</span>
                        </div>
                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                            <form style={{ width: '23rem' }} onSubmit={handleLogin}>
                                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
                                <div className="form-outline mb-4">
                                    <input
                                        type="email"
                                        id="form2Example18"
                                        className="form-control form-control-lg"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label className="form-label" htmlFor="form2Example18">Email address</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="form2Example28"
                                        className="form-control form-control-lg"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label className="form-label" htmlFor="form2Example28">Password</label>
                                </div>
                                <div className="pt-1 mb-4">
                                    <button className="btn btn-info btn-lg btn-block" type="submit">Login</button>
                                </div>
                                <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                                <p>Don't have an account? <a href="/signUp" className="link-info">Register here</a></p>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img
                            src="https://i.pinimg.com/736x/64/27/80/6427801c01a0774c47d35cae399d58e7.jpg"
                            alt="Login"
                            className="w-100 vh-100"
                            style={{ objectFit: 'cover', objectPosition: 'left' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
