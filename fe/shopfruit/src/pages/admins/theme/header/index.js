import React, { memo } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ROUTERS } from "../../../../utils/router";
import { AiOutlineShoppingCart, AiOutlineLogout } from "react-icons/ai";
import "./style.scss";

const HeaderAd = ({ children, ...props }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const navItem = [
    {
      path: ROUTERS.ADMIN.ORDER,
      onClick: () => {
        navigate(ROUTERS.ADMIN.ORDER);
      },
      label: "Đơn hàng",
      icon: <AiOutlineShoppingCart />,
    },
    {
      path: ROUTERS.ADMIN.LOGOUT,
      onClick: () => {
        navigate(ROUTERS.ADMIN.LOGOUT);
      },
      label: "Đăng xuất",
      icon: <AiOutlineLogout />,
    },
  ];
  return (
    <div className="admin-header container" {...props}>
      <div className="admin-header-nav">
        {navItem.map(({ path, onClick, label, icon }) => (
          <div
            className={`admin-header-nav-item ${
              location.pathname.includes(path)
                ? "admin-header-nav-item--active"
                : ""
            }`}
            key={path}
            onClick={onClick}
          >
            <span className="admin-header-nav-icon">{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(HeaderAd);
