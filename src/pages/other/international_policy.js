import Link from "next/link";
import { LayoutSix } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";

const International_policy = () => {
  return (
    <LayoutSix>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="International Shipping Policy">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">International Shipping Policy</li>
        </ol>
      </BreadcrumbOne>
      <div className="terms-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col>
              <div className="term-conditions">
              <div class="wpb_wrapper">
			<h5><strong>FOLLOWING IS OUR International SHIPPING POLICY:</strong></h5>
<p>&nbsp;</p>
<ol>
<li>You may be subject to import duties and taxes on certain items, which are levied once a shipment reaches your country. So If Applied, Additional charges for customs clearance must be borne by Customer. We have no control over these charges and cannot predict what they may be. Customs policies vary widely from country to country. Additionally, when ordering from <a href="https://www.neelayurvedics.com/">www.neelayurvedics.com</a><a href="https://www.neelayurvedics.com/">&nbsp;</a>you are considered the importer of record and must comply with all laws and regulations of the country in which you are receiving the goods.</li>
<li>Indian Customers living abroad shall first Confirm the Custom Rules &amp; DHL Rules at your country. We will Provide All the documents for clearing customs of India but incase if there is any document is required at foreign country then it should be provided by customer.</li>
<li>Shipment of items against an order is subject to availability and is at the sole discretion of&nbsp;<a href="https://www.neelayurvedics.com/"> neelayurvedics.com.</a></li>
<li>The Shipping Address is where you wish to receive your order. It could be your home or office or any other valid address. You must submit your shipping address correctly to ensure the product reaches you promptly.</li>
<li>Once we receive order and its payment, the order status will change to processing. We will then pack your order and ship it within next 2-3 working days. This is done along with proper documentation for customs clearance so that your order reaches you on time &amp; in perfect condition. Once we ship your order, we will share the tracking details with you.</li>
<li>Shipping time is the time taken to deliver an order at a shipping address, after the shipment is cleared from customs of India.</li>
<li>We deliver the merchandise on given specific shipping address only &amp; not in the hand of specific person. If recipient is not at the given address, the products are likely to be left with the neighbor along with an attached note. For the items delivered by the courier / speed post / registered post, their respective policies apply.</li>
<li>We are not responsible for missed/late deliveries due to curfews, acts of government, acts of nature, holidays, incorrect addresses or acts of war.</li>
<li>We reserve the right to deny services to any sender, without any explanation.</li>
<li>We shall try our best for prompt delivery. However, delayed/early delivery for whatever reason shall not entitle the user for any damages or compensation.</li>
<li>Inspite of full caution taken at the time of delivery, <a href="https://www.neelayurvedics.com/">ww.neelayurvedics.com</a> will not be responsible for a wrong delivery if the receiver of the products at the address on the order form misappropriates, damages or fails to hand over the products to the person named on the order form and takes the item posing himself to be the correct person.</li>
<li><a href="https://www.neelayurvedics.com/">www.neelayurvedics.com</a> will deliver exactly the same items displayed on its web pages and from the same sources indicated, packing of the medicines may be vary. However, in certain unavoidable circumstances arising due to non-availability of products will inform the sender to change the order or wait until it becomes available or we can cancel the order and 100% amount will be refunded within 7 or 10 days.</li>
<li>The delivery time estimates may vary slightly from State to State, from country to country.&nbsp;Days are calculated as working days, excluding Saturdays, Sundays &amp; Holidays.</li>
<li>Always double-check that you have correctly entered your delivery address. Ensure that your full name, house number, street, building number, land mark, area, city and postal code (if applicable) and country is accurate and complete.</li>
</ol>

		</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutSix>
  );
};

export default International_policy;
