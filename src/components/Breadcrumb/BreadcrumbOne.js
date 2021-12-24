import { Container, Row, Col } from "react-bootstrap";

const BreadcrumbOne = ({ children }) => {
  return (
    <div className="breadcrumb-section bg--grey space-pt--10 space-pb--10">
      <Container>
        <Row>
          <Col md={12}>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default BreadcrumbOne;
