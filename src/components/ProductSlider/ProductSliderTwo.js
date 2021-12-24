import { Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { ProductGridWrapperTwo } from "../ProductThumb";

const ProductSliderTwo = ({ title, products, items }) => {
  const params = {
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: items ? items : 1,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };
console.log(products)
  return (
    <div className="product-slider-area newsilderpro pad10 space-pt--50">
      <Row>
        <Col md={12}>
          <div className="section-title">
            {title && <h2>{title}</h2>}
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="product-slider-wrap">
            <Swiper {...params}>
              <ProductGridWrapperTwo
                products={products}
                sliderClass="swiper-slide"
                bottomSpace="space-mb--30"
              />
            </Swiper>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductSliderTwo;
