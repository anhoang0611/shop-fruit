import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
import { ROUTERS } from './../../../../utils/router';
import {memo} from 'react';

const Breadcrumb = (props) => {
    return (
        <div className='breadcrumb'>
            <div className='breadcrumb-text'>
                <h2>
                    FuJi SHOP
                </h2>
                <div className='breadcrumb-option'>
                    <ul>
                        <li className='link'>
                            <Link to={ROUTERS.USER.HOME}> Trang chủ</Link>
                        </li>
                        <li >
                            {props.name}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default memo(Breadcrumb);
