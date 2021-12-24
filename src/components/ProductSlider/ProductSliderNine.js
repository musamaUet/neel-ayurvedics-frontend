import { useState } from "react";
import Link from "next/link";
import { IoIosFlash } from "react-icons/io";
import { Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { ProductGridWrapperFive } from "../ProductThumb";

const ProductSliderNine = ({ pera,title, category,categoryImage,categoryURL, products }) => {
  const [swiper, setSwiper] = useState(null);
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const params = {
    loop: false,
    slidesPerView: 4,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 5,
      },
      769: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 3,
      }
    }
  };

  return (
    <div className="product-slider-area space-pb--50">
      <div className="custom-container">
        <Row>
           
          <Col xl={12}>
            <div className="section-title section-title--style-two heading-s1 space-mb--10">
              <span>{pera}</span>
              <h4>{title}</h4>
              <Link href="/shop/grid-left-sidebar">
                <a className="text-default abs1">
                  {" "}
                   View All <IoIosFlash />
                </a>
              </Link>
            </div>
            <Row>
            <Col md={2} className="px-0 boxcolor1">
            <div className="sale-banner box4 px-0 mb-0 mb-3 mb-lg-0 box2">
            <img src={categoryImage} alt="Category_img1" />
              <span>{category}</span>
              <span><Link href={categoryURL}>
                <a className="hover-effect">
                 View All
                </a>
              </Link>
              </span>
            </div>
            </Col>
            <Col md={10} className="productcenter">
            <div className="product-slider-wrap newbox2 product-slider-wrap--custom-bullet">
              <Swiper {...params} getSwiper={setSwiper}>
                <ProductGridWrapperFive
                  products={products}
                  sliderClass="swiper-slide"
                  bottomSpace="space-mb--30"
                />
              </Swiper>
              <div className="slider-nav-wrapper">
                <button
                  className="swiper-button-prev ht-swiper-button-nav ht-swiper-button-nav--style-two"
                  onClick={goPrev}
                >
                  <i className="icon-arrow-left" />
                </button>
                <button
                  className="swiper-button-next ht-swiper-button-nav ht-swiper-button-nav--style-two"
                  onClick={goNext}
                >
                  <i className="icon-arrow-right" />
                </button>
              </div>
            </div>
            
            </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductSliderNine;
