import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";
import backimg from "../login/bgimg.jpg";

function SignupLogin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/signup`,
        { name, email, password }
      );

      alert(res.data.msg);
      navigate("/Home");

    } catch (err) {
      alert(err.response?.data?.msg || "Signup failed");
    }
  };

  const login = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        { name, password }
      );

      alert(res.data.msg);
      navigate("/Home");

    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="maincontainer">
        <h1 className="introline">Welcome to world of books!!! </h1>
        <div  className="auth-container"><h2>Signup / Login</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter email (signup only)"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <div className="btn-group">
        <button onClick={signup}>Sign Up</button>
        <button onClick={login}>Login</button>
      </div></div>
      
    </div>
  );
}

export default SignupLogin;
