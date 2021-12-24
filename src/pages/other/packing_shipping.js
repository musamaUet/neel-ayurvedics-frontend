
import { LayoutSix } from "../../layouts";
import { Container, Row, Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table'

const Invoice = () => {
  return (
    <LayoutSix>
      {/* breadcrumb */}
      <div className="invoice-content space-pt--r100 space-pb--r100">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} xs={12}>
               <Row>
               <Col xs={12}>
                 <Row>
                 <Col xs={7}>
                 <img
                  className="logo-light logoinvoice"
                  src="/assets/images/logo.jpg"
                  alt="logo"
                />
                  <h2>Packing Ship</h2>
                 </Col>
                 <Col xs={5}>
                 <h6>Neel Ayurvedics</h6>
                   <p>“Neel Ayurvedics”, Millpara main road, Rajkot360002, Gujarat.</p>
                   
                 </Col>
                 </Row>
               </Col>

               <Col xs={4}>
                <p>Moazzam Loynmoon
                4, Krishna Kunj, Gnd. Flr.,
                Raghavji Road, Cumballa Hil, Last
                bldg on the left
                Mumbai 400026
                Maharashtra 
                </p>
                <p>Signet_instruments@yahoo.com
                </p>
               </Col>
               <Col md={3} xs={1}></Col>
               <Col xs={5} className="side1">
                   <p><span>Invoice Number:</span>3094</p>
                   <p><span>Invoice Date:</span>August 1, 2021</p>
                   <p><span>Order Number:</span>28594</p>
                   <p><span>Order Number:</span>August 1, 2021</p>
                   <p><span>Payment Method:</span>Cash on delivery</p>
               </Col>

               <Col xs={12} className="table2">
                   <Row className="table1 bordernew">
                      <Col xs={7}>
                          <p>Product</p>
                      </Col>
                      <Col xs={5}>
                              <p>Quantity</p>
                      </Col>
                   </Row>
                   <Row className="bordernew">
                      <Col xs={7}>
                          <p>Alarsin D2D Tablet</p>
                      </Col>
                      <Col xs={5}>
                      <p>2</p>
                       </Col>
                       </Row>

                     
                </Col>

                {/* <Col xs="12">
                  <hr />
                  <p className="footer">© 2019 Neel Ayurvedics. All Rights Reserved</p>
                </Col> */}
               </Row>
             </Col>
            </Row>   
        </Container>
      </div>
    </LayoutSix>
  );
};

export default Invoice;
