import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.scss';

import cam from '../../../assets/users/images/categories/cam1.jpg';
import tao from '../../../assets/users/images/categories/tao.jpg';
import buoi from '../../../assets/users/images/categories/buoi.jpg';
import le from '../../../assets/users/images/categories/le.jpg';
import nho from '../../../assets/users/images/categories/nho.jpg';


const Homepages = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const slideItems = [
        {
            bgImg: cam,
            name: 'Cam tươi',
        },
        {
            bgImg: tao,
            name: 'Táo',
        },
        {
            bgImg: buoi,
            name: 'Bưởi',
        },
        {
            bgImg: le,
            name: 'Lê',
        },
        {
            bgImg: nho,
            name: 'Nho',
        }
    ]
    return (
        <>
            <div className='container container-categories-slide'>
                <Carousel responsive={responsive} className='categories-slide'>
                    {
                        slideItems.map((item, index) => (
                            <div className='categories-slide-item'
                                style={{ backgroundImage: `url(${item.bgImg})` }}
                                key={index}
                            >

                                <p>{item.name}</p>

                            </div>
                        ))
                    }


                </Carousel>

            </div>

        </>
    )
}

export default Homepages;
