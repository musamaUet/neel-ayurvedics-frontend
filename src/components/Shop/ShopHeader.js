import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import TabContent from "react-bootstrap/TabContent";
import { Link } from "react-scroll";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { FiFilter } from "react-icons/fi";

const ShopHeader = ({ getFilterSortParams, layoutClass }) => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <div className="shop-header-area">
      <Row className={`align-items-center  ${layoutClass ? layoutClass : ""}`}>
        <Col>
          <div className="shop-header">
            <div class="productSortWrap">
              <span>Sort By:</span>
              <a class="wavelet active">Popularity</a>
              <a class="wavelet">Name</a>
              <a class="wavelet">Price Low to High</a>
              <a class="wavelet">Price High to Low</a>
              <a class="wavelet">Discount</a>
              <a class="wavelet">New Arrivals</a>
            </div>
            {/* <div className="shop-header__left">
              <select
                className="form-control form-control-sm"
                onChange={(e) =>
                  getFilterSortParams("filterSort", e.target.value)
                }
              >
                <option value="default">Default</option>
                <option value="priceHighToLow">Price - High to Low</option>
                <option value="priceLowToHigh">Price - Low to High</option>
              </select>
            </div> */}
            <div className="shop-header__right">
              <div className="products-view">
                {values.map((v, idx) => (
                  <Button
                    key={idx}
                    className="me-2 btn1"
                    onClick={() => handleShow(v)}
                  >
                    <FiFilter /> Filter
                    {typeof v === "string" && `below ${v.split("-")[0]}`}
                  </Button>
                ))}

                <Modal
                  show={show}
                  fullscreen={fullscreen}
                  onHide={() => setShow(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Filter</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="first"
                    >
                      <Row>
                        <Col sm={3}>
                          <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                              <Nav.Link eventKey="first">Sort</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">Category</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="four">Price</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third">Brand</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={9}>
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <select
                                className="form-control form-control-sm"
                                onChange={(e) =>
                                  getFilterSortParams(
                                    "filterSort",
                                    e.target.value
                                  )
                                }
                              >
                                <option value="default">Default</option>
                                <option value="priceHighToLow">
                                  Price - High to Low
                                </option>
                                <option value="priceLowToHigh">
                                  Price - Low to High
                                </option>
                              </select>
                            </Tab.Pane>
                          </Tab.Content>
                          <Tab.Content>
                            <Tab.Pane eventKey="second">
                              <ListGroup>
                                <ListGroup.Item>
                                  <Link>- Homopathy</Link>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <Link>- Homopathy</Link>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <Link>- Homopathy</Link>
                                </ListGroup.Item>
                              </ListGroup>
                            </Tab.Pane>
                            <Tab.Pane eventKey="four">
                              <Form>
                                {["checkbox"].map((type) => (
                                  <div key={`default-${type}`} className="mb-3">
                                    <Form.Check
                                      type={type}
                                      id={`default-${type}`}
                                      label={`Below 200`}
                                    />
                                    <Form.Check
                                      type={type}
                                      id={`default-${type}`}
                                      label={`200-300`}
                                    />
                                    <Form.Check
                                      type={type}
                                      id={`default-${type}`}
                                      label={`300-400`}
                                    />
                                  </div>
                                ))}
                              </Form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                              <Form>
                                {["checkbox"].map((type) => (
                                  <div key={`default-${type}`} className="mb-3">
                                    <Form.Check
                                      type={type}
                                      id={`default-${type}`}
                                      label={`Poxi`}
                                    />
                                    <Form.Check
                                      type={type}
                                      id={`default-${type}`}
                                      label={`HamDard`}
                                    />
                                    <Form.Check
                                      type={type}
                                      id={`default-${type}`}
                                      label={`Dabar`}
                                    />
                                  </div>
                                ))}
                              </Form>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary">Save</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ShopHeader;
