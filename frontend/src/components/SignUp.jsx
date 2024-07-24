import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import "./SignUp.css"; // Import the CSS file

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.error("Provide Email and Password");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      alert("Account has been created successfully!");
    } catch (error) {
      console.log("errorCode:", error.code, "errorMessage:", error.message);
      alert("Error during signup");
    }
  };

  return (
    <section className="vh-100 bg-image-vertical">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <i
                className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                style={{ color: "#709085" }}
              ></i>
              <span className="h1 fw-bold mb-0">E-GAME</span>
            </div>
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form className="form" onSubmit={handleSignUp}>
                <h3 className="title">Sign Up</h3>
                <div className="form-outline">
                  <label htmlFor="email">
                    <input
                      type="email"
                      id="email"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      required
                    />
                  </label>
                </div>
                <div className="form-outline">
                  <label htmlFor="password">
                    <input
                      type="password"
                      id="password"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                  </label>
                </div>
                <div className="flex">
                  <button className="submit" type="submit">
                    Sign Up
                  </button>
                </div>
                <p className="signUp">
                  Already have an account? <a href="/">Login here</a>
                </p>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="https://plus.unsplash.com/premium_photo-1680086979907-971f07cebc58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdhbWV8ZW58MHx8MHx8fDA%3D"
              alt="SignUp"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
