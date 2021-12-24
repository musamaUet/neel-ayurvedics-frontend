import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { IoMdAdd } from "react-icons/io";
import { LayoutSix } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";

const Faq = () => {
  return (
    <LayoutSix>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="F.A.Q">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">F.A.Q</li>
        </ol>
      </BreadcrumbOne>
      <div className="faq-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
           
              <div className="heading-s1 mb-3 mb-md-5 text-center">
                <h3>Frequently Asked Questions</h3>
              </div>
            <Col md={6}>
              <Accordion defaultActiveKey="0">
                <Card className="single-faq">
                  <Card.Header className="panel-heading">
                    <Accordion.Toggle variant="link" eventKey="0">
                      <h3 className="panel-title">
                      Is my personal information kept private?
                        <IoMdAdd />
                      </h3>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <p>
                      Please be assured that your personal information is kept private and confidential, and at no point will we share it with a third party. For more information, please read our Privacy Policy in full.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card className="single-faq">
                  <Card.Header className="panel-heading">
                    <Accordion.Toggle variant="link" eventKey="1">
                      <h3 className="panel-title">
                      Do you ship outside India?
                        <IoMdAdd />
                      </h3>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <p>
                      Yes, we do ship outside India. We ship to more than 150 countries across the world like USA, UK, Canada, Australia, New Zealand, Ireland, Germany, France, Hong Kong, Sweden, Singapore, UAE, Sri Lanka, etc.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card className="single-faq">
                  <Card.Header className="panel-heading">
                    <Accordion.Toggle variant="link" eventKey="2">
                      <h3 className="panel-title">
                      How long will it take for me to receive my product?
                        <IoMdAdd />
                      </h3>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <p>
                      The orders will be shipped to you within a week. These are merely indicative, our endeavor will be to get the order delivered to you as fast as possible. If we foresee any delays, our team will update you about the same well in time.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card className="single-faq">
                  <Card.Header className="panel-heading">
                    <Accordion.Toggle variant="link" eventKey="3">
                      <h3 className="panel-title">
                      Is It Possible For Me To Track My Order?
                        <IoMdAdd />
                      </h3>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <p>
                      Once the order has been handed over to the courier agency, we will Email/Whatsapp you a tracking code, along with the website link on which will allow you to monitor the status of your shipment. The tracking code may take 24 business hours to activate on the tracking website.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card className="single-faq">
                  <Card.Header className="panel-heading">
                    <Accordion.Toggle variant="link" eventKey="4">
                      <h3 className="panel-title">
                      Are The Colors Or Products Shown On The Website Accurate?
                        <IoMdAdd />
                      </h3>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <p>
                      The original product might look slightly different due to the effect of lighting or in case the particular company has changed its packaging.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card className="single-faq">
                  <Card.Header className="panel-heading">
                    <Accordion.Toggle variant="link" eventKey="5">
                      <h3 className="panel-title">
                      What is your payment method?
                        <IoMdAdd />
                      </h3>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <p>
                      For now, order within India we have COD (Cash on Delivery) and CCAVENUE (online payment) where we accept all kinds of credit cards, debit cards, Wallets, UPI, etc
                      </p>
                      <p>
                      For International orders, we accept payment through PayPal or Direct Bank Transfer.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                
              </Accordion>
            </Col>
            <Col md={6} className="mt-4 mt-md-0">
              <Accordion defaultActiveKey="0">
              <Card className="single-faq">
                  <Card.Header className="panel-heading">
                    <Accordion.Toggle variant="link" eventKey="0">
                      <h3 className="panel-title">
                      How Do I Return A Product?
                        <IoMdAdd />
                      </h3>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <p>In case a product ordered is damaged or has a manufacturing defect or a wrong product has been delivered, we would request you to please take a photograph of the damaged product/s and contact us at&nbsp;<a href="mailto:contact@neelayurvedics.com">contact@neelayurvedics.com</a>&nbsp;within 7 days of receiving the order. Please retain all packaging materials, original invoice, and the product/s until a set of instructions from our side.
                    </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="single-faq">
                  <Card.Header className="panel-heading">
                    <Accordion.Toggle variant="link" eventKey="1">
                      <h3 className="panel-title">
                      Where Are You Based?
                        <IoMdAdd />
                      </h3>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <p>
                      We are based out of Rajkot, India, and all products are shipped from Rajkot main office.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="single-faq">
                  <Card.Header className="panel-heading">
                    <Accordion.Toggle variant="link" eventKey="2">
                      <h3 className="panel-title">
                      Can My Billing Address And Shipping Address Be Different?
                        <IoMdAdd />
                      </h3>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <p>
                      Yes, the billing and shipping address can be different. However, neelayurvedics.com does not deliver to P.O. Box or Drop Box addresses. Customers are requested to provide full addresses with the postal code / Zip code.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="single-faq">
                  <Card.Header className="panel-heading">
                    <Accordion.Toggle variant="link" eventKey="3">
                      <h3 className="panel-title">
                      Do I Need To Be A Member To Shop On Your Site?
                        <IoMdAdd />
                      </h3>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <p>
                      Yes, you need to register as a member to shop on neelayurvedics.com and complete your transaction. It helps us to know you better!
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="single-faq">
                  <Card.Header className="panel-heading">
                    <Accordion.Toggle variant="link" eventKey="4">
                      <h3 className="panel-title">
                      I’ve forgotten my password. What should I do?
                        <IoMdAdd />
                      </h3>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <p>
                      To re-set your password, follow the ‘FORGOTTEN PASSWORD’ instructions on the SIGN IN page. Please note, for security reasons we are unable to send your old password via email.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="single-faq">
                  <Card.Header className="panel-heading">
                    <Accordion.Toggle variant="link" eventKey="5">
                      <h3 className="panel-title">
                      Do you ship to multiple addresses?
                        <IoMdAdd />
                      </h3>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <p>
                      We are only able to deliver to one address per order. If you would like to send your purchases to multiple addresses, we suggest that you place a separate order for each destination.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutSix>
  );
};

export default Faq;
