import Link from "next/link";
import {  Row } from "react-bootstrap";

const BannerTen = () => {
  return (
    <div className="banner-area space-pb--50">
      <div className="custom-container4">
              <Link href="/shop/grid-left-sidebar">
                <a className="hover-effect">
                  <img
                    src="/assets/images/banner/appointment2.jpg"
                    alt="shop_banner_img11"
                  />
                </a>
              </Link>
      </div>
    </div>
  );
};

export default BannerTen;
