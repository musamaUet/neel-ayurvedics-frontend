import { useState } from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";

const TestimonialSix = ({ testimonialDataSix }) => {
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
    <div className="testimonial-area testsix space-pb-50">
     <div className="container-fluid">
        <div className="product-slider-wrap newbox6 product-slider-wrap--custom-bullet">
              <Swiper {...params} getSwiper={setSwiper}>
                {testimonialDataSix &&
                  testimonialDataSix.map((single, key) => {
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

export default TestimonialSix;
