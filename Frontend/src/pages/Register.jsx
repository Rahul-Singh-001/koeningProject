import { useState } from "react";
import api from "../api/api";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password
    ) {
      setError("All fields are required");
      return;
    }

    try {
      await api.post(
        "/auth/register",
        formData
      );

      alert("Registration Successful");

      navigate("/");

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Registration Failed"
      );

    }
  };

  return (
    <div className="credentials-page">

      <h1>Register</h1>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      <form onSubmit={submitHandler}>

        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />

        <select
          value={formData.role}
          onChange={(e) =>
            setFormData({
              ...formData,
              role: e.target.value,
            })
          }
        >
          <option value="student">
            Student
          </option>

          <option value="faculty">
            Faculty
          </option>

          <option value="admin">
            Admin
          </option>
        </select>

        <button type="submit">
          Register
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/">
            Login
          </Link>
        </p>

      </form>
    </div>
  );
}

export default Register;