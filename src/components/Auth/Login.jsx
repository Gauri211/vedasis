import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Store session in local storage
    const user = JSON.parse(localStorage.getItem("user"));
    // console.log(user[email]);
    // console.log(email === user.email, password===user.password)

    if(!email || !password) {
      setErrorMessage("Please enter the details");
      return;
    }

    if(!user){
      setErrorMessage("User not found");
    }
    else {
        if(user.email === email && user.password === password){
            localStorage.setItem("email", email);
            navigate("/details");
        } else {
        setErrorMessage("Invalid email or password.");
        return;
        }
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
}

export default Login;
