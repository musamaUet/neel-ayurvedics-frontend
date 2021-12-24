import Link from "next/link";
import { LayoutSix } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";

const Refund_policy = () => {
  return (
    <LayoutSix>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Return & Refund Policy">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Return & Refund Policy</li>
        </ol>
      </BreadcrumbOne>
      <div className="terms-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col>
              <div className="term-conditions">
              <div class="wpb_wrapper">
			<h5><strong>Return &amp; Refund Policy</strong></h5>
<p>Thanks for shopping at www.neelayurvedics.com</p>
<p>If you are not entirely satisfied with your purchase, we’re here to help.</p>
<p><strong>Returns</strong></p>
<p>You have 7 calendar days to return an item from the date you received it.</p>
<p>Upon receiving your Return/Refund request, Neel Ayurvedics shall verify the authenticity and the nature of the request. If Neel Ayurvedics finds that the request is genuine, it will initiate the Return and Refund process. Neel Ayurvedics shall process the refund only once it has received the confirmation from the vendor concerned in respect of the contents of the product relating to that refund.</p>
<p>In the event of frivolous and unjustified complaints regarding the quality and content of the products, Neel Ayurvedics reserves the right to pursue necessary legal actions against you and you will be solely liable for all costs incurred by Neel Ayurvedics in this regard.</p>
<p>To be eligible for a return, your item must be unused and in the same condition that you received it.</p>
<p>Your item must be in the original packaging.</p>
<p>Your item needs to have the receipt or proof of purchase.</p>
<p>Any wrong ordering of product doesn’t qualify for Return.</p>
<p><strong>Refunds</strong></p>
<p>Once we receive your item, we will inspect it and notify you that we have received your returned</p>
<p>item. We will immediately notify you on the status of your refund after inspecting the item.</p>
<p>If your return is approved, we will initiate a refund as mentioned below</p>
<ol>
<li>Order placed through online wallet will be credited to the wallet; and</li>
<li>Order placed through cash on delivery will be refunded through fund transfer to customer bank account.</li>
</ol>
<p>You will receive the credit within a certain amount of days, depending on your card issuer’s policies or wallet policies.</p>
<p><strong>Shipping</strong></p>
<p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non&shy;refundable.</p>
<p>If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
<p><strong>Contact Us</strong></p>
<p>If you have any questions on how to return your item to us, contact us.</p>
<p><strong>Email id:<a href="mailto:contact@neelayurvedics.com">contact@neelayurvedics.com</a></strong></p>
<p><strong>Contact Number:<a href="tel:+91 9426780625">+91 94267 80625</a></strong></p>
<p><strong>Postal Address: “Neel Ayurvedics”, Millpara main road, Rajkot-360002, Gujarat.</strong></p>

		</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutSix>
  );
};

export default Refund_policy;
