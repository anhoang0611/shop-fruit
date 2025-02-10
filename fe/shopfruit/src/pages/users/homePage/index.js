//libraries
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import './style.scss';
//categories images
import cam from '../../../assets/users/images/categories/cam1.jpg';
import tao from '../../../assets/users/images/categories/tao.jpg';
import buoi from '../../../assets/users/images/categories/buoi.jpg';
import le from '../../../assets/users/images/categories/le.jpg';
import nho from '../../../assets/users/images/categories/nho.jpg';
//featured products images
import thitbo from '../../../assets/users/images/features/thit-bo.jpg';
import chuoi from '../../../assets/users/images/features/chuoi.jpg';



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
        }
    };

    const renderFeaturedProducts = (data) => {
        const tabLists = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index) => {
            tabLists.push(
                <Tab key={index}>{data[key].title}</Tab>
            )


            const tabPanel = [];

            data[key].products.forEach((product, prodIndex) => (
                tabPanel.push(
                    <div key={prodIndex}>{product.name}</div>
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

        </>

    )
}

export default Homepages;
