
import { Container, Row, Col } from "react-bootstrap";

const BannerThree = () => {
  return (
    <div className="banner-area space-pt--50 space-pb--50">
      <Container>
         
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="section-title text-center space-mb--25">
              <h2>Key Specialities</h2>
              <p>Consult with experienced doctors in various field</p>
            </div>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col xs={3}>
            <div className="appoint1">
                  <img
                    src="/assets/images/banner/med1.png"
                    alt="shop_banner_img3"
                  />
                  <span>Homeopathy</span>
            </div>
          </Col>
          <Col xs={3}>
            <div className="appoint1">
                  <img
                    src="/assets/images/banner/med2.png"
                    alt="shop_banner_img3"
                  />
                  <span>Ayurveda</span>
            </div>
          </Col>
          <Col xs={3}>
            <div className="appoint1">
                  <img
                    src="/assets/images/banner/med3.png"
                    alt="shop_banner_img3"
                  />
                  <span>Unani</span>
            </div>
          </Col>
          <Col xs={3}>
            <div className="appoint1">
                  <img
                    src="/assets/images/banner/med4.png"
                    alt="shop_banner_img3"
                  />
                  <span>Diet/Nutrition</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerThree;
