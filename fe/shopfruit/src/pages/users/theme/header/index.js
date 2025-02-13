import React, { useEffect } from 'react';
import './style.scss';
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineGlobal,
    AiOutlineMail,
    AiOutlineShoppingCart,
    AiOutlineMenu,
    AiOutlinePhone,
    AiOutlineDownCircle,
    AiOutlineUpCircle,
} from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';
import { formatter } from "../../../../utils/formatter";
import { useState } from 'react';
import { ROUTERS } from '../../../../utils/router';
import { MdEmail } from 'react-icons/md';

const Header = () => {
    const location = useLocation();
    const [isShowHumbergerMenu, setIsShowHumbergerMenu] = useState(true);
    const [isHome, setIsHome] = useState(location.pathname.length <= 1);
    const [isShowCategories, setIsShowCategories] = useState(isHome);




    //toggle hamberger menu nav
    const handleToggleSubmenu = (index) => {
        const newMenu = JSON.parse(JSON.stringify(menu));
        newMenu[index].isShowSubmenu = !newMenu[index].isShowSubmenu;
        setMenu(newMenu);
    };




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

    const categories = [
        "Hoa quả",
        "Thịt tươi",
        "Thức ăn nhanh",

    ];

    useEffect(
        () => {
            const isHome = location.pathname.length <= 1;
            setIsHome(isHome);

            setIsShowCategories(isHome);

        }, [location]
    )
    return (
        <>
            <div className={`humberger-menu-overlay ${isShowHumbergerMenu ? "active" : ""}`} onClick={() => { setIsShowHumbergerMenu(false) }} >

            </div>
            <div className={`humberger-menu-wrapper ${isShowHumbergerMenu ? 'show' : ''}`}>
                <div className='header-logo' >
                    <h1>Fuji Mart</h1>
                </div>
                {/* icon Shopping Cart */}
                <div className='humberger-menu-cart'>
                    <ul>
                        <li>
                            <Link to='#'>
                                <AiOutlineShoppingCart />
                                <span>5</span>
                            </Link>

                        </li>
                    </ul>
                    <div className='header-cart-price'>
                        Giỏ hàng: <span>{formatter(1000000)}</span>

                    </div>
                </div>
                {/* icon Đăng nhập */}
                <div className='humberger-menu-widget'>
                    <div className='header-top-right-auth'>
                        <Link to='#'>
                            <BiUser />
                            <span>Đăng nhập</span>
                        </Link>
                    </div>

                </div>
                {/* dropdown Sản phẩm  */}
                <div className='humberger-menu-nav'>
                    <ul>
                        {
                            menu?.map((menuItem, menuKey) => {
                                return (
                                    <li key={menuKey} to={menuItem.path}>
                                        <Link to={menuItem.path} onClick={() => {
                                            handleToggleSubmenu(menuKey);

                                        }}
                                        >
                                            {menuItem.name}
                                            {
                                                menuItem.child && (menuItem.isShowSubmenu ? <AiOutlineDownCircle /> : <AiOutlineUpCircle />)
                                            }
                                        </Link>
                                        {/* dropdown khi click */}
                                        {menuItem.child && menuItem.isShowSubmenu && (
                                            <ul className={`header-menu-dropdown-tablet ${menuItem.isShowSubmenu ? "show-submenu" : ""}`}>
                                                {menuItem.child.map((childItem, childKey) => (

                                                    <li key={`${menuKey}-${childKey}`}>
                                                        <Link
                                                            to={childItem.path}

                                                        >
                                                            {childItem.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                    </li>);
                            })
                        }


                    </ul>

                </div>

                {/* icon Fb, ins,... */}
                <div className='header-top-right-social'>
                    <Link to=''>
                        <AiOutlineFacebook />
                    </Link>
                    <Link to=''>
                        <AiOutlineInstagram />
                    </Link>
                    <Link to=''>
                        <AiOutlineLinkedin />
                    </Link>
                    <Link to=''>
                        <AiOutlineGlobal />
                    </Link>
                </div>
                {/* email, bannner */}
                <div className='humberger-menu-contact'>
                    <ul>
                        <li >
                            <MdEmail />
                            hel@gmail.com

                        </li>
                        <li>Miễn phí giao hàng</li>
                    </ul>
                </div>
            </div>

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
                    <div className='col-lg-3'>

                        <div className='header-logo'>
                            <h1>Fuji Mart</h1>

                        </div>
                    </div>
                    <div className='col-lg-6'>

                        <nav className='header-menu'>
                            <ul>
                                {
                                    menu.map((menu, menuKey) => (
                                        <li key={menuKey} className={location.pathname === menu.path ? 'active' : ''}>
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
                    <div className='col-lg-3'>
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

                        <div className='hamberger-menu'>
                            <AiOutlineMenu onClick={() => { setIsShowHumbergerMenu(!isShowHumbergerMenu) }} />
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
                                {categories.map((category, key) => (
                                    <li key={key}>
                                        <Link to={ROUTERS.USER.PRODUCT}>{category}</Link>
                                    </li>

                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='col-lg-9 search-container'>
                        <div className='search '>
                            <div className='search-form'>
                                <form >
                                    <input type='text' name='' value='' placeholder='Bạn cần tìm gì?' />
                                    <button type='submit' className='site-btn'>
                                        Tìm kiếm
                                    </button>

                                </form>

                            </div>

                            <div className='search-phone'>
                                <div className='search-phone-icon'>
                                    <AiOutlinePhone />
                                </div>
                                <div className='search-phone-text'>
                                    <p>098765322</p>
                                    <span>Hỗ trợ 24/7</span>
                                </div>

                            </div>

                            {
                                isHome && (
                                    <div className='item'>
                                        <div className='text'>
                                            <span>Trái cây tươi</span>
                                            <h2>
                                                Rau quả <br />
                                                sạch 100%
                                            </h2>
                                            <p>Miễn phí giao hàng tận nơi</p>
                                            <Link to='#' className='primary-btn'>Mua ngay</Link>


                                        </div>

                                    </div>
                                )
                            }


                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Header;
