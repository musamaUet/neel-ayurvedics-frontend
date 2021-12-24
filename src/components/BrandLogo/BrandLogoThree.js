import { useState } from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";

const BrandLogoThree = ({ title, brandLogoData }) => {
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
    <div className="brand-logo-area space-pb--50">
      <div className="custom-container">
        <Row>
          <Col md={12} className="productcenter">
            <div className="section-title section-title--style-two heading-s1 space-mb--10">
              <span>EXCLUSIVE ZONE</span>
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
        <Row>
          <Col md={12}>

            <div className="product-slider-wrap newbox product-slider-wrap--custom-bullet">
              <Swiper {...params} getSwiper={setSwiper}>
                {brandLogoData &&
                  brandLogoData.slice(4).map((single, key) => {
                    return (
                      <div className="item" key={key}>
                        <div className="cl-logo">
                          <Link href={"/brand/" + single._id || ""}>
                            <a>
                              <img src={single.file_location} alt="cl_logo" />
                              <p>{single.name}</p>
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

export default BrandLogoThree;
