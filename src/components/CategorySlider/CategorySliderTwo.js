import { useState } from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";

const CategorySliderTwo = ({ title, categorySliderData }) => {
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
    slidesPerView: 2,
    grabCursor: true,
    breakpoints: {
      1200: {
        slidesPerView: 8,
      },
      1024: {
        slidesPerView: 6,
      },
      769: {
        slidesPerView: 5,
      },
      576: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 3,
      },
    },
  };
  console.log(categorySliderData);
  return (
    <div className="category-slider-area space-pb--50">
      <div className="custom-container">
        <Row>
          <Col xs={12}>
            <Row>
              <Col md={12} className="productcenter">
                <div className="section-title section-title--style-two heading-s1 space-mb--10">
                  <span>SHOP BY</span>
                  <h4>{title}</h4>
                </div>

                <div className="header-slider-nav">
                  <button
                    className="swiper-button-prev ht-swiper-button-nav"
                    onClick={goPrev}
                  >
                    <i className="icon-arrow-left" />
                  </button>
                  <button
                    className="swiper-button-next ht-swiper-button-nav"
                    onClick={goNext}
                  >
                    <i className="icon-arrow-right" />
                  </button>
                </div>
              </Col>
            </Row>
            <div className="product-slider-wrap newbox product-slider-wrap--custom-bullet">
              <Swiper {...params} getSwiper={setSwiper}>
                {categorySliderData &&
                  categorySliderData.map((single, key) => {
                    return (
                      <div className="item" key={key}>
                        <div className="categories-box">
                          <Link href={`/disease/${single._id}`}>
                            <a className="cat2">
                              <img src={single?.file_location} alt="" />
                              <span>{single?.disease_name}</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </Swiper>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CategorySliderTwo;
