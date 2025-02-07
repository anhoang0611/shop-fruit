import React from 'react';
import './style.scss';
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineGlobal,
    AiOutlineMail,
} from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { formatter } from "../../../../utils/fomater"
const Header = () => {
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
                        LOGO
                    </div>
                    <div className='col-xl-6'>
                        MENU
                    </div>
                    <div className='col-xl-3'>
                        PHONE
                    </div>

                </div>

            </div>
        </>
    );
};

export default Header;
