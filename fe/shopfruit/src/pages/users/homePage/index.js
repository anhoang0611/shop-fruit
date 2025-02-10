//libraries
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import { formatter } from '../../../utils/formatter';
import './style.scss';
import { AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';
//categories images
import cam from '../../../assets/users/images/categories/cam1.jpg';
import tao from '../../../assets/users/images/categories/tao.jpg';
import buoi from '../../../assets/users/images/categories/buoi.jpg';
import le from '../../../assets/users/images/categories/le.jpg';
import nho from '../../../assets/users/images/categories/nho.jpg';
//featured products images
import thitbo from '../../../assets/users/images/features/thit-bo.jpg';
import chuoi from '../../../assets/users/images/features/chuoi.jpg';
import duahau from '../../../assets/users/images/features/dua-hau.jpg';
import khoaitay from '../../../assets/users/images/features/khoai-tay.jpg';
import oi from '../../../assets/users/images/features/oi.jpg';
//banner images
import banner1 from '../../../assets/users/images/banner/banner1.jpg';
import banner2 from '../../../assets/users/images/banner/banner2.jpg';




const Homepages = () => {
    //responsive 
    const responsive = {
        superLargeDesktop: {
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

    //slide items
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
    ];
    const featuredProducts = {
        all: {
            title: 'Toàn bộ',
            products: [
                {
                    img: thitbo,
                    name: 'Thịt bò nạc',
                    price: 20000,
                },
                {
                    img: chuoi,
                    name: 'Chuối',
                    price: 14000,
                },
                {
                    img: duahau,
                    name: 'Dưa hấu',
                    price: 70000,
                }, {

                    img: khoaitay,
                    name: 'Khoai tây',
                    price: 16000,
                },

                {
                    img: oi,
                    name: 'Ổi',
                    price: 12000,
                }

            ]
        },
        freshMeat: {
            title: 'Thịt tươi',
            products: [
                {
                    img: thitbo,
                    name: 'Thịt bò nạc',
                    price: 20000,
                }

            ]
        },
        fruits: {
            title: 'Trái cây',
            products: [
                {
                    img: chuoi,
                    name: 'Chuối',
                    price: 14000,
                },
                {
                    img: duahau,
                    name: 'Dưa hấu',
                    price: 70000,
                }, {

                    img: khoaitay,
                    name: 'Khoai tây',
                    price: 16000,
                },

                {
                    img: oi,
                    name: 'Ổi',
                    price: 12000,
                }
            ]
        }
    };

    const renderFeaturedProducts = (data) => {
        const tabLists = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index) => {
            tabLists.push(
                <Tab key={index} >{data[key].title}</Tab>
            )


            const tabPanel = [];

            data[key].products.forEach((product, prodIndex) => (
                tabPanel.push(
                    <div className='col-lg-3' key={prodIndex}>
                        <div className='featured-item'>
                            <div className='featured-item-img' style={{ backgroundImage: `url(${product.img})` }}>
                                <ul className='featured-item-img-hover'>
                                    <li>
                                        <AiOutlineEye />
                                    </li>
                                    <li>
                                        <AiOutlineShoppingCart />
                                    </li>
                                </ul>

                            </div>

                            <div className='featured-item-text'>
                                <h6>
                                    <Link to=''>{product.name}</Link>
                                </h6>
                                <h5>{formatter(product.price)}</h5>
                            </div>


                        </div>
                    </div>

                )
            ));
            tabPanels.push(tabPanel);
        });
        return (
            <Tabs>
                <TabList>
                    {tabLists}
                </TabList>
                {
                    tabPanels.map((item, index) => (
                        <TabPanel key={index}>
                            <div className='row'>
                                {item}

                            </div>
                        </TabPanel>

                    ))
                }
            </Tabs>
        )



    };


    return (
        <>
            {/* slide categories start */}
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
            {/* slide categories end */}

            {/* featured products start */}
            <div className='container'>
                <div className='featured'>
                    <div className='section-title'>
                        <h2>Sản phẩm nổi bật</h2>
                    </div>
                    {renderFeaturedProducts(featuredProducts)}
                </div>

            </div>
            {/* featured products end */}

            {/* banner start */}
            <div className='container'>
                <div className='banner'>
                    <div className='banner-img'>
                        <img src={banner1} alt='banner' />


                    </div>
                    <div className='banner-img'>
                        <img src={banner2} alt='banner' />


                    </div>

                </div>

            </div>

        </>

    )
}

export default Homepages;
