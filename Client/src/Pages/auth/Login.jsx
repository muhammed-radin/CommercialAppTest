import React from "react";
import "./Login.css"

export default function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
         
          <input type="email" placeholder="Email" name="email" id="email" required />
        </div>
        <div className="form-group">
          
          <input type="password" placeholder="Password" name="password" id="password" required />
        </div>
        <button type="submit" className="loginBtn">Login</button>
      </form>
    </div>
  );
}
