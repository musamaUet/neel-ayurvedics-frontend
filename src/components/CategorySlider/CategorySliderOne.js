import { useState } from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";

const CategorySliderOne = ({ title, categorySliderData1 }) => {
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
  return (
    <div className="category-slider-area space-pb--50">
      <div className="custom-container">
        <Row>
          <Col xs={12}>
            <div className="category-overlap">
              <Row className="align-items-center">
                <Col lg={12}>
                  <div className="section-title section-title--style-two heading-s1 space-mb--10">
                    <span>SHOP BY</span>
                    <h4>{title}</h4>
                  </div>
                </Col>
                <Col lg={12} className="productcenter">
                  <div className="product-slider-wrap newbox product-slider-wrap--custom-bullet">
                    <Swiper {...params} getSwiper={setSwiper}>
                      {categorySliderData1 &&
                        categorySliderData1.map((single, key) => {
                          return (
                            <div className="item" key={key}>
                              <div className="categories-box">
                                <Link href={"/category/" + single?._id || ""}>
                                  <a>
                                    <img
                                      src={single.file_location}
                                      alt="Category_img1"
                                    />
                                    <span>{single.name}</span>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                    </Swiper>
                  </div>
                  <div className="slider-nav-wrapper">
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
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CategorySliderOne;
