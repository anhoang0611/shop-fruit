import React from "react";
import Breadcrumb from "../../../pages/users/theme/breadcrumb";
import './style.scss';
import { formatter } from "../../../utils/formatter";
import Quantity from "../../../component/Quantity";
import { AiOutlineClose } from "react-icons/ai";
const ShoppingCartPage = () => {
  return(
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
                  <img  alt="Sản phẩm" className= 'table-cart-img'/>
                  <h4>SP1</h4>
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

    </div>
    </>
  );
};

export default ShoppingCartPage;
