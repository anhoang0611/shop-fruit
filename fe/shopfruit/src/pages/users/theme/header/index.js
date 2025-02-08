import React from 'react';
import './style.scss';
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineGlobal,
    AiOutlineMail,
    AiOutlineShoppingCart,
    AiOutlineMenu,
} from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';
import { formatter } from "../../../../utils/fomater"
import { useState } from 'react';
import { ROUTERS } from '../../../../utils/router';

const Header = () => {
    const location = useLocation();
    const [isShowCategories, setIsShowCategories] = useState(true);
    const [menu, setMenu] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCT,
        },
        {
            name: "Sản phẩm",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    name: "Quả",
                    path: "",
                },
                {
                    name: "Trái cây",
                    path: "",
                },
                {
                    name: "Thực phẩm",
                    path: "",
                }
            ]
        },
        {
            name: "Bài viết",
            path: "",
        },
        {
            name: "Liên hệ",
            path: "",
        }

    ]);

    return (
        <>
            <div className='header_top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 header_top_left'>
                            <ul>
                                <li>
                                    <AiOutlineMail />
                                    hel@gmail.com
                                </li>
                                <li>
                                    Miễn phí đơn từ {formatter(1000000)}
                                </li>
                            </ul>
                        </div>
                        <div className='col-6 header_top_right'>
                            <ul>
                                <li>
                                    <Link to=''>
                                        <AiOutlineFacebook />

                                    </Link>
                                </li>
                                <li>
                                    <Link to=''>
                                        <AiOutlineInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to=''>
                                        <AiOutlineLinkedin />
                                    </Link>
                                </li>
                                <li>
                                    <Link to=''>
                                        <AiOutlineGlobal />

                                    </Link>
                                </li>
                                <li>
                                    <Link to=''>
                                        <FiUser />
                                    </Link>
                                    <span>Đăng nhập</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3'>

                        <div className='header-logo'>
                            <h1>Fuji Mart</h1>

                        </div>
                    </div>
                    <div className='col-xl-6'>

                        <nav className='header-menu'>
                            <ul>
                                {
                                    menu?.map((menu, menuKey) => (
                                        <li key={menuKey} className={location.pathname === menu?.path ? 'active' : ''}>
                                            <Link to={menu.path}>{menu.name}</Link>
                                            {
                                                menu.child && (
                                                    <ul className='header-menu-dropdown'>
                                                        {
                                                            menu.child.map((childItem, childKey) => (
                                                                <li key={`${menuKey}-${childKey}`}>
                                                                    <Link to={childItem.path}>{childItem.name}</Link>
                                                                </li>

                                                            ))
                                                        }

                                                    </ul>
                                                )
                                            }
                                        </li>


                                    ))
                                }

                            </ul>

                        </nav>

                    </div>
                    <div className='col-xl-3'>
                        <div className='header-cart'>
                            <div className='header-cart-price'>
                                <span>{formatter(1000000)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to='#'>
                                        <AiOutlineShoppingCart /> <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>

            <div className='container'>
                <div className='row categories-container'>
                    <div className='col-lg-3 categories'>
                        <div className='categories-all' onClick={() => setIsShowCategories(!isShowCategories)}>
                            <AiOutlineMenu />
                            Danh sách sản phẩm
                        </div>
                        {isShowCategories && (
                            <ul className={isShowCategories ? '' : 'hidden'}>
                                <li>
                                    <Link to='#'> Tao</Link>
                                </li>
                                <li>
                                    <Link to='#'> Lê</Link>
                                </li>
                                <li>
                                    <Link to='#'> Chuối</Link>
                                </li>
                                <li>
                                    <Link to='#'> Dưa</Link>
                                </li>
                                <li>
                                    <Link to='#'> Lê</Link>
                                </li>
                                <li>
                                    <Link to='#'> Tao</Link>
                                </li>
                            </ul>
                        )}
                    </div>
                    <div className='col-lg-9'>Phai</div>
                </div>

            </div>
        </>
    );
};

export default Header;
