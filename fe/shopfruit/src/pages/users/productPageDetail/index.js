import React from 'react';
import Breadcrumb from '../theme/breadcrumb';
import "./style.scss";
import buoi from "../../../assets/users/images/categories/buoi.jpg";
import buoi2 from "../../../assets/users/images/categories/buoi2.jpg";
import buoi3 from "../../../assets/users/images/categories/buoi3.jpg";
import { AiOutlineEye, AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { formatter } from "../../../utils/formatter";
import { ProductCard } from '../../../component';
import { featuredProducts } from '../../../utils/common';
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

                <div className='product-detail-tab'>
                    <h4>Thông tin chi tiết</h4>
                    <div>
                        <ul>
                            <li>
                                <p>
                                    Rau củ chứa rất nhiều vitamin và chất dinh dưỡng nên mang đến
                                    rất nhiều lợi ích cho sức khỏe con người.&nbsp;
                                </p>
                            </li>
                            <li>
                                <p>Hỗ trợ giảm cân</p>
                            </li>
                            <li>
                                <p>
                                    Giảm nguy cơ mắc các bệnh về tim mạch, béo phì và cả ung thư
                                </p>
                            </li>
                            <li>
                                <p>Tăng cường sức đề kháng của cơ thể</p>
                            </li>
                            <li>
                                <p>Cải thiện thị lực</p>
                            </li>
                            <li>
                                <p>Điều hòa đường huyết</p>
                            </li>
                            <li>
                                <p>Giảm cholesterol trong máu</p>
                            </li>
                            <li>
                                <p>Điều hòa huyết áp</p>
                            </li>
                        </ul>
                        <p>
                            <br />
                            <strong>Cách chọn rau củ tươi ngon</strong>
                        </p>
                        <ul>
                            <li>
                                <p>
                                    Dựa vào hình dáng bên ngoài: Nên ưu tiên chọn các loại rau củ
                                    có phần vỏ không có các vết sâu, cuống lá không bị nhũn, thâm
                                    đen. Tránh chọn những loại quả có vẻ ngoài to tròn, căng lớn,
                                    bởi đây có thể là những quả đã bị tiêm thuốc, không an toàn
                                    cho sức khỏe.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Dựa vào màu sắc: Màu sắc của các loại rau củ thường tươi mới,
                                    không có các vết xước, héo hay quá đậm màu. Các loại củ có màu
                                    quá xanh hoặc quá bóng sẽ không hẳn là an toàn cho sức khỏe
                                    người dùng.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Dựa vào mùi hương: Mùi hương tự nhiên của các loại rau củ sẽ
                                    là mùi đặc trưng theo từng loại chứ không phải là mùi hắc,
                                    nồng khó chịu. Nếu các loại củ bạn đang chọn có mùi hóa chất
                                    hãy ngưng sử dụng ngay.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Dựa vào cảm nhận khi cầm: Những loại củ quả cầm chắc tay, kích
                                    thước vừa phải, không quá to sẽ thường ngon hơn những loại to
                                    lớn nhưng khối lượng nhẹ. Một số loại rau củ bạn chỉ nên chọn
                                    những quả nhỏ, đều tay sẽ ngon hơn.
                                </p>
                            </li>
                        </ul>
                    </div>


                </div>
                <div className='section-title'>
                    <h2>Sản phẩm tương tự</h2>

                </div>
                <div className='row'>
                    {
                        featuredProducts.all.products.map((item, index) => (
                            <div key={index} className='col-lg-3 col-md-4 col-sm-6'>
                                <ProductCard img={item.img} name={item.name} price={item.price} />
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default ProductPageDetail;
