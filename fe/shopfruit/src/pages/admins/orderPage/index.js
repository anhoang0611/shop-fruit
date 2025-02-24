import React, { memo, useState } from "react";
import "./style.scss";
import { formatter } from "../../../utils/formatter";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";

const OrderAdPage = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const STATUS = {
    ORDERED: {
      id: "ORDERED",
      name: "Đã đặt",
      className: "orders-dropdown-item",
    },
    PREPARING: {
      id: "PREPARING",
      name: "Đang chuẩn bị",
      className: "orders-dropdown-item",
    },
    DELIVERED: {
      id: "DELIVERED",
      name: "Đã giao hàng",
      className: "orders-dropdown-item",
    },
    CANCELLED: {
      id: "CANCELLED",
      name: "Đã hủy",
      className: "orders-dropdown-item",
    },
  };

  const orders = [
    {
      id: 1,
      totalPrice: 100000,
      customer: "Nguyễn Văn A",
      date: "2/12/2025",
      status: "Đang giao hàng",
    },
    {
      id: 2,
      totalPrice: 300000,
      customer: "Nguyễn Văn B",
      date: "10/12/2025",
      status: "Đã giao hàng",
    },
  ];
  return (
    <div className="container">
      <div className="orders">
        <h2>Quản lý đơn hàng</h2>
        <div className="orders-content">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Mã đơn hàng</th>
                <th>Tổng tiền</th>
                <th>Khách hàng</th>
                <th>Ngày đặt hàng</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr key={i}>
                  <td>
                    <span>{order.id}</span>
                  </td>
                  <td>
                    <span>{formatter(order.totalPrice)}</span>
                  </td>
                  <td>
                    <span>{order.customer}</span>
                  </td>
                  <td>
                    <span>{new Date(order.date).toLocaleDateString()}</span>
                  </td>
                  <td>
                    <div className="orders-dropdown">
                      <button>
                        Đã đặt
                        <FaChevronDown />
                      </button>

                      {activeDropdown === orders.id && (
                        <div className="orders-dropdown-menu">
                          {Object.values(STATUS).map((status) => (
                            <button
                              className={status.className}
                              key={status.key}
                            >
                              {status.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="orders-footer">
          <div className="orders-pagination">
            <div className="orders-page-number">
              <button className="orders-page-btn">
                <FaChevronLeft />
              </button>
              <button className="orders-page-btn orders-page-btn--active">
                1
              </button>
              <button className="orders-page-btn">2</button>
              <button className="orders-page-btn">3</button>
              <button className="orders-page-btn">4</button>
              <button className="orders-page-btn">5</button>
              <button className="orders-page-btn">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(OrderAdPage);
