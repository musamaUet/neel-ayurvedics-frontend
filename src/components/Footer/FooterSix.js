import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { animateScroll } from "react-scroll";
import { SubscribeEmailFour } from "../Newsletter";
import {
  IoIosPhonePortrait,
  IoIosMailOpen,
  IoIosPin,
  IoIosArrowUp,
  IoIosSend
} from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
  FaInstagram,
  FaHeart
} from "react-icons/fa";

const FooterSix = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <Fragment>
      <div className="bg--default space-pt--60 space-pb--60">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="newsletter-content d-flex mb-3 mb-md-0">
                <div className="icon">
                  <IoIosSend />
                </div>
                <div className="newsletter-text-wrapper">
                  <h3 className="newsletter-title text-white">
                    Join Our Newsletter Now
                  </h3>
                  <p> Register now to get updates on promotions. </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <SubscribeEmailFour
                mailchimpUrl="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                alertColor="#fff"
                customLayoutClass="rounded-input--style-two"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <footer className="bg--grey">
        <div className="footer-top footer-top--style-two">
          <Container>
            <Row>
              <Col lg={2} md={4} sm={6}>
              <div className="widget">
                  <h6 className="widget-title">Brands</h6>
                  <ul className="widget-links">
                    <li>
                      <Link href="/other/about-us">
                        <a>Baidyanath</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/other/faq">
                        <a>Dhanvantari</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Sandu</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/other/contact-us">
                        <a>Unjha</a>
                      </Link>
                    </li>
                  </ul>
                  
                </div>

              </Col>
              <Col lg={2} md={4} sm={6}>
                <div className="widget">
                  <h6 className="widget-title">More Brands</h6>
                  <ul className="widget-links">
                    <li>
                      <Link href="/other/about-us">
                        <a>Dabur</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/other/faq">
                        <a>Himalaya</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Shanker</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Zandu</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={4} sm={6}>
                <div className="widget">
                  <h6 className="widget-title">Useful Links</h6>
                  <ul className="widget-links">
                  <li>
                      <Link href="/other/terms">
                        <a>Terms and Conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/other/refund_policy">
                        <a>Return & Refund Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/other/international_policy">
                        <a>International Shipping Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/other/privacy_policy">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/other/faq">
                        <a>FAQ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/other/about-us">
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/other/contact-us">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={4} sm={6}>
                <div className="widget">
                  <h6 className="widget-title">My Account</h6>
                  <ul className="widget-links">
                    <li>
                      <Link href="/other/my-account">
                        <a>My Account</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Discount</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Returns</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Orders History</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Order Tracking</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <div className="widget">
                  <h6 className="widget-title">Download App</h6>
                  <ul className="app-list">
                    <li>
                      <a href="#">
                        <img src="/assets/images/icons/f1.png" alt="f1" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/assets/images/icons/f2.png" alt="f2" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h6 className="widget-title">Social</h6>
                  <ul className="social-icons social-icons--style-two text-center text-lg-left mb-3 mb-lg-0">
                    <li>
                      <a href="#" className="sc_facebook">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc_twitter">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc_google">
                        <FaGooglePlusG />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc_youtube">
                        <FaYoutube />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc_instagram">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-bottom space-pt--30 space-pb--30">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <p className="mb-3 mb-lg-0">
                Neel Ayurvedics Copyright &copy; {new Date().getFullYear() + " "}.
                </p>
              </Col>

              <Col lg={6}>
                <ul className="footer-payment text-center text-lg-right">
                  <li>
                    <a href="#">
                      <img src="/assets/images/icons/visa.png" alt="visa" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/icons/discover.png"
                        alt="discover"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/icons/master_card.png"
                        alt="master_card"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/icons/paypal.png" alt="paypal" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/icons/amarican_express.png"
                        alt="american_express"
                      />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <button
          className={`scroll-top ${scroll > top ? "show" : ""}`}
          onClick={() => scrollToTop()}
        >
          <IoIosArrowUp />
        </button>
      </footer>
    </Fragment>
  );
};

export default FooterSix;