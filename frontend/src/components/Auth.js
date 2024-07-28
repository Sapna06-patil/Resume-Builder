// // import React, { useState } from "react";
// // import axios from "axios";

// // const Login = () => {
// //   const [formData, setFormData] = useState({
// //     email: "",
// //     password: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const { data } = await axios.post("/api/users/login", formData);
// //     if (data.success) {
// //       localStorage.setItem("token", data.token);
// //       alert("Login successful");
// //     } else {
// //       alert("Login failed");
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input
// //         type="email"
// //         name="email"
// //         placeholder="Email"
// //         onChange={handleChange}
// //       />
// //       <input
// //         type="password"
// //         name="password"
// //         placeholder="Password"
// //         onChange={handleChange}
// //       />
// //       <button type="submit">Login</button>
// //     </form>
// //   );
// // };

// // export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import "./Login.css"; // Make sure to import the CSS file

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { data } = await axios.post("/api/users/login", formData);
//     if (data.success) {
//       localStorage.setItem("token", data.token);
//       alert("Login successful");
//     } else {
//       alert("Login failed");
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           value={formData.email}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           value={formData.password}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useContext } from "react";
import axios from "axios";
import "./Auth.css";
import { AuthContext } from "../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [formType, setFormType] = useState("login"); // "login" or "register"
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post("/api/users/login", loginData);
    console.log(data);
    if (data.success) {
      localStorage.setItem("token", data.token);
      alert("Login successful");
      navigate("/edit-profile");
    } else {
      alert("Login failed");
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("/api/users/register", registerData);
    if (data.success) {
      localStorage.setItem("token", data.token);
      alert("Registration successful");
      navigate("/login");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <button
          className={`auth-tab ${formType === "login" ? "active" : ""}`}
          onClick={() => setFormType("login")}
        >
          Login
        </button>
        <button
          className={`auth-tab ${formType === "register" ? "active" : ""}`}
          onClick={() => setFormType("register")}
        >
          Register
        </button>
      </div>
      {formType === "login" && (
        <form className="auth-form" onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleLoginChange}
            value={loginData.email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleLoginChange}
            value={loginData.password}
            required
          />
          <button type="submit">Login</button>
        </form>
      )}
      {formType === "register" && (
        <form className="auth-form" onSubmit={handleRegisterSubmit}>
          <h2>Register</h2>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleRegisterChange}
            value={registerData.username}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleRegisterChange}
            value={registerData.email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleRegisterChange}
            value={registerData.password}
            required
          />
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default Auth;
