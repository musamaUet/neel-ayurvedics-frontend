import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const BannerSix = () => {
  return (
    <div className="banner-area space-pb--50 hide1">
      <div className="custom-container3">
        <Row>
            <div className="sale-banner mb-0">
              <Link href="/shop/grid-left-sidebar">
                <a className="hover-effect">
                  <img
                    src="/assets/images/banner/banner3.png"
                    alt="shop_banner_img11"
                  />
                </a>
              </Link>
            </div>
        </Row>
      </div>
    </div>
  );
};

export default BannerSix;
