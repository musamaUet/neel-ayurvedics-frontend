
import { Container, Row, Col } from "react-bootstrap";

const BannerTwo = () => {
  return (
    <div className="banner-area space-pt--50 ">
      <Container>
      <Row className="justify-content-center">
          <Col md={6}>
            <div className="section-title text-center space-mb--25">
              <h2>How online consultation works?</h2>
              <p>Start consultation in 4 easy steps</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={6}>
            <div className="appoint3">
              <span>1</span>
              <h4>Start a Session</h4>
              <p>Choose the category you would like to consult in, then enter the basic details of the patient.</p>
              <img
                src="/assets/images/banner/app1.png"
                alt="shop_banner_img1"
              />
            </div>
          </Col>
          <Col md={3} sm={6}>
          <div className="appoint3">
              <span>1</span>
              <h4>Start a Session</h4>
              <p>Choose the category you would like to consult in, then enter the basic details of the patient.</p>
              <img
                src="/assets/images/banner/app2.png"
                alt="shop_banner_img1"
              />
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="appoint3">
              <span>1</span>
              <h4>Start a Session</h4>
              <p>Choose the category you would like to consult in, then enter the basic details of the patient.</p>
              <img
                src="/assets/images/banner/app3.png"
                alt="shop_banner_img1"
              />
            </div>
          </Col>
          <Col md={3} sm={6}>
          <div className="appoint3">
              <span>1</span>
              <h4>Start a Session</h4>
              <p>Choose the category you would like to consult in, then enter the basic details of the patient.</p>
              <img
                src="/assets/images/banner/app4.png"
                alt="shop_banner_img1"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerTwo;
