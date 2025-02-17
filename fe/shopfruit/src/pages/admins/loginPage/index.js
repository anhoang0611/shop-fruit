import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";
const LoginAdPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(ROUTERS.ADMIN.ORDER);
  };
  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-title">Đăng nhập</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label htmlFor="username" className="login-label">
              Username
            </label>
            <input type="text" id="username" required />
          </div>

          <div className="login-form-group">
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input type="password" id="password" required />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdPage;
