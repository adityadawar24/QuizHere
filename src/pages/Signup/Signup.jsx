import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./Signup.css";
import { auth } from "../../FirebaseConfig"; // updated import
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Signup = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password).then((data) => {
      console.log(data, "authData");
      setIsLoggedIn(true);
      navigate("/");
    });
    e.target.reset();
  };

  return (
    <div className="main-container">
    <h1>Create an Account</h1>

    <div className="flex-text">
      <p className="des-top">Have an Account?</p>
      <Link to="/signin" className="redirect-links">
        Sign In
      </Link>
    </div>

    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="email-block">
        <label>Email</label>
        <input
          name="email"
          type="email"
          className="block-style"
          placeholder="Enter Email Address"
          required
        />
      </div>
      <div className="pass-block">
        <label>Password</label>
        <input
          name="password"
          type="password"
          className="block-style"
          placeholder="Create Password"
          required
        />
      </div>
      <button className="submit">Create Account</button>
    </form>

    <div className="block-text">
      <p>By creating account, you agree to our</p>
      <Link to="/terms" className="redirect-links">
        Terms of Service
      </Link>
    </div>

  </div>
  );
};

