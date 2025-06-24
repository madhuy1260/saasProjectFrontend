import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center vh-100">
      <div className="login-card text-white p-5">
        <h2 className="text-center mb-4 fw-bold">Login</h2>

        <form>
          <div className="form-group mb-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control bg-transparent border-0 border-bottom text-white"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control bg-transparent border-0 border-bottom text-white"
              placeholder="Enter your password"
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
              />
              <label
                className="form-check-label text-white"
                htmlFor="rememberMe"
              >
                Remember Me
              </label>
            </div>
            <a href="#" className="text-white text-decoration-none">
              Forget Password
            </a>
          </div>

          <div className="text-center mb-3">
            <button
              type="submit"
              className="btn btn-light rounded-pill px-5 fw-bold"
            >
              Log in
            </button>
          </div>

          <p className="text-center">
            Don’t have an account?{" "}
            <a href="#" className="text-white fw-bold text-decoration-none">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
