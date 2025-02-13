import React from 'react';
import Breadcrumb from '../theme/breadcrumb';
import "./style.scss";
import { Link } from 'react-router-dom';
import { categories } from '../theme/header';
import { ROUTERS } from '../../../utils/router';
import thitbo from '../../../assets/users/images/features/thit-bo.jpg';
import chuoi from '../../../assets/users/images/features/chuoi.jpg';
import duahau from '../../../assets/users/images/features/dua-hau.jpg';
import khoaitay from '../../../assets/users/images/features/khoai-tay.jpg';
import oi from '../../../assets/users/images/features/oi.jpg';
import { ProductCard } from '../../../component';

const ProductPage = () => {

    const sort = [
        "Giá thấp đến cao",
        "Giá cao đến thấp",
        "Mới nhất",
        "Bán chạy nhất",
        "Đang giảm giá",
    ];
    const products = [
        {
            img: thitbo,
            name: 'Thịt bò',
            price: 100000,
        },
        {
            img: chuoi,
            name: 'Chuối',
            price: 130000,
        },
        {
            img: duahau,
            name: 'Dưa hấu',
            price: 20000,
        },
        {
            img: khoaitay,
            name: 'Khoai tây',
            price: 115000,
        }, {
            img: oi,
            name: 'Ổi',
            price: 150000,
        },
    ]

    return (
        <>
            <Breadcrumb name='Danh sách sản phẩm' />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='sidebar'>
                            <div className='sidebar-item'>
                                <h2>Tìm kiếm</h2>
                                <input type="text" />
                            </div>

                            <div className='sidebar-item'>
                                <h2>Mức giá</h2>
                                <div className='price-range-wrap'>

                                    <div>
                                        <p>Từ:</p>
                                        <input type="number" min={0} />
                                    </div>
                                    <div>
                                        <p>Đến:</p>
                                        <input type="number" max={0} />
                                    </div>

                                </div>
                            </div>

                            <div className='sidebar-item'>
                                <h2>Sắp xếp</h2>
                                <div className='tags'>
                                    {
                                        sort.map((item, index) => (
                                            <div className={`tag ${index === 0 ? 'active' : ''}`} key={index}>
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>


                            </div>

                            <div className='sidebar-item'>
                                <h2>Thể loại khác</h2>

                                <ul>
                                    {
                                        categories.map((item, index) => (
                                            <li key={index}>
                                                <Link to={ROUTERS.USER.PRODUCT}>
                                                    {item}
                                                </Link>
                                            </li>
                                        ))
                                    }


                                </ul>


                            </div>
                        </div>
                    </div>


                    <div className='col-lg-9'>
                        <div className='row'>
                            {
                                products.map((item, index) => (
                                    <div className='col-lg-3' key={index}>
                                        <ProductCard name={item.name} price={item.price} img={item.img} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage;
