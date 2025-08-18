import React from "react";
import "./Register.css"

export default function Register() {

  
  return (
     <div className="register-container">
      <h2>Register</h2>
      <form className="register-form">
        <div className="form-group">
        
          <input type="text" placeholder="Name" name="user_name" id="user_name" required />
        </div>

        <div className="form-group">
         
          <input type="email" placeholder="Email" name="email" id="email" required />
        </div>

        <div className="form-group">

          <input type="password" placeholder="Password" name="password" id="password" required />
        </div>

        <div className="form-group">
        
          <input type="password" placeholder="Confirm Password" name="confirm_password" id="confirm_password" required />
        </div>

        <button type="submit" className="registerBtn">Register</button>
      </form>
    </div>
  );
}
