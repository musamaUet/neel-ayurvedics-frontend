import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HeroSliderFive = ({ heroSliderData, sidebar }) => {
  const params = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // },
    // renderPrevButton: () => (
    //   <button className="swiper-button-prev ht-swiper-button-nav">
    //     <FiChevronLeft />
    //   </button>
    // ),
    // renderNextButton: () => (
    //   <button className="swiper-button-next ht-swiper-button-nav">
    //     <FiChevronRight />
    //   </button>
    // )
  };
  // console.log(heroSliderData,sidebar)
  // console.log(sidebar[0].title);
  return (
    <div className="hero-slider space-pb--50">
      <div className="custom-container2">
        <Row>
          <Col lg={9}>
            <div className="hero-slider__wrapper hero-slider__wrapper--style-three mt-3">
              <Link href="#">
                <Swiper {...params}>
                  {heroSliderData &&
                    heroSliderData.map((single, key) => {
                      return (
                        <div
                          className="hero-slider__slide bg-image"
                          style={{
                            backgroundImage: `url(${single.file_location})`,
                          }}
                          key={key}
                        ></div>
                      );
                    })}
                </Swiper>
              </Link>
            </div>
          </Col>
          <Col lg={3} className="box1 mt-3">
            <Row>
              <Col xl={12}>
                <div className="sale-banner sale-banner--style-two px-0">
                  <Link href="#">
                    <a className="hover-effect">
                      <div className="el-title text-white">
                        <h6>Tphone Collection</h6>
                        <span>{sidebar[0].title}</span>
                      </div>
                      <div className="el-img">
                        <img
                          src={sidebar[0].file_location}
                          alt="shop_banner_img6"
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              </Col>
              {/* <Col xl={12} lg={6}>
                <div className="sale-banner sale-banner--style-two bg--blue-three px-0 mb-0">
                  <Link href="#">
                    <a className="hover-effect">
                      <div className="el-title-two text-white text-right w-100">
                        <h6>JAC Computer</h6>
                        <span>
                        {sidebar[1].title}
                        </span>
                      </div>
                      <div className="el-img">
                        <img
                          src={sidebar[1].file_location}
                          alt="shop_banner_img7"
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              </Col> */}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroSliderFive;
