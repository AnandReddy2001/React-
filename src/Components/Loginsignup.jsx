import React from "react";
import "./Loginsignup.css";
import user_icon from "../Assets/user.png";
import email_icon from "../Assets/mail.png";
import password_icon from "../Assets/password.png";

const Loginsignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">Forgot Passwrod</div>
      <div className="submit-container">
        <div className="submit"> Sign Up</div>
        <div className="submit"> LogIn</div>
      </div>
    </div>
  );
};
export default Loginsignup;
