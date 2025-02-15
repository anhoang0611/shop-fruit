import React from "react";
import Breadcrumb from "../../../pages/users/theme/breadcrumb";
import './style.scss';
import { formatter } from "../../../utils/formatter";
import Quantity from "../../../component/Quantity";
import { AiOutlineClose } from "react-icons/ai";
import buoi from '../../../assets/users/images/categories/buoi.jpg';
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";

const ShoppingCartPage = () => {

  const navigate = useNavigate();
  
  
  return (
  <>
      <Breadcrumb name='Giỏ hàng' />
    <div className='container'>
      <div className="table-cart">
        <table>
          <thead>
            <tr>
              <th>Tên</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th/>
            </tr>
            </thead>
            
            <tbody>
              <tr>
                <td className="shopping-cart-item">
                  <img src={buoi} alt="Sản phẩm" className= 'table-cart-img'/>
                  {/* <h4>SP1</h4> */}
                </td>
                
                <td>{formatter(100000)}</td>
                <td><Quantity quantity='2' hasAddToCart={false} /></td>
                <td>{formatter(200000)}</td>

                <td className="icon-close">
                  <AiOutlineClose />
                </td>
              </tr>

            </tbody>
      </table>
      </div>

        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="shopping-continue" >
              <h3>Mã giảm giá</h3>
              <div className="shopping-discount">
                <input type="text" placeholder="Nhập mã giảm giá" />
                <button className="button-submit">Áp dụng</button>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="shopping-checkout">
              <h2>Tổng đơn</h2>
              <ul>
                <li>
                  Số lượng: <span>2</span>
                </li>
                <li>
                  Thành tiền: <span>{formatter(200000)}</span>
                </li>
              </ul>
              <button type="submit" className="button-submit" onClick={() => navigate(ROUTERS.USER.CHECKOUT) }>
                Thanh toán
              </button>

              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default ShoppingCartPage;
