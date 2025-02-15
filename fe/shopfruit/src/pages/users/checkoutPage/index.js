import React from "react";
import Breadcrumb from "../../../pages/users/theme/breadcrumb";
import './style.scss';
import { formatter } from "../../../utils/formatter";

const CheckoutPage = () => {
  return(
  <>
      <Breadcrumb name='Thanh toán' />
      <div className='container'>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="checkout-input">
              <label >
                Họ và tên: <span className="required">*</span>
              </label>
              <input type="text" placeholder="Nhập họ và tên" />


            </div>

            <div className="checkout-input">
              <label >
                Địa chỉ: <span className="required">*</span>
              </label>
              <input type="text" placeholder="Nhập địa chỉ" />
            </div>

            <div className="checkout-input-group">
              <div className="checkout-input">
                <label >
                  Số điện thoại: <span className="required">*</span>
                </label>
                <input type="text" placeholder="Nhập số điện thoại" />
              </div>

              <div className="checkout-input">
                <label >
                  Email: <span className="required">*</span>
                </label>
                <input type="text" placeholder="Nhập email" />
              </div>
            </div>

            <div className="checkout-input">
              <label >
                Ghi chú:
              </label>
              <textarea rows={15} placeholder="Nhập ghi chú" />
            </div>
            

          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="checkout-order">
              <div className="checkout-order-header">
                <h3>Đơn hàng</h3>
              </div>
              <ul>
                <li>
                  <span>Sản phẩm 1</span>
                  <b>{formatter(100000)} (1)</b>
                </li>
                <li>
                  <span>Sản phẩm 2</span>
                  <b>{formatter(30000)} (3)</b>
                </li>
                <li>
                  <span>Sản phẩm 3</span>
                  <b>{formatter(55000)} (2)</b>
                </li>
                <li>
                  <span>Sản phẩm 4</span>
                  <b>{formatter(66000)} (6)</b>
                </li>
                <li>
                  <h4>Mã giảm giá</h4>
                  <b>TYYU555</b>
                </li>
                <li className="checkout-order-subtotal">
                  <h3>Tổng tiền</h3>
                  <b>{formatter(251000)}</b>
                </li>

              </ul>
              <button type="submit" className="button-submit">Đặt hàng</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
