import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";

const BannerFive = () => {
  return (
    <div className="banner-area space-pt--50 space-pb--50 bg-white">
      <Container>
       
      <Row className="justify-content-center">
          <Col md={6}>
            <div className="section-title text-center space-mb--25">
              <h2>Why Neel Ayurvedics?</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={6}>
            <div className="appoint2">
                  <img
                    src="/assets/images/banner/con1.png"
                    alt="shop_banner_img3"
                  />
                  <span>Complete Privacy</span>
                  <p>Your privacy is our priority hence we have encrypted all our chats.</p>
            </div>
          </Col>
          <Col md={4} sm={6} xs={6}>
            <div className="appoint2">
                  <img
                    src="/assets/images/banner/con2.png"
                    alt="shop_banner_img3"
                  />
                  <span>Second Opinion</span>
                  <p>
                  With a free consultation, you can also vouch for a second opinion from our doctors.
                  </p>
            </div>
          </Col>
          <Col md={4} sm={6} xs={6}>
            <div className="appoint2">
                  <img
                    src="/assets/images/banner/con3.png"
                    alt="shop_banner_img3"
                  />
                  <span>Always Available</span>
                  <p>Forget long queues, seek expert opinion anytime anywhere.</p>
            </div>
          </Col>

          <Col md={4} sm={6} xs={6}>
            <div className="appoint2">
                  <img
                    src="/assets/images/banner/con4.png"
                    alt="shop_banner_img3"
                  />
                  <span>Cost Effective</span>
                  <p>Get expert opinion online at a price that does not hurt your pocket anymore.</p>
            </div>
          </Col>
          <Col md={4} sm={6} xs={6}>
            <div className="appoint2">
                  <img
                    src="/assets/images/banner/con5.png"
                    alt="shop_banner_img3"
                  />
                  <span>Certified Doctors</span>
                  <p>
                  All your health queries answered by experienced professionals.
                  </p>
            </div>
          </Col>
          <Col md={4} sm={6} xs={6}>
            <div className="appoint2">
                  <img
                    src="/assets/images/banner/con6.png"
                    alt="shop_banner_img3"
                  />
                  <span>E-commerce Support</span>
                  <p>Get the prescribed medicines delivered to your doorstep with our online pharmacy.</p>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default BannerFive;
