//libraries
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "./style.scss";
import { featuredProducts } from "../../../utils/common";
//categories images
import cam from "../../../assets/users/images/categories/cam1.jpg";
import tao from "../../../assets/users/images/categories/tao.jpg";
import buoi from "../../../assets/users/images/categories/buoi.jpg";
import le from "../../../assets/users/images/categories/le.jpg";
import nho from "../../../assets/users/images/categories/nho.jpg";

//banner images
import banner1 from "../../../assets/users/images/banner/banner1.jpg";
import banner2 from "../../../assets/users/images/banner/banner2.jpg";

import { ProductCard } from "../../../component";

const Homepages = () => {
  //responsive
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
  };

  //slide items
  const slideItems = [
    {
      bgImg: cam,

      name: "Cam tươi",
    },
    {
      bgImg: tao,
      name: "Táo",
    },
    {
      bgImg: buoi,
      name: "Bưởi",
    },
    {
      bgImg: le,
      name: "Lê",
    },
    {
      bgImg: nho,
      name: "Nho",
    },
  ];

  const renderFeaturedProducts = (data) => {
    const tabLists = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabLists.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel = [];

      data[key].products.forEach((product, prodIndex) =>
        tabPanel.push(
          <div className="col-lg-3" key={prodIndex}>
            <ProductCard
              name={product.name}
              price={product.price}
              img={product.img}
            />
          </div>
        )
      );
      tabPanels.push(tabPanel);
    });
    return (
      <Tabs>
        <TabList>{tabLists}</TabList>
        {tabPanels.map((item, index) => (
          <TabPanel key={index}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };

  return (
    <>
      {/* slide categories start */}
      <div className="container container-categories-slide">
        <Carousel responsive={responsive} className="categories-slide">
          {slideItems.map((item, index) => (
            <div
              className="categories-slide-item"
              style={{ backgroundImage: `url(${item.bgImg})` }}
              key={index}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/* slide categories end */}

      {/* featured products start */}
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeaturedProducts(featuredProducts)}
        </div>
      </div>
      {/* featured products end */}

      {/* banner start */}
      <div className="container">
        <div className="banner">
          <div className="banner-img">
            <img src={banner1} alt="banner1" />
          </div>
          <div className="banner-img">
            <img src={banner2} alt="banner2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepages;
