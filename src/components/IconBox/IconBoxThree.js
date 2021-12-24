import { Container, Row, Col } from "react-bootstrap";

const IconBoxThree = () => {
  return (
    <div className="icon-box-area space-pb--50">
      <Container>
        <Row className="no-gutters">
        <div className="col-4">
            <div className="icon-box icon-box--style4">
              <div className="icon-box__icon">
                <i className="flaticon-lock" />
              </div>
              <div className="icon-box__content">
                <h6>100% SECURE</h6>
                <p>100% Payment Protection</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="icon-box icon-box--style4 border1">
              <div className="icon-box__icon">
                <i className="flaticon-money-back" />
              </div>
              <div className="icon-box__content">
                <h6>Easy Returns</h6>
                <p>Easy Return & Refund</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="icon-box icon-box--style4">
              <div className="icon-box__icon">
                <i className="flaticon-support" />
              </div>
              <div className="icon-box__content">
                <h6>Help Center</h6>
                <p>Call:0000000000 or Read FAQ </p>
              </div>
            </div>
          </div>
         
        </Row>
      </Container>
    </div>
  );
};

export default IconBoxThree;
