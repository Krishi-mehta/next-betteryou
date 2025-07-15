"use client";

import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
// import "./SignupPage.css";
import "../login/login.css";

function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState(null);
  const [serverType, setServerType] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // Password visibility toggle state
  const router = useRouter();

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setServerMessage(null);
  };

  const handleSignup = async () => {
    if (!validate()) return;

    try {
      const url = "/api/signup"; //simple route
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        setServerMessage(message);
        setServerType("success");
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || "An error occurred";
        setServerMessage(details);
        setServerType("error");
      } else {
        setServerMessage(message || "Signup failed");
        setServerType("error");
      }

      console.log(result);
    } catch (err) {
      console.error(err);
      setServerMessage("Something went wrong. Please try again.");
      //   setServerType("error");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-card-content">
          <h2 className="signup-title">Sign Up</h2>
          <form onSubmit={(e) => e.preventDefault()} className="signup-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="signup-input"
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="signup-input"
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}

            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="signup-input"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setPasswordVisible(!passwordVisible)}
                aria-label={passwordVisible ? "Hide password" : "Show password"}
              >
                <i
                  className={`fa ${
                    passwordVisible ? "fa-eye-slash" : "fa-eye"
                  }`}
                />
              </button>
            </div>
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}

            <button className="signup-button" onClick={handleSignup}>
              Sign Up
            </button>

            <span>
              Already have an account?{" "}
              <Link href="/login" className="link-button">
                Login
              </Link>
            </span>
          </form>

          {serverMessage && (
            <div
              className={`server-message ${
                serverType === "success" ? "success" : "error"
              }`}
            >
              {serverMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
