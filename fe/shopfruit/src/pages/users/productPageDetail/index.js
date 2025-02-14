import React from 'react';
import Breadcrumb from '../theme/breadcrumb';
import "./style.scss";
import buoi from "../../../assets/users/images/categories/buoi.jpg";
import buoi2 from "../../../assets/users/images/categories/buoi2.jpg";
import buoi3 from "../../../assets/users/images/categories/buoi3.jpg";
import { AiOutlineEye, AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { formatter } from "../../../utils/formatter";
const ProductPageDetail = () => {

    const img = [buoi, buoi2, buoi3];
    return (
        <>
            <Breadcrumb name='Chi tiết sản phẩm' />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 product-detail-pic'>

                        <img src={buoi} alt="product-pic" />

                        <div className='main'>
                            {
                                img.map((item, index) => (
                                    <img src={item} alt="product-pic" key={index} />
                                ))
                            }
                        </div>
                    </div>


                    <div className='col-lg-6 product-detail-text'>
                        <h2>Trái cây</h2>
                        <div className='seen-icon'>
                            <AiOutlineEye />
                            {`10 (lượt xem)`}
                        </div>
                        <h3>{formatter(100000)}</h3>
                        <p>
                            FuJi Mart là một cửa hàng nông sảnbán lẻ chuyên cung cấp các sản phẩm nông nghiệp tươi sống và chất lượng cao. Các sản phẩm thường bao gồm rau củ quả, trái cây, thịt, trứng, sữa và các sản phẩm chế biến từ nông sản. Ngoài ra, cửa hàng cũng có thể cung cấp các sản phẩm hữu cơ và không chứa hóa chất, đáp ứng nhu cầu ngày càng cao của người tiêu dùng về thực phẩm sạch và bền vững.
                        </p>

                        <ul>
                            <li>
                                <b>Tình trạng: </b><span>Còn hàng</span>
                            </li>
                            <li>
                                <b>Số lượng: </b><span>20</span>
                            </li>
                            <li>
                                <b>Chia sẻ: </b>{" "}
                                <span>
                                    <AiOutlineFacebook />
                                    <AiOutlineTwitter />
                                    <AiOutlineInstagram />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPageDetail;
