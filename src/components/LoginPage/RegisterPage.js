import React from "react";
import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div className="register-wrapper">
      <div className="register-form-container">
        <h2 className="register-title">Register</h2>

        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Username</label>
          <input type="text" placeholder="Choose a username" required />

          <label>Password</label>
          <input type="password" placeholder="Create a password" required />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" required />

          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms"> I agree to the Terms and Conditions</label>
          </div>

          <button type="submit">Sign Up</button>
        </form>

        <p className="login-redirect">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
