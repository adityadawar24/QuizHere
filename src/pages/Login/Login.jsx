import { Link, useNavigate } from "react-router-dom";
import React from "react"; 
import "./Login.css"; 
import { signInWithEmailAndPassword } from "firebase/auth"; 

import { db } from "../../FirebaseConfig"; 

export const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    const email = e.target.email.value; 
    const password = e.target.password.value; 

    signInWithEmailAndPassword(db, email, password).then((data) => { 
      console.log(data, "authData"); 
      setIsLoggedIn(true); 
      navigate("/"); 
    }); 
    e.target.reset(); 
  }; 

  return ( 
    <div className="main-container"> 
      <h1>Sign In</h1> 
      <form onSubmit={handleSubmit}> 
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
            placeholder="Enter Password" 
            required 
          /> 
        </div> 
        <div className="forgot-pass"> 
          <Link to="/forgot-password" className="redirect-links">Forgot Password?</Link> 
        </div> 
        <button className="submit">Sign In</button> 
      </form> 
    </div> 
  ); 
};
