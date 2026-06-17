import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const navigate = useNavigate();

  const validations = () => {
    const errorMessage = {};

    if (!formData.email.trim()) {
      errorMessage.email = "Email is required!";
    }

    if (!formData.password.trim()) {
      errorMessage.password = "Password is required!";
    }

    return errorMessage;
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const validErrors = validations();

    if (Object.keys(validErrors).length > 0) {
      setError(validErrors);
      return;
    }

    try {
      const response = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Successful");

      navigate("/home");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError({
      ...error,
      [name]: "",
    });
  };

  return (
    <div className="credentials-page">
      <h1>Login Page</h1>

      <p className="subtitle">
        Welcome Back 👋
      </p>

      <form onSubmit={submitHandler}>

        <input
          type="email"
          name="email"
          placeholder="Enter registered email..."
          value={formData.email}
          onChange={changeHandler}
        />

        {error.email && (
          <p style={{ color: "red" }}>
            {error.email}
          </p>
        )}

        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter password..."
          value={formData.password}
          onChange={changeHandler}
        />

        {error.password && (
          <p style={{ color: "red" }}>
            {error.password}
          </p>
        )}

        <br />

        <button type="submit">
          Login
        </button>

        <p className="register-link">
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </form>
    </div>
  );
};

export default Login;