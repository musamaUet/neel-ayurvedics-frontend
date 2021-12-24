import { useState } from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { FaCalendarAlt } from "react-icons/fa";

const TestimonialFour = ({title, testimonialDataFour }) => {
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
               <span>New</span>
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
        <div className="blog-slider-wrap newbox5 blog-slider-wrap--custom-bullet">
              <Swiper {...params} getSwiper={setSwiper}>
                {testimonialDataFour &&
                  testimonialDataFour.map((single, key) => {
                    return (
                      <div className="padtes4">        
            <div className="blog-post blog-post--style-two">
              <div className="blog-post__image">
                <Link
              href={`/blog/[slug]?slug=${single.id}`}
              as={"/blog/" + single.id}
            >
                  <a>
                    <img src={single.image} alt="blog_small_img1" />
                  </a>
                </Link>
              </div>
              <div className="blog-post__content">
                <div className="blog-text">
                  <h6 className="blog-title">
                    <Link
              href={`/blog/[slug]?slug=${single.id}`}
              as={"/blog/" + single.id}
            >
                      <a>
                        {single.title}
                      </a>
                    </Link>
                  </h6>
                  <ul className="blog-meta">
                    <li>
                      <Link
              href={`/blog/[slug]?slug=${single.id}`}
              as={"/blog/" + single.id}
            >
                        <a>
                          <FaCalendarAlt /> {single.date}
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <p>
                    {single.pera}
                  </p>
                </div>
              </div>
            </div>
            </div>
                    );
                  })}
              </Swiper>
              </div>
      </div>
    </div>
  );
};

export default TestimonialFour;
