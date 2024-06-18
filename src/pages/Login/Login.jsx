import { Link, useNavigate } from "react-router-dom";
import React from "react"; 
import "./Login.css"; 
import { signInWithEmailAndPassword } from "firebase/auth"; // Import function to sign in with email and password from Firebase auth

import { db } from "../../FirebaseConfig"; // Import Firebase configuration

export const Login = () => {
  const navigate = useNavigate(); // useNavigate hook to programmatically navigate

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value; // Get email value from the form
    const password = e.target.password.value; // Get password value from the form
    // Firebase function to sign in with email and password
    signInWithEmailAndPassword(db, email, password)
      .then((data) => {
        console.log(data, "authData"); // Log the authentication data
        navigate("/dashboard"); // Navigate to the dashboard page on successful login
      })
      .catch((err) => {
        alert(err.code); // Show an alert with the error code on failure
      });
    e.target.reset(); // Reset the form fields
  };

  return (
    <div className="main-container login-page"> {/* Main container for the login page */}
      <h1>Sign In</h1> {/* Heading for the login page */}
      <div className="flex-text"> {/* Container for the redirect link */}
        <p className="des-top">New to Our Product?</p> {/* Text prompting user to create an account */}
        <Link to="/signup" className="redirect-links"> {/* Link to the registration page */}
          Create an Account
        </Link>
      </div>

      <form onSubmit={(e) => handleSubmit(e)}> {/* Form submission handled by handleSubmit function */}
        <div className="email-block"> {/* Container for the email input */}
          <label>Email</label> {/* Label for email input */}
          <input
            name="email"
            type="email"
            className="block-style"
            placeholder="Enter Email Address"
            required
          />
        </div>

        <div className="pass-block"> {/* Container for the password input */}
          <label>Password</label> {/* Label for password input */}
          <input
            name="password"
            type="password"
            className="block-style"
            placeholder="Create Password"
            required
          />
        </div>

        <div className="signin-block"> {/* Container for the "Keep me signed in" checkbox */}
          <label>
            <input type="checkbox" />
            Keep me signed in
          </label>
        </div>
        <button className="submit">Sign In</button> {/* Submit button for the form */}
      </form>
      <hr /> {/* Horizontal line for visual separation */}
    </div>
  );
};
