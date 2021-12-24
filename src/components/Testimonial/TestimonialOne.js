import { useState } from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";

const TestimonialOne = ({title, testimonialData }) => {
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
    slidesPerView: 3,
    grabCursor: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false
    // },
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      769: {
        slidesPerView: 3
      },
      576: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };
   
  return (
    <div className="testimonial-area space-pb--50">
     <div className="custom-container">
      <Row>
          <Col md={12} className="productcenter">
            <div className="section-title section-title--style-two heading-s1 space-mb--10">
              <span>JUST FOR YOU</span>
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
        <div className="product-slider-wrap newbox3 product-slider-wrap--custom-bullet">
              <Swiper {...params} getSwiper={setSwiper}>
                {testimonialData &&
                  testimonialData.map((single, key) => {
                    return (
                      <div className="img1" key={key}>
                      <Link href={single.url}>
                          <a>
                            <img src={single.image} alt="user_img1" />
                            </a>
                      </Link>
                      </div>
                    );
                  })}
              </Swiper>
              </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
